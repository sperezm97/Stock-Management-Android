import {
  ProductState,
  PRODUCTS_ACTION_TYPES,
  ProductsListAction,
  Product,
} from "../../types/product.type";

const initialState: ProductState = [];

const initialState2: Product = {
  sku: "",
  name: "",
  description: "",
  alertQuantity: 0,
  categoryId: 0,
  sellingPrice: 0,
  marginProfitability: 0,
  units: 0,
  photoUrl: "",
};

function productReducer(
  state = initialState,
  action: ProductsListAction
): Product[] {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.GET_PRODUCTS: {
      return action.payload as Product[];
    }
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT: {
      const newState = [...state, action.payload] as Product[];
      const sortedState = newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return sortedState;
    }
    case PRODUCTS_ACTION_TYPES.UPDATE_PRODUCT: {
      return state.map((product) => {
        if (product.sku == action.sku) {
          return {
            ...product,
            ...action.payload,
          };
        }
        return product;
      });
    }
    case PRODUCTS_ACTION_TYPES.DELETE_PRODUCT: {
      const newState = state.filter((p) => p.sku != action.payload);
      return newState as Product[];
    }

    default:
      return state;
  }
}

export function singleProductReducer(
  state = initialState2,
  action: ProductsListAction
): Product {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.GET_PRODUCT: {
      return action.payload;
    }
    default:
      return state;
  }
}

export { productReducer };
