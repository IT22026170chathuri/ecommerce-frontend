<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Browse our amazing products!</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/products">
          <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
            Shop Now
          </button>
        </Link>
=======
import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh', // fills entire screen height
        width: '100vw',  // fills entire screen width
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // vertically center
        alignItems: 'center',     // horizontally center
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        overflow: 'hidden', // prevent scrollbars
        margin: 0,
        padding: 0,
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '15px',
          color: '#333',
        }}
      >
        Welcome to Our E-Commerce Store
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '40px',
          maxWidth: '600px',
        }}
      >
        Browse our amazing products and find what you need!
      </p>

      <div>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginRight: '15px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Shop Now
        </button>

        <button
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e7e34')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
        >
          View Cart
        </button>
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
      </div>
    </div>
  );
};

export default Home;
