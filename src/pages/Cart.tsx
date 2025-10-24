import { useState } from 'react';
import type { CartItem } from '../types';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{
              border: '1px solid #ddd',
              padding: '15px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
            Total: ${total.toFixed(2)}
          </div>
          <button style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;