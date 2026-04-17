// ── terms.js ──────────────────────────────────────────────────────────────────
import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import { Footer, PageLayout } from '../components/common';

const SECTIONS = [
  { title: '1. Eligibility', content: 'You must be at least 18 years old and located in Malawi to use Kwacha Bet. By registering, you confirm that you meet these requirements. We reserve the right to verify your age and identity at any time.' },
  { title: '2. Account Registration', content: 'One account per person is permitted. You must provide accurate information during registration. Use of a Malawian phone number (+265) is required. Sharing accounts is strictly prohibited and may result in suspension.' },
  { title: '3. Deposits & Withdrawals', content: 'Minimum deposit is MWK 500. Minimum withdrawal is MWK 500. Withdrawals are processed via the same method used for deposit. Large withdrawals (over MWK 1,000,000) require manual approval within 24 hours.' },
  { title: '4. Betting Rules', content: 'All bets are final once confirmed. Minimum stake is MWK 50. Maximum payout per ticket is MWK 10,000,000. In the event of a void selection in an accumulator, the odds for that selection are removed and the remaining selections stand.' },
  { title: '5. Bonuses & Promotions', content: 'Bonuses are subject to wagering requirements before withdrawal. Welcome bonus requires 5x wagering at minimum odds of 1.5. Kwacha Bet reserves the right to modify or withdraw promotions at any time. Bonus abuse will result in account suspension.' },
  { title: '6. Withholding Tax', content: 'As required by Malawian law, a 20% withholding tax is deducted from all winnings before they are credited to your account. This is automatically calculated and deducted by the system.' },
  { title: '7. Responsible Gambling', content: 'Kwacha Bet is committed to responsible gambling. We offer self-exclusion options and deposit limits. If you feel gambling is becoming a problem, contact support immediately or visit GamblingTherapy.org.' },
  { title: '8. Account Suspension', content: 'We reserve the right to suspend or close accounts involved in fraud, money laundering, or any activity that violates these terms. Funds in suspended accounts may be held pending investigation.' },
  { title: '9. Privacy', content: 'Your personal data is collected and processed as described in our Privacy Policy. We do not sell your data to third parties. Data is used solely for account management, payment processing, and legal compliance.' },
  { title: '10. Governing Law', content: 'These terms are governed by the laws of Malawi. Any disputes shall be resolved under Malawian jurisdiction.' },
];

export default function TermsPage() {
  return (
    <>
      <Head><title>Terms & Conditions — Kwacha Bet</title></Head>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <PageLayout title="Terms & Conditions" subtitle="Last updated: January 2024">
          <div className="max-w-2xl space-y-6">
            <div className="card p-4 border-brand/20 bg-brand/5">
              <p className="text-sm text-gray-300 leading-relaxed">
                Please read these terms carefully before using Kwacha Bet. By registering an account, you agree to be bound by these terms and conditions.
              </p>
            </div>
            {SECTIONS.map(s => (
              <div key={s.title} className="card p-5">
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </PageLayout>
        <Footer />
      </div>
    </>
  );
}
