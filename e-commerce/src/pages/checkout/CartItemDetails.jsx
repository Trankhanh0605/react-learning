import { useState } from "react";
import formatMoney from "../../utils/money";
import axios from "axios";
function CartItemDetails({ cartItem, getCartItems }) {
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const [quantity, setQuantity]=useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await getCartItems();
  };

  const changeQuantity = async () => {
    if (updateQuantity){
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await getCartItems(); 
      setUpdateQuantity(false); 
    }
    else {
      setUpdateQuantity(true);
    }
  };

  const saveLatestQuantity=(event)=>{
    setQuantity(event.target.value);
  }

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {updateQuantity ?
              <input className="input-quantity" type="text" 
              value={quantity}
              onChange={saveLatestQuantity} /> :
              <span className="quantity-label"> {cartItem.quantity}</span>
            }
          </span>
          <span className="update-quantity-link link-primary"
            onClick={changeQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
export default CartItemDetails;