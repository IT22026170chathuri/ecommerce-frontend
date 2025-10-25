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
      </div>
    </div>
  );
};

export default Home;