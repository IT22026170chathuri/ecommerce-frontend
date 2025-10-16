const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Browse our amazing products and find what you need!</p>
      <div style={{ marginTop: '30px' }}>
        <button style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px'
        }}>
          Shop Now
        </button>
        <button style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          View Cart
        </button>
      </div>
    </div>
  );
};

export default Home;