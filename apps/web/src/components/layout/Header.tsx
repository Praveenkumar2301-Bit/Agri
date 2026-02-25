'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  User,
  Menu,
  X,
  Globe,
  ChevronDown,
  Leaf,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const LOCATIONS = [
  { id: 'tn', name: 'Tamil Nadu', nameTa: 'தமிழ்நாடு' },
  { id: 'ka', name: 'Karnataka', nameTa: 'கர்நாடகம்' },
  { id: 'kl', name: 'Kerala', nameTa: 'கேரளா' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ta'>('en');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white transition-transform group-hover:scale-105">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="font-display text-xl font-semibold text-primary">
              Anali <span className="text-secondary">Agri</span>
            </span>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search produce, vegetables, livestock..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 pr-4 w-full"
              />
              <Link
                href={`/explore?q=${encodeURIComponent(searchQuery)}`}
                className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-1.5 px-3 text-sm"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Location */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span>Tamil Nadu</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {locationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-1 w-48 rounded-lg bg-white py-2 shadow-lg border border-gray-100"
                  >
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                        onClick={() => setLocationOpen(false)}
                      >
                        {lang === 'ta' ? loc.nameTa : loc.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              title="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'en' ? 'EN' : 'தமிழ்'}</span>
            </button>

            {/* Auth */}
            <Link href="/login" className="btn-primary hidden sm:inline-flex">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
