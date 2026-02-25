import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency = '₹'): string {
  return `${currency}${amount.toLocaleString('en-IN')}`;
}

export function formatQuantity(qty: number, unit: string): string {
  return `${qty.toLocaleString('en-IN')} ${unit}`;
}
