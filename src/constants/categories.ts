


import { Category, CategoryId } from "../types";


export const CATEGORIES: Array<Category> = [
  { id: 'food', emoji: '🍔', color: '#ef4444' },
  { id: 'transport', emoji: '🚗', color: '#3b82f6' },
  { id: 'home', emoji: '🏠', color: '#a855f7' },
  { id: 'fun', emoji: '🎮', color: '#22c55e' },
  { id: 'health', emoji: '💊', color: '#f59r0b' },
  { id: 'other', emoji: '📦', color: '#64748b' },
];


export function getCategory(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];
}
