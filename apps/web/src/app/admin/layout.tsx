import Link from 'next/link';
import {
  LayoutDashboard,
  Package,
  Users,
  FolderTree,
  MapPin,
  TrendingUp,
  Image,
  FileText,
  BarChart3,
} from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/listings', label: 'Listings', icon: Package },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/categories', label: 'Categories', icon: FolderTree },
  { href: '/admin/locations', label: 'Locations', icon: MapPin },
  { href: '/admin/market-prices', label: 'Market Prices', icon: TrendingUp },
  { href: '/admin/ads', label: 'Ads', icon: Image },
  { href: '/admin/cms', label: 'CMS', icon: FileText },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-primary text-white flex flex-col">
        <div className="p-6 border-b border-white/20">
          <Link href="/admin" className="font-display text-xl font-semibold">
            Anali Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-900">Admin Panel</h1>
            <Link href="/" className="text-sm text-primary hover:underline">
              Back to site
            </Link>
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
