<<<<<<< HEAD
import { Product } from '../types';
=======
import type { Product } from '../types';
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc

export const mockProducts: Product[] = [
  {
    id: 1,
<<<<<<< HEAD
    name: "Wireless Headphones",
    price: 79.99,
    description: "High-quality wireless headphones",
    image: "https://via.placeholder.com/200",
    category: "Electronics",
=======
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
    category: 'Electronics',
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
    stock: 15
  },
  {
    id: 2,
<<<<<<< HEAD
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch",
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    stock: 10
=======
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
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
  },
  // Add more products...
];