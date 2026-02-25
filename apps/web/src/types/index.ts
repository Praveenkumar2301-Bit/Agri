export type UserRole = 'farmer' | 'buyer' | 'service_provider';
export type Language = 'ta' | 'en';
export type ListingStatus = 'draft' | 'pending' | 'active' | 'paused' | 'rejected';

export interface User {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  role: UserRole;
  language: Language;
  avatarUrl?: string;
  locations?: UserLocation[];
}

export interface UserLocation {
  state: LocationItem;
  district: LocationItem;
  taluk?: LocationItem;
  village?: LocationItem;
}

export interface LocationItem {
  id: string;
  name: string;
  nameTa?: string;
}

export interface Category {
  id: string;
  name: string;
  nameTa?: string;
  slug: string;
  icon?: string;
  children?: Category[];
}

export interface Listing {
  id: string;
  title: string;
  description?: string;
  category: Category;
  quantity: number;
  unit: string;
  price?: number;
  isPriceNegotiable: boolean;
  location: {
    state?: string;
    district: string;
    taluk?: string;
    village?: string;
  };
  media: { url: string; type: 'image' | 'video' }[];
  status: ListingStatus;
  isFeatured: boolean;
  viewCount: number;
  seller: { name: string; avatarUrl?: string; mobile?: string };
  createdAt: string;
}

export interface MarketPrice {
  market: { name: string };
  cropName: string;
  cropNameTa?: string;
  unit: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  priceDate: string;
  trend?: 'up' | 'down' | 'stable';
}
