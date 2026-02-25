'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Phone, Mail } from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'otp' | 'email'>('otp');
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length >= 10) setOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // API call would go here
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="card">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Leaf className="h-7 w-7" />
              </div>
              <span className="font-display text-2xl font-semibold text-primary">
                Anali <span className="text-secondary">Agri</span>
              </span>
            </Link>
            <h1 className="font-display text-2xl font-semibold text-gray-900">Welcome back</h1>
            <p className="text-gray-500 mt-1">Sign in to manage your listings</p>
          </div>

          {/* Toggle OTP / Email */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setMode('otp')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === 'otp' ? 'bg-white shadow text-primary' : 'text-gray-600'
              }`}
            >
              <Phone className="h-4 w-4" />
              Mobile OTP
            </button>
            <button
              onClick={() => setMode('email')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === 'email' ? 'bg-white shadow text-primary' : 'text-gray-600'
              }`}
            >
              <Mail className="h-4 w-4" />
              Email
            </button>
          </div>

          {mode === 'otp' ? (
            !otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="input-field"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <p className="text-sm text-gray-600">
                  OTP sent to +91 {mobile}
                </p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="123456"
                    className="input-field text-center text-lg tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Verify & Login
                </button>
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-sm text-primary hover:underline"
                >
                  Change number
                </button>
              </form>
            )
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="input-field" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" placeholder="••••••••" className="input-field" required />
              </div>
              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
              <Link href="/forgot-password" className="block text-center text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
