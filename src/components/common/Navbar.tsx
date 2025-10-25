import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#333', 
      color: 'white',
      display: 'flex',
      gap: '1rem'
    }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/products" style={{ color: 'white' }}>Products</Link>
      <Link to="/cart" style={{ color: 'white' }}>Cart</Link>
      <Link to="/admin" style={{ color: 'white' }}>Admin</Link>
    </nav>
  );
};

export default Navbar;