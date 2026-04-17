// ── responsible-gambling.js ───────────────────────────────────────────────────
import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import { Footer, PageLayout } from '../components/common';

const SIGNS = [
  'Spending more than you can afford to lose',
  'Borrowing money to gamble',
  'Gambling to recover losses (chasing losses)',
  'Neglecting work, family, or responsibilities',
  'Feeling anxious, guilty, or secretive about gambling',
  'Unable to stop even when you want to',
  'Gambling to escape problems or bad feelings',
];

export default function ResponsibleGamblingPage() {
  return (
    <>
      <Head><title>Responsible Gambling — Kwacha Bet</title></Head>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <PageLayout title="Responsible Gambling" subtitle="We care about your wellbeing">
          <div className="max-w-2xl space-y-4">
            <div className="card p-5 border-brand/20 bg-brand/5">
              <p className="text-white font-semibold mb-2">Gambling should be fun — keep it that way.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kwacha Bet is committed to responsible gambling. We encourage all our users to gamble for entertainment only, within their means, and never to chase losses.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-bold mb-3">Signs of Problem Gambling</h3>
              <ul className="space-y-2">
                {SIGNS.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">⚠</span>{s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-bold mb-3">Our Responsible Gambling Tools</h3>
              <div className="space-y-3">
                {[
                  { title: 'Deposit Limits', desc: 'Set daily, weekly, or monthly deposit limits from your profile settings.' },
                  { title: 'Self-Exclusion', desc: 'Temporarily or permanently exclude yourself from betting. Contact support to activate.' },
                  { title: 'Reality Check', desc: 'Get reminders about how long you have been logged in and how much you have spent.' },
                  { title: 'Account Cooling-Off', desc: 'Take a break from your account for 24 hours, 7 days, or 30 days.' },
                ].map(t => (
                  <div key={t.title} className="bg-dark-surface rounded-xl p-3">
                    <p className="text-white text-sm font-medium">{t.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5 border-red-900/40">
              <h3 className="text-white font-bold mb-3">Get Help</h3>
              <div className="space-y-2">
                {[
                  { label: 'GamblingTherapy.org', desc: 'Free online support and counselling', href: 'https://www.gamblingtherapy.org' },
                  { label: 'Kwacha Bet Support', desc: 'Contact us to activate self-exclusion', href: 'mailto:support@kwachabet.mw' },
                ].map(r => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between bg-dark-surface rounded-xl p-3 hover:border-brand transition-all border border-dark-border">
                    <div>
                      <p className="text-brand text-sm font-medium">{r.label}</p>
                      <p className="text-gray-500 text-xs">{r.desc}</p>
                    </div>
                    <span className="text-gray-500">→</span>
                  </a>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-gray-700 py-4">
              If you are in crisis, please contact a local mental health professional or call a helpline immediately.
            </p>
          </div>
        </PageLayout>
        <Footer />
      </div>
    </>
  );
}
