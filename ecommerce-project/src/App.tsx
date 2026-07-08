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
  const getCartItems=async()=>{
      const myCartItems=await axios.get('/api/cart-items?expand=product');
      setCart(myCartItems.data);
    }
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} getCartItems={getCartItems} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} getCartItems={getCartItems} />} />
      <Route path="orders" element={<OrderPage cart={cart} getCartItems={getCartItems} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
    </Routes>
  )
}

export default App;
