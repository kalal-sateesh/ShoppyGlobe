/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import "../styles/ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./CartSlice";
function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.cartProducts.cartProducts);

  /* Add to cart Handler */
  const handleAddToCart = () => {
    dispatch(addCart(product));
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
    const existingItem = data.filter((item) => item.id === product.id);
    if (existingItem.length) {
      alert("ITEM ALREADY ADDED TO CART GOTO CART");
    } else {
      alert("ITEM ADDED TO CART");
    }
  };
  return (
    <div className="product-container">
      <Link to={`/ProductDetails/${product.id}`} className="link">
        <img src={product.thumbnail} alt="Cover-Image" />
        <div className="title-text">{product.title}</div>
      </Link>
      <div className="button-container">
        <button className="button" onClick={handleAddToCart}>
          ADD TO CART &raquo;
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
