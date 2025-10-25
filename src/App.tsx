import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Navbar from './components/common/Navbar';

function App() {
  return (

    <UserProvider>
      <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={
             <ProtectedRoute>
              <Admin />
               </ProtectedRoute>  
              } />
      </Routes>
    </BrowserRouter>
     </CartProvider>
    </UserProvider>
  );
}

export default App;