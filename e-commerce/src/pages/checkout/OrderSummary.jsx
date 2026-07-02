import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";
function OrderSummary({ deliveryOptions, cart, getCartItems }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem} />
            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} getCartItems={getCartItems} />
              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} getCartItems={getCartItems} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default OrderSummary; 