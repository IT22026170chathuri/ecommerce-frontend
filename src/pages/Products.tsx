import { useState } from 'react';
import { mockProducts } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products] = useState<Product[]>(mockProducts);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    alert(`Added ${product.name} to cart!`);
    // TODO: Implement with Context API later
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        height: '100vh', // fills full laptop screen height
        width: '100vw',  // fills full width
        backgroundColor: '#f4f4f4',
        padding: '30px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Our Products
      </h1>

      {/* Search + Filter Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '25px',
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '250px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>

      {/* Product Grid */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          paddingBottom: '20px',
        }}
      >
        {filteredProducts.map((product) => (
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

