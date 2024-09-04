import { Link } from "react-router-dom";
import '../styles/NotFound.css'
function NotFound() {
  return (
    <div className="errorContainer">
      <div className="errorText">
        Unfortunately the page you are looking for has been not found or deleted
      </div>
      <Link to="/">
        <button className="errorgohomeButton">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
