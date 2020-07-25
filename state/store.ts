import { combineReducers, applyMiddleware, createStore } from "redux";
import { productReducer } from "./domain/reducers/product.reducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppState, AppActions } from "./types/";

// const middleware = [thunk];
export const rootReducer = combineReducers({
  product: productReducer,
});
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
