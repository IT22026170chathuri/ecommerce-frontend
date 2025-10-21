import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 30px',
      marginBottom: '20px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;