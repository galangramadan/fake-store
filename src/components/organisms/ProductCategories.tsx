import Category from "../atoms/Category";
import CardProduct from "../molecules/CardProduct";

const ProductCategories = () => {
  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Kategori Produk</h1>
      <div className="w-full flex flex-wrap gap-2 pt-4">
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
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

export default ProductCategories;
