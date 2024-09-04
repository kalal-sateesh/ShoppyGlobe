import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.cartProducts.cartProducts);

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
          <Link to="/cart" className="link">
            <li>
              <span className="cartItemsCount">{data.length}</span>
              <AiOutlineShoppingCart className="cart-icon"></AiOutlineShoppingCart>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
