import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import { Footer, PageLayout } from '../components/common';

const SECTIONS = [
  { title: 'Information We Collect', content: 'We collect your name, phone number, date of birth, and optionally your email address when you register. We also collect device fingerprint, IP address, and location data for fraud prevention purposes. Transaction history, betting activity, and communication preferences are stored securely.' },
  { title: 'How We Use Your Information', content: 'Your information is used to operate your account, process deposits and withdrawals, send OTP codes and notifications via SMS, detect and prevent fraud, comply with legal obligations under Malawian law, and improve our platform.' },
  { title: 'SMS Communications', content: 'By registering, you consent to receive SMS messages for OTP verification, deposit and withdrawal confirmations, winning notifications, and promotional offers. You can opt out of promotional SMS at any time by contacting support.' },
  { title: 'Data Security', content: 'All passwords are hashed using bcrypt. PIN codes are encrypted before storage. All API communications use HTTPS/TLS encryption. Payment data is handled by PCI-compliant payment processors. We never store your full card details.' },
  { title: 'Data Sharing', content: 'We share data with payment processors (PayChangu) to process transactions, Africa\'s Talking for SMS delivery, and regulatory authorities when required by Malawian law. We do not sell your personal data to any third party.' },
  { title: 'Data Retention', content: 'Account and transaction data is retained for 7 years as required by Malawian financial regulations. You may request deletion of your account at any time, subject to legal retention requirements.' },
  { title: 'Your Rights', content: 'You have the right to access, correct, or request deletion of your personal data. Contact support@kwachabet.mw with any privacy requests. We will respond within 30 days.' },
  { title: 'Cookies', content: 'We use session cookies to keep you logged in and local storage for your bet slip preferences. We do not use third-party tracking cookies or serve advertising.' },
  { title: 'Contact', content: 'For privacy concerns, contact our Data Protection Officer at privacy@kwachabet.mw or write to Kwacha Bet, Lilongwe, Malawi.' },
];

export default function PrivacyPage() {
  return (
    <>
      <Head><title>Privacy Policy — Kwacha Bet</title></Head>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <PageLayout title="Privacy Policy" subtitle="Last updated: January 2024">
          <div className="max-w-2xl space-y-4">
            <div className="card p-4 border-blue-800/40 bg-blue-900/5">
              <p className="text-sm text-gray-300 leading-relaxed">
                Kwacha Bet is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.
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
