import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import { IoIosStar } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addTotalValue } from "./CartSlice";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { pid } = useParams();

  /* Data from redux state */
  const data = useSelector((state) => state.cartProducts.cartProducts);


  /* Function to fetch the data */
  async function fetchData(url) {
    setIsLoading(true);
    try {
      setIsError(false);
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log("Error", err);
    }
  }


  /* Total value dispatch handler */
  const handleTotalValue = () => {
    dispatch(addTotalValue(product.price));
  };

  /* Fetching the specific product data */
  useEffect(() => {
    fetchData(`https://dummyjson.com/products/${pid}`);
  }, [pid]);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  /* Add to cart handler */
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
    <div className="ProductDetailsContainer">
      {!isError && !isLoading && (
        <>
          <div className="ProductDetailsImgContainer">
            <img
              src={product.thumbnail}
              alt="Cover-Image"
              width="100%"
              height="450px"
            />
            <div className="productDetailsButtonContainer">
              <button
                className="productDetailsAddCartButton"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              <Link to="/checkout" className="productDetailsBuynowLink">
                <button
                  className="productDetailsBuynowButton"
                  onClick={handleTotalValue}
                >
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="ProductDetailsTextContailner">
            <div className="ProductTilte">{product.title}</div>
            <div>{product.brand}</div>
            <div className="">
              <span className="ProductRating">
                {product.rating}
                <IoIosStar style={{ color: "white", marginLeft: "2px" }} />
              </span>
            </div>
            <div>
              <span className="productPrice">₹ {product.price}</span>
              <span className="productAcualPrice">
                {product.discountPercentage}% Off
              </span>
            </div>
            <div className="productWarrenty">{product.warrantyInformation}</div>
            <div className="productShippingInfo">
              {product.shippingInformation}
            </div>
            <div className="productAvailabilityStatus">
              {product.availabilityStatus}
            </div>
            <div className="productReturnPolicy">{product.returnPolicy}</div>
            <div className="reviewText">Reviews</div>
            <div className="productDetailsReviews">
              {product.reviews &&
                product.reviews.map((review, index) => {
                  return (
                    <div key={index} className="productReviewContainer">
                      <div>
                        <span className="ProductRating">
                          {review.rating}
                          <IoIosStar
                            style={{ color: "white", marginLeft: "2px" }}
                          />
                        </span>
                        <span>{review.comment}</span>
                      </div>
                      <div>{review.reviewerName}</div>
                      <div>{review.reviewerEmail}</div>
                      <div>{review.date}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
      {!isError && isLoading && (
        <div
          style={{
            fontSize: "20px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      )}
      {isError && !isLoading && (
        <>
          <div
            style={{
              fontSize: "20px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
            }}
          >
            Something went wrong Please try again !
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
