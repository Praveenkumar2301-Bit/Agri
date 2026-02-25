import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Anali Agri',
  description: 'Terms and conditions for using Anali Agri agriculture marketplace.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl font-semibold text-primary mb-8">Terms & Conditions</h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>Last updated: February 2025</p>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">1. Acceptance</h2>
          <p>By using Anali Agri, you agree to these terms. If you do not agree, please do not use our platform.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">2. Eligibility</h2>
          <p>You must be at least 18 years old and legally able to enter into contracts. Farmers, buyers, and service providers must provide accurate information.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">3. Listings</h2>
          <p>You are responsible for the accuracy of your listings. Prohibited items and false information may result in account suspension. We reserve the right to moderate and remove listings.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">4. Transactions</h2>
          <p>Anali Agri facilitates connections between buyers and sellers. We are not a party to transactions. Users are responsible for their own agreements, payments, and disputes.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">5. Limitation of Liability</h2>
          <p>We provide the platform &quot;as is&quot;. We are not liable for any losses arising from transactions, user conduct, or third-party actions.</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mt-8">6. Contact</h2>
          <p>For terms-related queries: legal@analiagri.com</p>
        </section>
      </div>

      <Link href="/" className="inline-block mt-8 text-primary font-medium hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
