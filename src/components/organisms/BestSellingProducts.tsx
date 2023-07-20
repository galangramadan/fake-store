import useGetAllProducts from "../../hooks/useGetAllProducts";
import CardProduct from "../molecules/CardProduct";

const BestSellingProducts = () => {
  const bestSellingProducts = useGetAllProducts().slice(0).reverse();
  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Produk Terlaris</h1>
      <div className="w-full flex justify-between flex-wrap gap-2 pt-4">
        {Object.keys(bestSellingProducts).length > 0 &&
          bestSellingProducts.map(
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
        {Object.keys(bestSellingProducts).length == 0 && (
          <div>
            <h1>Memuat...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSellingProducts;
