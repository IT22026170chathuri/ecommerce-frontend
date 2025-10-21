import type { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
    category: 'Electronics',
    stock: 15
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Fitness tracking smart watch with heart rate monitor',
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
    category: 'Electronics',
    stock: 8
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 45.99,
    description: 'Ergonomic laptop stand for better posture',
    image: 'https://via.placeholder.com/300x200?text=Laptop+Stand',
    category: 'Accessories',
    stock: 20
  },
  // Add more products...
];