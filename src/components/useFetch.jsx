import { useEffect, useState } from "react";

function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  /* Fetching the data using async await */
  async function fetchData(url) {
    setIsLoading(true);
    try {
      setIsError(false);
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log("Error", err);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { isLoading, isError, products };
}

export default useFetch;
