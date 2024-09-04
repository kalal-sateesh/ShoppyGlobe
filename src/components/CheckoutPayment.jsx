import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";
function CheckoutPayment() {
  const navigate = useNavigate();

  /* Place the order handler */
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/");
      alert("Order Placed Successfully");
    }, 1000);
  };

  /* Total value */
  const totalValue = useSelector((state) => state.cartProducts.totalValue);
  return (
    <div className="CheckoutContainer">
      <div className="paymentsText">Choose Payments Mode</div>
      <div className="totalValueCheckout">
        <div>Total</div>
        <div>₹{totalValue}</div>
      </div>
      <div className="formContainer">
        <form className="form" onSubmit={(e) => handlePlaceOrder(e)}>
          <div className="formDivContainer">
            <input
              type="radio"
              id="payment"
              name="payment"
              style={{ marginRight: "5px", cursor: "pointer" }}
            />
            <span>Cash on Delivery</span>
          </div>
          <div className="formDivContainer">
            <input
              type="radio"
              id="payment"
              name="payment"
              style={{ marginRight: "5px", cursor: "pointer" }}
              required
            />
            <span>UPI</span>
          </div>
          <div className="formDivContainer">
            <input
              type="radio"
              id="payment"
              name="payment"
              style={{ marginRight: "5px", cursor: "pointer" }}
              required
            />
            <span>Net Banking / Online</span>
          </div>
          <div className="formDivContainer">
            <input
              type="radio"
              id="payment"
              name="payment"
              style={{ marginRight: "5px", cursor: "pointer" }}
              required
            />
            <span>Other</span>
          </div>
          <div className="formDivContainerButton">
            <button type="submit" className="buttonCheckout">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPayment;
