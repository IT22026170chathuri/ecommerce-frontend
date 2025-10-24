import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;