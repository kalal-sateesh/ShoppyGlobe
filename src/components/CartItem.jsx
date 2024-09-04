/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import "../styles/CartItem.css";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem } from "./CartSlice";
function CartItem({ product}) {
  const dispatch = useDispatch();

  /* Increase quantity handler */
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product));
  };

  /* Decrease quantity handler */
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };


  /* Remove Items handler */
  const handleRemoveItem = () => {
    dispatch(removeItem(product));
  };

  const price = product.price * product.quantity;
  const productPrice = price.toFixed(2);

  return (
    <div className="cartItemContainer">
      <img
        src={product.thumbnail}
        alt="Cover-Image"
        className="cartItemImage"
      />
      <div className="cartItemDetails">
        <div className="cartItemTitle">{product.title}</div>
        <div>₹{productPrice}</div>
        <div className="cartItemIncrementDecrementContainer">
          <CiCircleMinus
            className="cartItemIncrement"
            onClick={handleDecreaseQuantity}
          />
          <span className="cartItemQuantity">{product.quantity}</span>
          <CiCirclePlus
            className="cartItemDecrement"
            onClick={handleIncreaseQuantity}
          />
        </div>
        <div className="cartItemRemoveButton" onClick={handleRemoveItem}>
          REMOVE
        </div>
      </div>
    </div>
  );
}

export default CartItem;
