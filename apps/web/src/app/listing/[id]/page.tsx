'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Share2, Heart, Send } from 'lucide-react';
import { formatPrice, formatQuantity } from '@/lib/utils';
import { MOCK_LISTINGS } from '@/lib/mock-data';

export default function ListingDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const listing = MOCK_LISTINGS.find((l) => l.id === id) || MOCK_LISTINGS[0];

  if (!listing) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">Listing not found</p>
        <Link href="/explore" className="btn-primary mt-4 inline-block">Back to Explore</Link>
      </div>
    );
  }

  const mainImage = listing.media?.[0]?.url;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden p-0"
          >
            <div className="relative aspect-video bg-gray-100">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={listing.title!}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              )}
              {listing.isFeatured && (
                <span className="absolute top-4 left-4 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-white">
                  Featured
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm text-primary font-medium">{listing.category?.name}</span>
                  <h1 className="font-display text-2xl font-semibold text-gray-900 mt-1">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{listing.location?.district}{listing.location?.village ? `, ${listing.location.village}` : ''}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Save">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigator.clipboard?.writeText(shareUrl)}
                    className="p-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
                    aria-label="Share"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-4">
                {listing.price ? (
                  <>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(listing.price!)}
                    </span>
                    {listing.isPriceNegotiable && (
                      <span className="text-gray-500">/ negotiable</span>
                    )}
                  </>
                ) : (
                  <span className="text-xl text-gray-500">Price on enquiry</span>
                )}
                <span className="text-gray-500">
                  {formatQuantity(listing.quantity!, listing.unit!)}
                </span>
              </div>
              {listing.description && (
                <p className="mt-4 text-gray-600">{listing.description}</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Sidebar - Seller & Enquiry */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <h3 className="font-semibold mb-4">Seller</h3>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xl">
                {listing.seller?.name?.charAt(0) || '?'}
              </div>
              <div>
                <p className="font-medium">{listing.seller?.name}</p>
                <p className="text-sm text-gray-500">{listing.location?.district}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Seller
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h3 className="font-semibold mb-4">Send Enquiry</h3>
            <form className="space-y-3">
              <textarea
                placeholder="Ask about quantity, delivery, or pricing..."
                rows={4}
                className="input-field resize-none"
              />
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
