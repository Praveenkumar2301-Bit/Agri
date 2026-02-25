'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-3xl font-semibold text-primary mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-6">
            Have a question or feedback? We&apos;d love to hear from you.
          </p>
          <div className="space-y-4">
            <a href="mailto:hello@analiagri.com" className="flex items-center gap-3 text-gray-600 hover:text-primary">
              <Mail className="h-5 w-5" />
              hello@analiagri.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-600 hover:text-primary">
              <Phone className="h-5 w-5" />
              +91 98765 43210
            </a>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="h-5 w-5" />
              Chennai, Tamil Nadu, India
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="card"
        >
          {submitted ? (
            <p className="text-green-600 font-medium">Thank you! We&apos;ll get back to you soon.</p>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" required className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required className="input-field" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} required className="input-field resize-none" placeholder="Your message" />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </>
          )}
        </motion.form>
      </div>

      <Link href="/" className="inline-block mt-8 text-primary font-medium hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
