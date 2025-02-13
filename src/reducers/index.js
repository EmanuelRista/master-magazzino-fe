import { combineReducers } from "redux";
import productsReducer from "../slices/productsSlice";
import categoriesReducer from "../slices/categoriesSlice";
import ordersReducer from "../slices/ordersSlice";
import suppliersReducer from "../slices/suppliersSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  suppliers: suppliersReducer,
});

export default rootReducer;
