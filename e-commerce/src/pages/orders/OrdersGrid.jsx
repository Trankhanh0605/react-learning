import OrderHeader from './OrderHeader';
import OrderDetailesGrid from './OrderDetailsGrid';
function OrdersGrid({orders}) {
  return (
    <div className="orders-grid">
      {orders && orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order={order} />

            <OrderDetailesGrid order={order} />
          </div>
        );
      })}
    </div>
  );
}
export default OrdersGrid;