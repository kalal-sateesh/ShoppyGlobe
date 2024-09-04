import { useDispatch, useSelector } from "react-redux";
import "../styles/Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { addTotalValue } from "./CartSlice";
function Cart() {

  /* Data from redux store */
  const data = useSelector((state) => state.cartProducts.cartProducts);



  /* Total price */
  const totalPrice = data.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity);
  }, 0);


  /* price with extra charges */
  const total = totalPrice + 25;
  const totalPriceValue = totalPrice.toFixed(2);

  const fixedTotalValue = total.toFixed(2);
  const dispatch = useDispatch();


  /* Dispatching the total value */
  const handleTotalValue = () => {
    dispatch(addTotalValue(fixedTotalValue));
  };

  return (
    <div className="cartContainer">
      {data.length > 0 ? (
        <>
          <div className="cartDetailsContainer">
            {data.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div className="cartPaymentDetailsContainer">
            <div className="cartPaymentDetailsPrice">
              <div>Price (3 items)</div>
              <div>₹{totalPriceValue}</div>
            </div>
            <div className="cartPaymentDetailsPrice">
              <div>Delivery Charges</div>
              <div>
                <span
                  style={{ textDecoration: "line-through", marginRight: "3px" }}
                >
                  ₹50
                </span>{" "}
                <span>Free</span>
              </div>
            </div>
            <div className="cartPaymentDetailsPrice">
              <div>Secured Packaging Fee</div>
              <div>₹25</div>
            </div>
            <div className="cartPaymentDetailsPriceTotal">
              <div>Total</div>
              <div>₹{fixedTotalValue}</div>
            </div>
            <Link to="/checkout">
              <button
                className="cartPaymentDetailsBuyNowBtn"
                onClick={handleTotalValue}
              >
                BUY NOW
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="cart">
            <div className="cart1">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlt1wSnX_U3WQUVYvOpqBw1glQyRLpWCVaQ&usqp=CAU"
                  width="100%"
                  height="100%"
                ></img>
              </div>
              <div className="">
                <h2 className="text-black">No item in cart</h2>
                <Link to="/">
                  <button className="shopNow">SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
