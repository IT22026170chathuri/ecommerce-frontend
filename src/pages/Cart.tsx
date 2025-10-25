import { useState } from 'react';
import { CartItem } from '../types';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ 
              border: '1px solid #ddd', 
              padding: '1rem', 
              marginBottom: '1rem' 
            }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;