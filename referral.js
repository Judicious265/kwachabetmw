import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/common/Navbar';
import { Footer, PageLayout } from '../components/common';
import { useAuthStore } from '../store';
import toast from 'react-hot-toast';

export default function ReferralPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const [copied, setCopied] = useState(false);

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') router.push('/login');
    return null;
  }

  const referralUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://kwachabet.mw'}/register?ref=${user?.referral_code}`;

  function copyCode() {
    navigator.clipboard.writeText(referralUrl).then(() => {
      setCopied(true);
      toast.success('Referral link copied!');
      setTimeout(() => setCopied(false), 3000);
    });
  }

  function shareWhatsApp() {
    const msg = `Join me on Kwacha Bet — Malawi's best betting platform! Use my referral link and we both earn MWK 2,000: ${referralUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }

  function shareSMS() {
    window.open(`sms:?body=Join Kwacha Bet with my link: ${referralUrl}`, '_blank');
  }

  const HOW_IT_WORKS = [
    { num: '1', title: 'Share your link', desc: 'Send your unique referral link to friends and family.' },
    { num: '2', title: 'Friend registers', desc: 'They sign up using your referral link or code.' },
    { num: '3', title: 'Friend deposits', desc: 'They make their first deposit of at least MWK 500.' },
    { num: '4', title: 'You both earn', desc: 'You get MWK 2,000 instantly credited to your wallet.' },
  ];

  return (
    <>
      <Head><title>Refer & Earn — Kwacha Bet</title></Head>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <PageLayout title="Refer & Earn" subtitle="Earn MWK 2,000 for every friend you refer">
          <div className="max-w-lg space-y-4">

            {/* Earnings banner */}
            <div className="card p-6 text-center border-brand/30 bg-brand/5">
              <p className="text-5xl font-black text-brand mb-1">MWK 2,000</p>
              <p className="text-gray-400 text-sm">earned per successful referral</p>
              <p className="text-xs text-gray-600 mt-1">No limit on how many friends you can refer</p>
            </div>

            {/* Your referral code */}
            <div className="card p-5">
              <h3 className="text-white font-semibold mb-3">Your Referral Code</h3>
              <div className="bg-dark-surface border border-dark-border rounded-xl p-4 text-center mb-4">
                <p className="text-3xl font-black font-mono text-brand tracking-widest">{user?.referral_code}</p>
              </div>
              <div className="bg-dark-surface border border-dark-border rounded-lg px-3 py-2 flex items-center gap-2 mb-3">
                <p className="text-xs text-gray-400 flex-1 truncate font-mono">{referralUrl}</p>
                <button onClick={copyCode} className={`text-xs font-medium px-3 py-1 rounded-lg transition-all flex-shrink-0 ${copied ? 'bg-brand text-black' : 'bg-dark-card border border-dark-border text-gray-300 hover:border-brand hover:text-brand'}`}>
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={shareWhatsApp} className="btn-secondary text-sm py-2.5 justify-center">
                  📱 WhatsApp
                </button>
                <button onClick={shareSMS} className="btn-ghost text-sm py-2.5 justify-center">
                  💬 SMS
                </button>
              </div>
            </div>

            {/* How it works */}
            <div className="card p-5">
              <h3 className="text-white font-semibold mb-4">How It Works</h3>
              <div className="space-y-3">
                {HOW_IT_WORKS.map(step => (
                  <div key={step.num} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-black text-xs">{step.num}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{step.title}</p>
                      <p className="text-gray-500 text-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="card p-4 bg-dark-surface">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Terms:</strong> Referral bonus paid after referred user makes first deposit of MWK 500+.
                No wagering requirement on referral bonus. One referral bonus per unique new user.
                Kwacha Bet reserves the right to withdraw this offer at any time.
              </p>
            </div>
          </div>
        </PageLayout>
        <Footer />
      </div>
    </>
  );
}
