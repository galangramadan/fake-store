import { useState, useEffect } from "react";
import { getProducts } from "../services/product.services";
const useGetAllProducts = () => {
  const [allProducts, setAllProducts] = useState([] as ProductDetails[]);

  useEffect(() => {
    const controller = new AbortController();
    getProducts((data) => {
      setAllProducts(data);
    });
    return () => {
      controller.abort();
    };
  }, []);

  return allProducts;
};

export default useGetAllProducts;
