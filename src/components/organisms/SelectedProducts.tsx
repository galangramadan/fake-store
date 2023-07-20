import { useEffect, useState } from "react";
import CardProduct from "../molecules/CardProduct";
import { getProducts } from "../../services/product.services";

const SelectedProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState(
    [] as ProductDetails[]
  );

  useEffect(() => {
    const controller = new AbortController();
    getProducts((data) => {
      setSelectedProducts(data);
    });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Produk Pilihan</h1>
      <div className="w-full flex justify-between flex-wrap gap-2 pt-4">
        {Object.keys(selectedProducts).length > 0 &&
          selectedProducts.map(
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

export default SelectedProducts;
