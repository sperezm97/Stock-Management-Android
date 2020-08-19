export type Product = {
  sku: string;
  categoryId: number;
  name: string;
  description?: string;
  photoUri?: string;
  alertQuantity: number;
  sellingPrice?: number;
  quantity: number;
  units: number;
};

export enum PRODUCTS_ACTION_TYPES {
  GET_PRODUCTS = 'PRODUCTS_ACTION_TYPES/GET_PRODUCTS',
  GET_PRODUCT = 'PRODUCTS_ACTION_TYPES/GET_PRODUCT',
  ADD_PRODUCT = 'PRODUCTS_ACTION_TYPES/ADD_PRODUCT',
  UPDATE_PRODUCT = 'PRODUCTS_ACTION_TYPES/UPDATE_PRODUCT',
  DELETE_PRODUCT = 'PRODUCTS_ACTION_TYPES/DELETE_PRODUCT',
  GET_PRODUCTS_BY_CATEGORY = 'PRODUCTS_ACTION_TYPE/GET_PRODUCTS_BY_CATEGORY',
}

export type ProductState = Product[];

export type GetProductsAction = {
  type: string;
  payload: Product[];
};

export type GetProductAction = {
  type: string;
  payload: Product;
};

export type AddProductAction = {
  type: string;
  payload: Product;
};

export type UpdateProductAction = {
  type: string;
  payload: Product;
  sku: string;
};

export type GetProductsByCategoryAction = {
  type: string;
  payload: Product[];
};

export type DeleteProductAction = {
  type: string;
  payload: string;
};

export type ProductsListAction =
  | { type: 'PRODUCTS_ACTION_TYPES/GET_PRODUCTS'; payload: Product[] }
  | { type: 'PRODUCTS_ACTION_TYPES/GET_PRODUCT'; payload: Product }
  | { type: 'PRODUCTS_ACTION_TYPES/ADD_PRODUCT'; payload: Product }
  | {
      type: 'PRODUCTS_ACTION_TYPES/UPDATE_PRODUCT';
      payload: Product;
      sku: string;
    }
  | {
      type: 'PRODUCTS_ACTION_TYPE/GET_PRODUCTS_BY_CATEGORY';
      payload: Product[];
    }
  | { type: 'PRODUCTS_ACTION_TYPES/DELETE_PRODUCT'; payload: string };
