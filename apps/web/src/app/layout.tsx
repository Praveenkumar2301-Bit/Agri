import type { Metadata } from 'next';
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Anali Agri — Agriculture Marketplace | Connect Farmers & Buyers',
  description:
    'India\'s premium agriculture marketplace. Buy farm produce, vegetables, fruits, livestock. Get market prices, connect with farmers directly. Tamil Nadu & nationwide.',
  keywords: ['agriculture', 'marketplace', 'farm produce', 'market prices', 'Tamil Nadu', 'India'],
  openGraph: {
    title: 'Anali Agri — Agriculture Marketplace',
    description: 'Connect farmers with buyers. Market prices, listings, and more.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
