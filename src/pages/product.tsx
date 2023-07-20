import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailsProduct } from "../services/product.services";

const Product = () => {
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState({} as ProductDetails);

  useEffect(() => {
    getDetailsProduct(parseInt(id), (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="w-100 min-h-screen flex justify-center items-center">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans max-w-xl">
          <div className="flex-none w-48 relative">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold">
                {product.title}
              </h1>
              <div className="text-lg font-semibold">$ {product.price}</div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                Rating {product.rating.rate}/5 ({product.rating.count})
              </div>
            </div>
            <div className="flex space-x-4 mt-6 mb-6 text-sm font-medium">
              {product.description}
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-green-600 text-white"
                  type="submit"
                >
                  Tambahkan ke keranjang
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Product;
