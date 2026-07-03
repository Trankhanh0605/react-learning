import axios from 'axios';
import { useState, useEffect } from 'react';
import './CheckoutPage.css';
import CheckoutHeader from './CheckoutHeader';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';

function CheckoutPage({ cart, getCartItems }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    // use let to reuse variable
    const fetchCheckOutdata = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
      
    }
    fetchCheckOutdata();
  }, [])

  useEffect(()=>{
    const fetchPaymentSummary=async()=>{
      const response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    }
    fetchPaymentSummary();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} getCartItems={getCartItems} />
          <PaymentSummary paymentSummary={paymentSummary} getCartItems={getCartItems} />
        </div>
      </div>
    </>
  );
}
export default CheckoutPage;