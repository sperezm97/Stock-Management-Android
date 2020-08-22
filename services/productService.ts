import { Product } from '../state/types/product.type';
import axios from 'axios';
import { uploadImage } from './uploadImage';

// const url = "https://localhost:5001/api/products";
const url = 'https://stockmanagement2017.azurewebsites.net/api/products';
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

const addProduct = async (product: Product, photoUri?: string) => {
  // const addedProduct: Product =
  //   typeof photoUri === 'string'
  //     ? {
  //         sku: product.sku,
  //         categoryId: product.categoryId,
  //         name: product.name,
  //         description: product.description,
  //         photoUri: photoUri,
  //         alertQuantity: product.alertQuantity,
  //         sellingPrice: product.sellingPrice,
  //         quantity: product.quantity,
  //         units: product.units,
  //       }
  //     : { ...product };
  if (typeof photoUri === 'string') {
    const newPhoto = await uploadImage(photoUri);
    product.photoUri = newPhoto;
  }
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
