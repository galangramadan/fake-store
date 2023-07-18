import CardProduct from "../molecules/CardProduct";

const SelectedProducts = () => {
  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Produk Pilihan</h1>
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

export default SelectedProducts;
