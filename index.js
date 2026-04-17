import Link from 'next/link';

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-xs">K</span>
              </div>
              <span className="text-white font-black">Kwacha<span className="text-brand">Bet</span></span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Malawi's premier online sports betting platform. Fast, secure, and always fair.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Sports</p>
            <div className="space-y-2">
              {['Football', 'Basketball', 'Tennis', 'Ice Hockey', 'Baseball', 'Rugby'].map(s => (
                <Link key={s} href={`/?sport=${s.toLowerCase()}`} className="block text-gray-500 text-xs hover:text-gray-300 transition-colors">{s}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Account</p>
            <div className="space-y-2">
              {[
                { href: '/register',    label: 'Register' },
                { href: '/login',       label: 'Login' },
                { href: '/wallet',      label: 'My Wallet' },
                { href: '/tickets',     label: 'My Tickets' },
                { href: '/referral',    label: 'Refer & Earn' },
                { href: '/promotions',  label: 'Promotions' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="block text-gray-500 text-xs hover:text-gray-300 transition-colors">{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Help & Legal</p>
            <div className="space-y-2">
              {[
                { href: '/help',      label: 'Help Centre' },
                { href: '/terms',     label: 'Terms & Conditions' },
                { href: '/privacy',   label: 'Privacy Policy' },
                { href: '/responsible-gambling', label: 'Responsible Gambling' },
                { href: '/contact',   label: 'Contact Us' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="block text-gray-500 text-xs hover:text-gray-300 transition-colors">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600">© 2024 Kwacha Bet. All rights reserved.</span>
            <span className="bg-brand/10 border border-brand/20 text-brand text-xs px-2 py-0.5 rounded">18+</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600">Payments accepted:</span>
            <span className="text-xs bg-dark-card border border-dark-border px-2 py-0.5 rounded text-gray-400">Airtel Money</span>
            <span className="text-xs bg-dark-card border border-dark-border px-2 py-0.5 rounded text-gray-400">TNM Mpamba</span>
            <span className="text-xs bg-dark-card border border-dark-border px-2 py-0.5 rounded text-gray-400">Bank</span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-700 mt-4">
          Gambling can be addictive. Please bet responsibly. If you need help, visit GamblingTherapy.org
        </p>
      </div>
    </footer>
  );
}

// ── LiveTicker ────────────────────────────────────────────────────────────────
export function LiveTicker({ events = [] }) {
  const live = events.filter(e => e.status === 'live');
  if (!live.length) return null;
  return (
    <div className="bg-dark-card border-b border-dark-border overflow-hidden h-8 flex items-center">
      <div className="flex-shrink-0 bg-red-600 text-white text-xs font-bold px-3 h-full flex items-center">LIVE</div>
      <div className="overflow-hidden flex-1 relative">
        <div className="flex gap-10 animate-ticker whitespace-nowrap">
          {[...live, ...live].map((e, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs text-gray-300">
              <span className="text-white font-medium">{e.home_team}</span>
              <span className="text-brand font-bold tabular-nums">{e.home_score ?? 0} – {e.away_score ?? 0}</span>
              <span className="text-white font-medium">{e.away_team}</span>
              <span className="text-dark-border mx-2">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Spinner ───────────────────────────────────────────────────────────────────
export function Spinner({ size = 'md', className = '' }) {
  const sz = { sm: 'w-4 h-4 border-2', md: 'w-6 h-6 border-2', lg: 'w-10 h-10 border-3' }[size];
  return (
    <div className={`${sz} border-dark-border border-t-brand rounded-full animate-spin ${className}`} />
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────
export function EmptyState({ icon = '📭', title, subtitle, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <p className="text-white font-semibold text-lg mb-2">{title}</p>
      {subtitle && <p className="text-gray-500 text-sm mb-6 max-w-xs">{subtitle}</p>}
      {action}
    </div>
  );
}

// ── Page Layout ───────────────────────────────────────────────────────────────
export function PageLayout({ children, title, subtitle, action }) {
  return (
    <div className="page-container">
      {(title || action) && (
        <div className="flex items-center justify-between mb-6">
          <div>
            {title && <h1 className="text-2xl font-black text-white">{title}</h1>}
            {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

// ── Status Badge ─────────────────────────────────────────────────────────────
export function StatusBadge({ status }) {
  const map = {
    won:       'badge-won',
    lost:      'badge-lost',
    pending:   'badge-pending',
    live:      'badge-live',
    active:    'badge bg-green-900/40 text-green-400 border border-green-800',
    suspended: 'badge bg-red-900/40 text-red-400 border border-red-800',
    completed: 'badge bg-blue-900/40 text-blue-400 border border-blue-800',
    processing:'badge bg-yellow-900/40 text-yellow-400 border border-yellow-800',
    flagged:   'badge bg-red-900/40 text-red-400 border border-red-800',
    cancelled: 'badge bg-gray-800 text-gray-400 border border-gray-700',
  };
  return <span className={map[status] || 'badge bg-gray-800 text-gray-400'}>{status}</span>;
}
