import { useState } from "react";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const [newBook, setNewBook] = useState({
    hno: "",
    village: "",
    mondal: "",
    dist: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();


  /* submit handler */
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout/payments");
  };

  return (
    <div className="CheckoutContainer">
      <div className="addreessText">Address</div>
      <div className="formContainer">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="formDivContainer">
            <div>
              H.NO/PLOT NO <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="checkoutInput"
              placeholder="Please Enter house or street number"
              type="text"
              onChange={(e) => setNewBook({ ...newBook, hno: e.target.value })}
              required
              value={newBook.hno}
            />
          </div>

          <div className="formDivContainer">
            <div>
              VILLAGE/STREET <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="checkoutInput"
              placeholder="Please Enter village or street name"
              type="text"
              onChange={(e) =>
                setNewBook({ ...newBook, village: e.target.value })
              }
              required
              value={newBook.village}
            />
          </div>

          <div className="formDivContainer">
            <div>
              TOWN/MONDAL <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="checkoutInput"
              placeholder="Please Enter Town or mondal"
              type="text"
              onChange={(e) =>
                setNewBook({ ...newBook, mondal: e.target.value })
              }
              required
              value={newBook.mondal}
            />
          </div>

          <div className="formDivContainer">
            <div>
              DIST <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="checkoutInput"
              placeholder="Please Enter your district"
              type="text"
              onChange={(e) => setNewBook({ ...newBook, dist: e.target.value })}
              required
              value={newBook.dist}
            />
          </div>

          <div className="formDivContainer">
            <div>
              STATE <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="checkoutInput"
              placeholder="Please Enter your state"
              type="text"
              onChange={(e) =>
                setNewBook({ ...newBook, state: e.target.value })
              }
              required
              value={newBook.state}
            />
          </div>

          <div className="formDivContainer">
            <div>
              PINCODE <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="checkoutInput"
              placeholder="Please Enter pincode"
              type="number"
              onChange={(e) =>
                setNewBook({ ...newBook, pincode: e.target.value })
              }
              required
              value={newBook.pincode}
            />
          </div>

          <div className="formDivContainerButton">
            <button type="submit" className="buttonCheckout">
              GOTO PAYMENTS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
