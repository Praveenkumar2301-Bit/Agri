import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  explore: [
    { href: '/explore', label: 'All Listings' },
    { href: '/explore?category=vegetables', label: 'Vegetables' },
    { href: '/explore?category=fruits', label: 'Fruits' },
    { href: '/market-prices', label: 'Market Prices' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="font-display text-xl font-semibold">
                Anali <span className="text-secondary">Agri</span>
              </span>
            </Link>
            <p className="text-sm text-white/80 mb-4">
              Connecting farmers with buyers across India. Transparent market prices, direct trade, and growth for all.
            </p>
            <div className="flex gap-2">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
            </div>
            <a href="mailto:hello@analiagri.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-white mt-1">
              <Mail className="h-4 w-4" />
              hello@analiagri.com
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold mb-4">Head Office</h3>
            <div className="flex items-start gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                Chennai, Tamil Nadu<br />
                India
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Anali Agri. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Built for farmers, by farmers. 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
