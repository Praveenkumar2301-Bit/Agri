import { Injectable } from '@nestjs/common';

const MOCK_PRICES = [
  { market: { name: 'Coimbatore APMC' }, cropName: 'Tomato', cropNameTa: 'தக்காளி', unit: 'kg', minPrice: 22, maxPrice: 35, modalPrice: 28, priceDate: '2025-02-25', trend: 'up' },
  { market: { name: 'Coimbatore APMC' }, cropName: 'Onion', cropNameTa: 'வெங்காயம்', unit: 'kg', minPrice: 18, maxPrice: 28, modalPrice: 23, priceDate: '2025-02-25', trend: 'down' },
  { market: { name: 'Coimbatore APMC' }, cropName: 'Potato', cropNameTa: 'உருளைக்கிழங்கு', unit: 'kg', minPrice: 15, maxPrice: 22, modalPrice: 18, priceDate: '2025-02-25', trend: 'stable' },
];

@Injectable()
export class MarketPricesService {
  async findAll(query: Record<string, string>) {
    let data = [...MOCK_PRICES];
    if (query.crop) {
      data = data.filter((p) => p.cropName.toLowerCase().includes(query.crop.toLowerCase()));
    }
    return { data };
  }
}
