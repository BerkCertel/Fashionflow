import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import Data from "../data.json";

const initialState = {
  products: Data,
  productsStatus: STATUS.IDLE,
  productDetail: null,
  productDetailStatus: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

//! export const {} = categorySlice.actions;  sabit değişkenler üzerinde işlem yapmadıgımız için reducer kısmına birşey yazmadık extrareducer içinse direkt ulaşım saglayabılıyoruz
export default productSlice.reducer;
