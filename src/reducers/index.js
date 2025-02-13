import { combineReducers } from "redux";
import productsReducer from "../slices/productsSlice";
import categoriesReducer from "../slices/categoriesSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
