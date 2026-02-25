import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Anali Agri',
  description: 'Privacy policy for Anali Agri agriculture marketplace.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl font-semibold text-primary mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>Last updated: February 2025</p>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">1. Information We Collect</h2>
          <p>We collect information you provide when registering (name, mobile number, email, location), listing details, and usage data to improve our services.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">2. How We Use Your Information</h2>
          <p>We use your information to facilitate marketplace transactions, send relevant notifications, improve our platform, and comply with legal obligations.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">3. Sharing</h2>
          <p>We do not sell your personal data. Listing and contact information may be shared with other users for transaction purposes. We may share data with service providers under strict agreements.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">4. Security</h2>
          <p>We implement industry-standard security measures to protect your data. OTP verification and encrypted storage are used for sensitive information.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">5. Contact</h2>
          <p>For privacy-related queries: privacy@analiagri.com</p>
        </section>
      </div>

      <Link href="/" className="inline-block mt-8 text-primary font-medium hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
