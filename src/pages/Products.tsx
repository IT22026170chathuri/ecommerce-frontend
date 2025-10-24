import { useState } from 'react';
import { mockProducts } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { Product, CartItem } from '../types';

const Products = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Products</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {mockProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
