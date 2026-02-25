'use client';

import { motion } from 'framer-motion';
import { Users, Package, AlertCircle, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Daily Active Users', value: '1,234', icon: Users, color: 'bg-blue-100 text-blue-700' },
  { label: 'Total Listings', value: '5,678', icon: Package, color: 'bg-green-100 text-green-700' },
  { label: 'Pending Approval', value: '23', icon: AlertCircle, color: 'bg-amber-100 text-amber-700' },
  { label: 'Revenue (MTD)', value: '₹45,000', icon: TrendingUp, color: 'bg-secondary/20 text-secondary' },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-primary mb-8">Dashboard</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-6 shadow-card"
          >
            <div className={`inline-flex p-3 rounded-lg ${stat.color} mb-3`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-card"
        >
          <h3 className="font-semibold mb-4">Pending Listings</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium">Organic Tomato - Kanchipuram</p>
                  <p className="text-sm text-gray-500">Submitted 2 hours ago</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm font-medium">Approve</button>
                  <button className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-sm font-medium">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-card"
        >
          <h3 className="font-semibold mb-4">Listings by Category</h3>
          <div className="grid grid-cols-2 gap-4">
            {['Vegetables', 'Fruits', 'Livestock', 'Dairy'].map((cat, i) => (
              <div key={cat} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>{cat}</span>
                <span className="font-semibold text-primary">{1200 + i * 100}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
