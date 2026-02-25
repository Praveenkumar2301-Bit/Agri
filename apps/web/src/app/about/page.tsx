import { Metadata } from 'next';
import Link from 'next/link';
import { Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Anali Agri',
  description: 'Learn about Anali Agri — connecting farmers with buyers across India.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
          <Leaf className="h-7 w-7" />
        </div>
        <h1 className="font-display text-3xl font-semibold text-primary">About Anali Agri</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed">
          Anali Agri is India&apos;s premium agriculture marketplace, built to connect farmers directly with buyers, traders, and service providers. We started in Tamil Nadu with a mission to make agricultural trade transparent, efficient, and profitable for everyone.
        </p>

        <h2 className="font-display text-xl font-semibold text-primary mt-8">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To empower farmers with market access, real-time price intelligence, and direct buyer connections — reducing dependence on intermediaries and ensuring fair prices.
        </p>

        <h2 className="font-display text-xl font-semibold text-primary mt-8">What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>List farm produce, vegetables, fruits, livestock, and more</li>
          <li>Daily market prices from APMC and local markets</li>
          <li>Location-based discovery — find buyers and sellers nearby</li>
          <li>Direct communication via call and WhatsApp</li>
          <li>Tamil and English language support</li>
        </ul>

        <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-primary font-medium">Contact us</p>
          <p className="text-gray-600 mt-1">hello@analiagri.com | +91 98765 43210</p>
        </div>
      </div>

      <Link href="/" className="inline-block mt-8 text-primary font-medium hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
