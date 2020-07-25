import { Dispatch } from "redux";
import {
  GetProductsAction,
  PRODUCTS_ACTION_TYPES,
  Product,
  GetProductsByCategoryAction,
  GetProductAction,
  AddProductAction,
  UpdateProductAction,
  DeleteProductAction,
  ProductsListAction,
} from "../../types/product.type";
import { ProductServices } from "../../../services/productService";

const getProductsAction = (products: Product[]): ProductsListAction => ({
  type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS,
  payload: products,
});

const getProductsByCategoryAction = (
  products: Product[]
): ProductsListAction => ({
  type: PRODUCTS_ACTION_TYPES.GET_PRODUCTS_BY_CATEGORY,
  payload: products,
});

const getProductAction = (product: Product): ProductsListAction => ({
  type: PRODUCTS_ACTION_TYPES.GET_PRODUCT,
  payload: product,
});

const addProductAction = (product: Product): ProductsListAction => ({
  type: PRODUCTS_ACTION_TYPES.ADD_PRODUCT,
  payload: product,
});

const updateProductAction = (
  product: Product,
  sku: string
): ProductsListAction => ({
  type: PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT,
  payload: product,
  sku: sku,
});

const deleteProductAction = (sku: string): ProductsListAction => ({
  type: PRODUCTS_ACTION_TYPES.DELETE_PRODUCT,
  payload: sku,
});
export const getProducts = () => async (
  dispatch: Dispatch<ProductsListAction>
) => {
  const products = await ProductServices.getProducts();
  dispatch(getProductsAction(products));
};

const getProduct = (sku: string) => async (
  dispatch: Dispatch<ProductsListAction>
) => {
  const product = await ProductServices.getProduct(sku);
  dispatch(getProductAction(product));
};

const addProduct = (product: Product) => async (
  dispatch: Dispatch<ProductsListAction>
) => {
  const newProduct = await ProductServices.addProduct(product);
  dispatch(addProductAction(newProduct));
};

const getProductsByCategory = (categoryId: number) => async (
  dispatch: Dispatch<ProductsListAction>
) => {
  const products = await ProductServices.getProductsByCategory(categoryId);
  dispatch(getProductsByCategoryAction(products));
};

const updateProduct = (product: Product, sku: string) => async (
  dispatch: Dispatch<ProductsListAction>
) => {
  const updatedProduct = await ProductServices.updateProduct(sku, product);
  dispatch(updateProductAction(updatedProduct, sku));
};

const deleteProduct = (sku: string) => async (
  dispatch: Dispatch<ProductsListAction>
) => {
  await ProductServices.deleteProduct(sku);
  dispatch(deleteProductAction(sku));
};

export const productActions = {
  getProducts,
  getProduct,
  addProduct,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
};
