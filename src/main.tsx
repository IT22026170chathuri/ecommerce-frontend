import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import App from './App';
import './index.css';
=======
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <UserProvider>
        <CartProvider>
          <App />
=======
        <UserProvider>
           <CartProvider>
                 <App />
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);