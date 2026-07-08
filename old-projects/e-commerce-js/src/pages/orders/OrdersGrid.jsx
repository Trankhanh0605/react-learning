import OrderHeader from './OrderHeader';
import OrderDetailsGrid from './OrderDetailsGrid';
function OrdersGrid({orders, getCartItems}) {
  return (
    <div className="orders-grid">
      {orders && orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order={order} />

            <OrderDetailsGrid order={order} getCartItems={getCartItems} />
          </div>
        );
      })}
    </div>
  );
}
export default OrdersGrid;