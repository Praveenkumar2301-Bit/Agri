'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Calendar, MapPin } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { MOCK_MARKET_PRICES } from '@/lib/mock-data';

const MARKETS = ['Chennai Koyambedu', 'Vellore APMC', 'Kanchipuram Rythu Bazaar'];
const CROPS = ['Tomato', 'Onion', 'Potato', 'Brinjal', 'Lady Finger', 'Cabbage'];

const TrendIcon = ({ trend }: { trend?: 'up' | 'down' | 'stable' }) => {
  if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-600" />;
  if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-600" />;
  return <Minus className="h-4 w-4 text-gray-500" />;
};

export default function MarketPricesPage() {
  const [market, setMarket] = useState('Chennai Koyambedu');
  const [crop, setCrop] = useState('');
  const [dateRange, setDateRange] = useState('today');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl font-semibold text-primary">Market Price Intelligence</h1>
        <p className="mt-1 text-gray-600">
          Daily market prices for crops and vegetables. Compare across markets and track trends.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card mt-8"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="h-4 w-4 inline mr-1" />
              Market
            </label>
            <select
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              className="input-field"
            >
              {MARKETS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop</label>
            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="input-field"
            >
              <option value="">All crops</option>
              {CROPS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="h-4 w-4 inline mr-1" />
              Date
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="input-field"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full">Apply</button>
          </div>
        </div>
      </motion.div>

      {/* Price table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card mt-6 overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Crop</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Unit</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-900">Min</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-900">Max</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-900">Modal</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-900">Trend</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_MARKET_PRICES.map((price) => (
              <tr key={price.cropName} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium">{price.cropName}</td>
                <td className="py-4 px-4 text-gray-500">{price.unit || 'kg'}</td>
                <td className="py-4 px-4 text-right">{formatPrice(price.minPrice!)}</td>
                <td className="py-4 px-4 text-right">{formatPrice(price.maxPrice!)}</td>
                <td className="py-4 px-4 text-right font-semibold text-primary">
                  {formatPrice(price.modalPrice!)}
                </td>
                <td className="py-4 px-4 text-center">
                  <TrendIcon trend={price.trend} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Chart placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card mt-6"
      >
        <h3 className="font-semibold mb-4">Price Trend (Last 7 Days)</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
          <p className="text-gray-500">Chart will integrate with Recharts for historical data</p>
        </div>
      </motion.div>
    </div>
  );
}
