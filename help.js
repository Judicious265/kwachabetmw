// ── help.js ───────────────────────────────────────────────────────────────────
import Head from 'next/head';
import { useState } from 'next/head';
import Navbar from '../components/common/Navbar';
import { Footer, PageLayout } from '../components/common';
import Link from 'next/link';

const FAQS = [
  { q: 'How do I deposit money?', a: 'Go to Wallet → Deposit. Choose Airtel Money or TNM Mpamba, enter your amount (min MWK 500), and follow the prompt on your phone. Bank transfer is also available. Deposits are instant.' },
  { q: 'How long do withdrawals take?', a: 'Automatic withdrawals (under MWK 1,000,000) are processed within 10 minutes. Larger withdrawals require manual review and are processed within 24 hours.' },
  { q: 'Why was my withdrawal flagged?', a: 'Our fraud protection system may flag withdrawals for review. This is normal security. Our team reviews flagged withdrawals within 24 hours. You will receive an SMS update.' },
  { q: 'How do I use my bonus?', a: 'Your welcome bonus is credited to your Bonus Wallet after your first deposit. Use it by enabling "Use bonus balance" in the bet slip. You must wager 5x the bonus amount at odds of 1.5 or higher before withdrawing.' },
  { q: 'What is a referral code?', a: 'Your unique referral code is shown in your Profile and Refer & Earn pages. Share it with friends. When they join and make their first deposit, you both earn MWK 2,000.' },
  { q: 'How do I set my PIN?', a: 'Go to Profile → Transaction PIN section. Enter and confirm your 4-digit PIN. This PIN is required for all withdrawals.' },
  { q: 'What sports can I bet on?', a: 'Football, Basketball, Tennis, Ice Hockey, Baseball, and Rugby League. Live betting is available for ongoing matches.' },
  { q: 'Why are odds grayed out?', a: 'Odds may be suspended during live matches when the outcome is uncertain (e.g. corner kick, free kick). They return to normal shortly.' },
  { q: 'What is the 20% tax on winnings?', a: 'Malawian law requires a 20% withholding tax on betting winnings. This is automatically deducted from your winnings before they are credited to your wallet.' },
  { q: 'How do I contact support?', a: 'Email support@kwachabet.mw or use WhatsApp at +265 XXX XXX XXX. Support is available 8am–10pm daily.' },
];

export default function HelpPage() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Head><title>Help Centre — Kwacha Bet</title></Head>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <PageLayout title="Help Centre" subtitle="Answers to common questions">
          <div className="max-w-2xl space-y-4">

            {/* Quick links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Deposits', href: '/wallet?tab=deposit', icon: '💰' },
                { label: 'Withdrawals', href: '/wallet?tab=withdraw', icon: '💸' },
                { label: 'Bonuses', href: '/promotions', icon: '🎁' },
                { label: 'Contact', href: '/contact', icon: '📞' },
              ].map(item => (
                <Link key={item.label} href={item.href}
                  className="card p-3 text-center hover:border-brand/40 transition-all">
                  <p className="text-2xl mb-1">{item.icon}</p>
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                </Link>
              ))}
            </div>

            {/* FAQ accordion */}
            <h3 className="text-white font-bold">Frequently Asked Questions</h3>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-dark-hover transition-colors">
                    <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                    <span className="text-gray-500 flex-shrink-0 text-lg">{open === i ? '−' : '+'}</span>
                  </button>
                  {open === i && (
                    <div className="px-4 pb-4 border-t border-dark-border">
                      <p className="text-sm text-gray-400 leading-relaxed pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="card p-5 text-center">
              <p className="text-white font-semibold mb-1">Still need help?</p>
              <p className="text-gray-500 text-sm mb-4">Our support team is available 8am–10pm daily.</p>
              <div className="flex gap-3 justify-center">
                <a href="mailto:support@kwachabet.mw" className="btn-primary text-sm px-4 py-2">📧 Email Us</a>
                <a href="https://wa.me/265XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                  className="btn-secondary text-sm px-4 py-2">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </PageLayout>
        <Footer />
      </div>
    </>
  );
}
