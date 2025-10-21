import { useState } from 'react';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/product/ProductCard';
import type { Product } from '../types';

const Products = () => {
  const [products] = useState<Product[]>(mockProducts);

  const handleAddToCart = (product: Product) => {
    alert(`Added ${product.name} to cart!`);
    // We'll implement this properly with Context API on Day 3
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Products</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(product => (
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