import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px'
    }}>
      <img 
        src={product.image} 
        alt={product.name}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        ${product.price}
      </p>
      <p>Stock: {product.stock}</p>
      {onAddToCart && (
        <button 
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          style={{
            padding: '10px 20px',
            backgroundColor: product.stock > 0 ? '#007bff' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: product.stock > 0 ? 'pointer' : 'not-allowed'
          }}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      )}
    </div>
  );
};

export default ProductCard;