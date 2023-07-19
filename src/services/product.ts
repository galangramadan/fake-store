import axios from "axios";

type CallbackAllProducts = (res: ProductDetails[]) => void;

export const getProducts = async (callback: CallbackAllProducts) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

interface CallbackDetailsProduct {
  (res: ProductDetails): void;
}

export const getDetailsProduct = async (
  id: number,
  callback: CallbackDetailsProduct
) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

type CallbackCategories = (res: string[]) => void;

export const getCategories = async (callback: CallbackCategories) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCategoryProducts = async (
  category: string,
  callback: CallbackAllProducts
) => {
  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
