'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Share2, MapPin, Package } from 'lucide-react';
import { formatPrice, formatQuantity } from '@/lib/utils';
import { cn } from '@/lib/utils';
import type { Listing } from '@/types';

interface ListingCardProps {
  listing: Listing;
  className?: string;
}

export function ListingCard({ listing, className }: ListingCardProps) {
  const mainImage = listing.media?.[0]?.url;
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className={cn('card overflow-hidden group', className)}
    >
      <Link href={`/listing/${listing.id}`} className="block">
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-lg -m-5 mb-4">
          {mainImage && !imageError ? (
            <Image
              src={mainImage}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
              <Package className="h-12 w-12 mb-2 opacity-50" />
              <span className="text-sm">{listing.category?.name || 'Listing'}</span>
            </div>
          )}
          {listing.isFeatured && (
            <span className="absolute top-2 left-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-white">
              Featured
            </span>
          )}
          <span className="absolute top-2 right-2 rounded-lg bg-black/50 px-2 py-1 text-xs text-white">
            {listing.category.name}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
            {listing.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{listing.location.district}{listing.location.village ? `, ${listing.location.village}` : ''}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
              {listing.price ? (
                <span className="font-semibold text-primary">
                  {formatPrice(listing.price)}
                  {listing.isPriceNegotiable && (
                    <span className="text-xs font-normal text-gray-500 ml-1">/ negotiable</span>
                  )}
                </span>
              ) : (
                <span className="text-gray-500 text-sm">Price on enquiry</span>
              )}
              <p className="text-xs text-gray-500 mt-0.5">
                {formatQuantity(listing.quantity, listing.unit)}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Save"
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-primary transition-colors"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
              {listing.seller.name.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">{listing.seller.name}</span>
            <span className="text-xs text-gray-400 ml-auto">{listing.viewCount} views</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
