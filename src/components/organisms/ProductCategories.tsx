import { useEffect, useState } from "react";
import Category from "../atoms/Category";
import {
  getCategories,
  getCategoryProducts,
} from "../../services/product.services";
import CardProduct from "../molecules/CardProduct";

const ProductCategories = () => {
  const [categories, setCategories] = useState([] as string[]);
  const [category, setCategory] = useState("");
  const [categoriesProducts, setCategoriesProducts] = useState(
    [] as ProductDetails[]
  );

  useEffect(() => {
    const controller = new AbortController();
    getCategories((data) => {
      setCategories(data);
      setCategory(data[0]);
    });
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getCategoryProducts(category, (data) => {
      setCategoriesProducts(data);
    });
    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <div className="mx-4 pt-8">
      <h1 className="text-2xl font-bold">Kategori Produk</h1>
      <div className="w-full flex flex-wrap gap-2 pt-4">
        {Object.keys(categories).length > 0 &&
          categories.map((category, i) => (
            <div key={i} className="flex w-1/5">
              <Category
                category={category}
                onClick={() => setCategory(category)}
              />
            </div>
          ))}
      </div>
      <div className="w-full flex justify-between flex-wrap gap-2 pt-4">
        {Object.keys(categoriesProducts).length > 0 &&
          categoriesProducts.map(
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

export default ProductCategories;
