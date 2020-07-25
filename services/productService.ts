import { Product } from "../state/types/product.type";
import axios from "axios";

// const url = "https://localhost:5001/api/products";
const url = "https://stockmanagement2018.azurewebsites.net/api/products";
const headers = {
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
};
const getProducts = async () => {
  try {
    const products = await axios.get<Product[]>(url);
    return products.data;
  } catch (e) {
    console.log(e);
  }
};

const getProduct = async (sku: string) => {
  let productUrl = `${url}/${sku}`;
  const product = await await axios.get<Product>(productUrl, headers);
  return product.data;
};

const getProductsByCategory = async (categoryId: number) => {
  let productsUrl = `${url}/${categoryId}`;
  const products = await axios.get<Product[]>(productsUrl);
  return products.data;
};

const addProduct = async (product: Product) => {
  try {
    const newProduct = (await axios.post<Product>(url, product, headers)).data;
    return newProduct;
  } catch (e) {
    console.log(e);
  }
};

const updateProduct = async (sku: string, product: Product) => {
  const productUrl = `${url}/${sku}`;
  const updatedProduct = await axios.put<Product>(productUrl, product, headers);
  return updatedProduct.data;
};

const deleteProduct = async (sku: string) => {
  const productUrl = `${url}/${sku}`;
  await axios.delete<Product>(productUrl);
};

export const ProductServices = {
  getProducts,
  getProduct,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
