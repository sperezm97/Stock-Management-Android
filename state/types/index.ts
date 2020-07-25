import { ProductState, Product, ProductsListAction } from "./product.type";
export type AppState = {
  productList: ProductState;
};
export type StoreTypes = {
  products: Product[];
};
export type AppActions = ProductsListAction;
