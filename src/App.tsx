<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
<<<<<<< HEAD
import Navbar from './components/common/Navbar';

function App() {
  return (
    <BrowserRouter>
=======
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <>
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
=======
        <Route path="/admin" element={
          <ProtectedRoute>
              <Admin />
            </ProtectedRoute> 
        } />
      </Routes>
    </>
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
  );
}

export default App;