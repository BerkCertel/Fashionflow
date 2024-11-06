import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

export const getProducts = createAsyncThunk("products", async () => {
  const response = await fetch(`http://localhost:4000/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
