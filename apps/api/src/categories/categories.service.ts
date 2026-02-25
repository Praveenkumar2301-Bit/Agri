import { Injectable } from '@nestjs/common';

const CATEGORIES = [
  { id: '1', name: 'Farm Produce', nameTa: 'விவசாய உற்பத்தி', slug: 'farm-produce', icon: 'leaf' },
  { id: '2', name: 'Vegetables', nameTa: 'காய்கறிகள்', slug: 'vegetables', icon: 'carrot' },
  { id: '3', name: 'Fruits', nameTa: 'பழங்கள்', slug: 'fruits', icon: 'apple' },
  { id: '4', name: 'Flowers', nameTa: 'மலர்கள்', slug: 'flowers', icon: 'flower' },
  { id: '5', name: 'Livestock', nameTa: 'கால்நடை', slug: 'livestock', icon: 'cow' },
  { id: '6', name: 'Dairy', nameTa: 'பால் பொருட்கள்', slug: 'dairy', icon: 'milk' },
  { id: '7', name: 'Equipment', nameTa: 'உபகரணங்கள்', slug: 'equipment', icon: 'tractor' },
  { id: '8', name: 'Fertilizers', nameTa: 'உரங்கள்', slug: 'fertilizers', icon: 'spray' },
  { id: '9', name: 'Cattle Feed', nameTa: 'கால்நடை தீவனம்', slug: 'cattle-feed', icon: 'wheat' },
  { id: '10', name: 'Services', nameTa: 'சேவைகள்', slug: 'services', icon: 'wrench' },
];

@Injectable()
export class CategoriesService {
  async findAll(parentId?: string) {
    if (parentId) {
      return { data: CATEGORIES.filter((c) => c.id === parentId) };
    }
    return { data: CATEGORIES };
  }
}
