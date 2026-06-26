import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrderPage from './pages/orders/OrderPage'
import TrackingPage from './pages/TrackingPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const getCartItems=async()=>{
      const myCartItems=await axios.get('/api/cart-items?expand=product');
      setCart(myCartItems.data)
    }
    getCartItems();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App;
