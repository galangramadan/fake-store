import { getProducts } from "../../services/product";
import CardProduct from "../molecules/CardProduct";
import { useEffect, useState } from "react";

const BestSellingProducts = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState(
    [] as ProductDetails[]
  );

  useEffect(() => {
    const controller = new AbortController();
    getProducts((data) => {
      setBestSellingProducts(data);
    });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Produk Terlaris</h1>
      <div className="w-full flex justify-between flex-wrap gap-2 pt-4">
        {Object.keys(bestSellingProducts).length > 0 &&
          bestSellingProducts
            .slice(0)
            .reverse()
            .map(
              (product, i) =>
                i < 6 && (
                  <div key={i}>
                    <CardProduct
                      title={product.title}
                      id={product.id}
                      image={product.image}
                      price={product.price}
                      rate={product.rating.rate}
                      count={product.rating.count}
                    />
                  </div>
                )
            )}
      </div>
    </div>
  );
};

export default BestSellingProducts;
