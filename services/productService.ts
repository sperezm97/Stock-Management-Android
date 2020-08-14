import { Product } from '../state/types/product.type';
import axios from 'axios';

// const url = "https://localhost:5001/api/products";
const url = 'https://stockmanagement2018.azurewebsites.net/api/products';
const headers = {
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
};
const getProducts = (query?: string) => {
  if (typeof query === 'string') {
    let productsUrl = `${url}?search=${query}`;
    return axios.get<Product[]>(productsUrl);
  }
  return axios.get<Product[]>(url);
};

const getProductsByCategory = async (categoryId: number, query?: string) => {
  let productsUrl = `${url}?category_id=${categoryId}`;

  if (typeof query === 'string') {
    productsUrl = `${url}?category_id=${categoryId}&search=${query}`;
    return await axios.get<Product[]>(productsUrl);
  }
  return await axios.get<Product[]>(productsUrl);
};

const getProduct = async (sku: string) => {
  let productUrl = `${url}/${sku}`;
  const product = await axios.get<Product>(productUrl, headers);
  return product.data;
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
