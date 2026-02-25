'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

const MOCK_PRICES = [
  { cropName: 'Tomato', cropNameTa: 'தக்காளி', minPrice: 22, maxPrice: 35, trend: 'up' as const },
  { cropName: 'Onion', cropNameTa: 'வெங்காயம்', minPrice: 18, maxPrice: 28, trend: 'down' as const },
  { cropName: 'Potato', cropNameTa: 'உருளைக்கிழங்கு', minPrice: 15, maxPrice: 22, trend: 'stable' as const },
  { cropName: 'Brinjal', cropNameTa: 'கத்தரிக்காய்', minPrice: 12, maxPrice: 20, trend: 'up' as const },
  { cropName: 'Lady Finger', cropNameTa: 'வெண்டைக்காய்', minPrice: 25, maxPrice: 40, trend: 'stable' as const },
];

const TrendIcon = ({ trend }: { trend: 'up' | 'down' | 'stable' }) => {
  if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-600" />;
  if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-600" />;
  return <Minus className="h-4 w-4 text-gray-500" />;
};

export function MarketPricesWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="card sticky top-24"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-primary">Market Prices</h3>
          <p className="text-sm text-gray-500">Chennai Koyambedu • Today</p>
        </div>
        <Link
          href="/market-prices"
          className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="space-y-3">
        {MOCK_PRICES.map((price, i) => (
          <div
            key={price.cropName}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center gap-2">
              <TrendIcon trend={price.trend} />
              <span className="font-medium text-gray-900">{price.cropName}</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-primary">
                {formatPrice(price.minPrice)} - {formatPrice(price.maxPrice)}
              </span>
              <p className="text-xs text-gray-500">/ kg</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
