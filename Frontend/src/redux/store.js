import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    modal: modalReducer,
  },
});
