import CardProduct from "../molecules/CardProduct";

const BestSellingProducts = () => {
  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Produk Terlaris</h1>
      <div className="w-full flex justify-between flex-wrap gap-2 pt-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default BestSellingProducts;
