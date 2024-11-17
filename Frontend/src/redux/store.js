import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import modalReducer from "./modalSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    modal: modalReducer,
    general: generalReducer,
  },
});
