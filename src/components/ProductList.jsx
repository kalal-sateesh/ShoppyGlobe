import "../styles/ProductList.css";
import useFetch from "./useFetch";
import ProductItem from "./ProductItem";
import { useState } from "react";
function ProductList() {
  const [searchValue, setSearchValue] = useState("");
  /* Fetching the initial data using custom hook called useFetch */
  const { isLoading, isError, products } = useFetch(
    "https://dummyjson.com/products"
  );


  /* searching the the data by using filter method */
  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <div className="productListInputSearch">
        <input
          className="productListInput"
          placeholder="Search product by title"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="product-text">Products List</div>
      <div className="products-container">
        {!isLoading &&
          !isError &&
          filteredData.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        {isLoading && !isError && (
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
        {!isLoading && isError && (
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
        )}
      </div>
    </div>
  );
}

export default ProductList;
