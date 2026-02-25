'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Leaf,
  Carrot,
  Apple,
  Flower2,
  Beef,
  Milk,
  Tractor,
  SprayCan,
  Wheat,
  Wrench,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { ListingCard } from '@/components/listings/ListingCard';
import { MarketPricesWidget } from '@/components/market/MarketPricesWidget';
import { MOCK_LISTINGS } from '@/lib/mock-data';

const CATEGORIES = [
  { slug: 'farm-produce', name: 'Farm Produce', nameTa: 'விவசாய உற்பத்தி', icon: Leaf, color: 'bg-green-100 text-primary' },
  { slug: 'vegetables', name: 'Vegetables', nameTa: 'காய்கறிகள்', icon: Carrot, color: 'bg-orange-100 text-orange-700' },
  { slug: 'fruits', name: 'Fruits', nameTa: 'பழங்கள்', icon: Apple, color: 'bg-red-100 text-red-700' },
  { slug: 'flowers', name: 'Flowers', nameTa: 'மலர்கள்', icon: Flower2, color: 'bg-pink-100 text-pink-700' },
  { slug: 'livestock', name: 'Livestock', nameTa: 'கால்நடை', icon: Beef, color: 'bg-amber-100 text-amber-800' },
  { slug: 'dairy', name: 'Dairy', nameTa: 'பால் பொருட்கள்', icon: Milk, color: 'bg-blue-100 text-blue-700' },
  { slug: 'equipment', name: 'Equipment', nameTa: 'உபகரணங்கள்', icon: Tractor, color: 'bg-gray-100 text-gray-700' },
  { slug: 'fertilizers', name: 'Fertilizers', nameTa: 'உரங்கள்', icon: SprayCan, color: 'bg-lime-100 text-lime-800' },
  { slug: 'cattle-feed', name: 'Cattle Feed', nameTa: 'கால்நடை தீவனம்', icon: Wheat, color: 'bg-yellow-100 text-yellow-800' },
  { slug: 'services', name: 'Services', nameTa: 'சேவைகள்', icon: Wrench, color: 'bg-indigo-100 text-indigo-700' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div>
      {/* Banner - Premium Hero */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[280px] sm:min-h-[360px]">
          {/* High-quality background image */}
          <Image
            src="/banner.png"
            alt="Fresh Agriculture Products Directly from Tamil Nadu Farmers"
            fill
            className="object-cover object-center"
            priority
            quality={95}
            sizes="100vw"
          />
          {/* Gradient overlays for depth & readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Content overlay - custom typography */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2"
                >
                  100% Fresh · 100% Natural
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Fresh Agriculture Products
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-2 text-xl sm:text-2xl text-white/95"
                >
                  Directly from Tamil Nadu Farmers
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/explore"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-secondary-light hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Shop Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-semibold text-primary">Browse by Category</h2>
            <p className="mt-2 text-gray-600">Find exactly what you need</p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {CATEGORIES.map((cat) => (
              <motion.div key={cat.slug} variants={item}>
                <Link
                  href={`/explore?category=${cat.slug}`}
                  className="card flex flex-col items-center gap-3 p-4 group hover:border-primary/20 border border-transparent"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${cat.color} group-hover:scale-110 transition-transform`}>
                    <cat.icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-center text-gray-700 group-hover:text-primary">
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Listings + Market Prices */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-semibold text-primary">Featured Listings</h2>
                  <p className="text-gray-600 text-sm mt-1">Fresh from farms near you</p>
                </motion.div>
                <Link href="/explore" className="text-primary font-medium hover:underline flex items-center gap-1">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {(MOCK_LISTINGS.filter((l) => l.isFeatured).length > 0
                  ? MOCK_LISTINGS.filter((l) => l.isFeatured)
                  : MOCK_LISTINGS
                )
                  .slice(0, 6)
                  .map((listing) => (
                    <motion.div key={listing.id} variants={item}>
                      <ListingCard listing={listing as any} />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
            <div>
              <MarketPricesWidget />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-semibold text-primary">Ready to sell your produce?</h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
              Join thousands of farmers and traders. List your produce in minutes, reach buyers across India.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/register" className="btn-primary">
                Register as Farmer
              </Link>
              <Link href="/register?role=buyer" className="btn-secondary">
                Register as Buyer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
