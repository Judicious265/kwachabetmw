import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({ baseURL: BASE, timeout: 30000 });

api.interceptors.request.use((config) => {
  const token = Cookies.get('kb_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  const fp = typeof window !== 'undefined' ? localStorage.getItem('kb_fp') : null;
  if (fp) config.headers['X-Device-Fingerprint'] = fp;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    const msg = err.response?.data?.error || 'Something went wrong.';
    const status = err.response?.status;
    if (status === 401) {
      Cookies.remove('kb_token');
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    } else if (status === 429) {
      toast.error('Too many requests. Please slow down.');
    } else if (status >= 500) {
      toast.error('Server error. Please try again.');
    }
    return Promise.reject({ message: msg, status });
  }
);

export const authAPI = {
  initiateRegister: (d) => api.post('/auth/register/initiate', d),
  verifyRegister:   (d) => api.post('/auth/register/verify', d),
  login:            (d) => api.post('/auth/login', d),
  setPin:           (d) => api.post('/auth/pin/set', d),
  verifyPin:        (d) => api.post('/auth/pin/verify', d),
  requestOTP:       ()  => api.post('/auth/otp/withdrawal'),
};

export const walletAPI = {
  getBalance:      ()  => api.get('/wallet/balance'),
  getTransactions: (p) => api.get('/wallet/transactions', { params: p }),
  deposit:         (d) => api.post('/wallet/deposit', d),
  withdraw:        (d, cfg) => api.post('/wallet/withdraw', d, cfg),
};

export const bettingAPI = {
  placeBet:    (d)   => api.post('/betting/place', d),
  getTickets:  (p)   => api.get('/betting/tickets', { params: p }),
  getTicket:   (c)   => api.get(`/betting/tickets/${c}`),
  checkTicket: (c)   => api.get(`/betting/check/${c}`),
};

export const oddsAPI = {
  getEvents:   (p) => api.get('/odds/events', { params: p }),
  getFeatured: ()  => api.get('/odds/featured'),
  getSports:   ()  => api.get('/odds/sports'),
};

export const adminAPI = {
  getDashboard:          ()        => api.get('/admin/dashboard/stats'),
  getUsers:              (p)       => api.get('/admin/users', { params: p }),
  getUserDetail:         (id)      => api.get(`/admin/users/${id}`),
  suspendUser:           (id, r)   => api.patch(`/admin/users/${id}/suspend`, { reason: r }),
  unsuspendUser:         (id)      => api.patch(`/admin/users/${id}/unsuspend`),
  getTickets:            (p)       => api.get('/admin/tickets', { params: p }),
  getTransactions:       (p)       => api.get('/admin/transactions', { params: p }),
  getPendingWithdrawals: ()        => api.get('/admin/withdrawals/pending'),
  approveWithdrawal:     (id)      => api.patch(`/admin/withdrawals/${id}/approve`),
  rejectWithdrawal:      (id, r)   => api.patch(`/admin/withdrawals/${id}/reject`, { reason: r }),
  getFraudDashboard:     (p)       => api.get('/admin/fraud/dashboard', { params: p }),
  resolveFraudFlag:      (id, n)   => api.patch(`/admin/fraud/flags/${id}/resolve`, { notes: n }),
  blacklistDevice:       (d)       => api.post('/admin/fraud/blacklist/device', d),
  getCampaigns:          ()        => api.get('/admin/bonus/campaigns'),
  createCampaign:        (d)       => api.post('/admin/bonus/campaigns', d),
  assignFreeBet:         (d)       => api.post('/admin/bonus/free-bet', d),
};

export default api;
