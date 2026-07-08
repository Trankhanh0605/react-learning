import formatMoney from "../../utils/money";
import axios from "axios";
import { useNavigate } from "react-router";
function PaymentSummary({paymentSummary, getCartItems}) {
  const navigate=useNavigate();
  
  const createOrder=async()=>{
    await axios.post('/api/orders');
    await getCartItems();
    navigate('/orders');
  };
  
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      {/* Tertinary operator, check the paymentSummary has existed yet */}
      {paymentSummary && (
        <>
          <div className="payment-summary-row"
          data-testid="payment-summary-product-cost">
            <div>Items {paymentSummary.totalItems}:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents)}</div>
          </div>

          <div className="payment-summary-row"
          data-testid="payment-summary-shipping-cost">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
          </div>

          <div className="payment-summary-row subtotal-row"
          data-testid="payment-summary-total-cost-before-tax">
            <div>Total before tax:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
          </div>

          <div className="payment-summary-row"
          data-testid="payment-summary-tax">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
          </div>

          <div className="payment-summary-row total-row"
          data-testid="payment-summary-total">
            <div>Order total:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
          </div>

          <button className="place-order-button button-primary"
          onClick={createOrder}>
            Place your order
          </button>
        </>
      )}
    </div>
  );
}
export default PaymentSummary;