'use client';

import { useState, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, Package } from 'lucide-react';
import { ListingCard } from '@/components/listings/ListingCard';
import { MOCK_LISTINGS, CATEGORY_NAMES } from '@/lib/mock-data';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

function ExploreContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';
  const q = searchParams.get('q') || '';
  const [sort, setSort] = useState('latest');
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredListings = useMemo(() => {
    let list = [...MOCK_LISTINGS];
    if (category) {
      list = list.filter((l) => l.category?.slug === category);
    }
    if (q) {
      const query = q.toLowerCase();
      list = list.filter(
        (l) =>
          l.title?.toLowerCase().includes(query) ||
          l.category?.name?.toLowerCase().includes(query)
      );
    }
    return list;
  }, [category, q]);

  const categoryDisplayName = category ? (CATEGORY_NAMES[category] || category) : '';

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-primary">
          {q ? `Search: "${q}"` : category ? categoryDisplayName : 'Explore Listings'}
        </h1>
        <p className="mt-1 text-gray-600">
          {filteredListings.length} listing{filteredListings.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="input-field w-auto max-w-[180px]"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {(category || q) && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Active:</span>
            {category && (
              <Link
                href="/explore"
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/20"
              >
                {categoryDisplayName} <X className="h-3 w-3" />
              </Link>
            )}
            {q && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary">
                &quot;{q}&quot; <X className="h-3 w-3 cursor-pointer" />
              </span>
            )}
          </div>
        )}
      </div>

      {/* Filter panel (collapsible) */}
      {filterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="card mb-6"
        >
          <h3 className="font-medium mb-4">Filters</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input type="text" placeholder="District, village..." className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Min" className="input-field" />
                <input type="number" placeholder="Max" className="input-field" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input type="number" placeholder="Min quantity" className="input-field" />
            </div>
            <div className="flex items-end">
              <button className="btn-primary w-full">Apply Filters</button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Listings grid */}
      {filteredListings.length > 0 ? (
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing as any} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card text-center py-16"
        >
          <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-700 mb-2">No listings found</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            {category
              ? `There are no listings in ${categoryDisplayName} yet. Check back soon or browse other categories.`
              : q
              ? `No results for "${q}". Try a different search term.`
              : 'No listings available at the moment.'}
          </p>
          <Link href="/explore" className="btn-primary">
            View All Listings
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded-lg" />}>
        <ExploreContent />
      </Suspense>
    </div>
  );
}
