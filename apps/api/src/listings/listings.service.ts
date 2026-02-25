import { Injectable } from '@nestjs/common';

export interface Listing {
  id: string;
  title: string;
  category: { id: string; name: string; slug: string };
  quantity: number;
  unit: string;
  price?: number;
  isPriceNegotiable: boolean;
  location: { district: string; village?: string };
  media: { url: string; type: string }[];
  status: string;
  isFeatured: boolean;
  viewCount: number;
  seller: { name: string };
  createdAt: string;
}

@Injectable()
export class ListingsService {
  private mockListings: Listing[] = [
    {
      id: '1',
      title: 'Organic Tomato - Coimbatore',
      category: { id: '1', name: 'Vegetables', slug: 'vegetables' },
      quantity: 500,
      unit: 'kg',
      price: 28,
      isPriceNegotiable: true,
      location: { district: 'Coimbatore', village: 'Perur' },
      media: [{ url: 'https://images.unsplash.com/photo-1546470427-2f64f7c26a4d?w=400', type: 'image' }],
      status: 'active',
      isFeatured: true,
      viewCount: 124,
      seller: { name: 'Kumar Farms' },
      createdAt: '2025-02-24T10:00:00Z',
    },
    {
      id: '2',
      title: 'Fresh Banana Bunch - Madurai',
      category: { id: '2', name: 'Fruits', slug: 'fruits' },
      quantity: 100,
      unit: 'bunch',
      price: 45,
      isPriceNegotiable: false,
      location: { district: 'Madurai', village: 'Alanganallur' },
      media: [{ url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', type: 'image' }],
      status: 'active',
      isFeatured: false,
      viewCount: 89,
      seller: { name: 'Murugan' },
      createdAt: '2025-02-23T14:00:00Z',
    },
  ];

  async findAll(query: Record<string, string>): Promise<{ data: Listing[]; meta: any }> {
    let list = [...this.mockListings];

    if (query.category) {
      list = list.filter((l) => l.category.slug === query.category);
    }
    if (query.q) {
      const q = query.q.toLowerCase();
      list = list.filter((l) => l.title.toLowerCase().includes(q));
    }

    const page = parseInt(query.page || '1');
    const limit = parseInt(query.limit || '20');
    const start = (page - 1) * limit;
    const data = list.slice(start, start + limit);

    return {
      data,
      meta: {
        total: list.length,
        page,
        limit,
        totalPages: Math.ceil(list.length / limit),
      },
    };
  }

  async findOne(id: string): Promise<Listing | null> {
    return this.mockListings.find((l) => l.id === id) || null;
  }
}
