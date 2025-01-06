import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  loading: false,
};
export const getProducts = createAsyncThunk("products", async (params) => {
  let link;

  if (params) {
    link = `http://localhost:4000/products?keyword=${params?.keyword || ""}
    &rating[gte]=${params?.rating || 0}
    &price[gte]=${params?.price?.current?.min || 0}
    &price[lte]=${params?.price?.current?.max || 30000}`;

    if (params?.category) {
      link = `http://localhost:4000/products?keyword=${
        params?.keyword || ""
      }&rating[gte]=${params?.rating || 0}&price[gte]=${
        params?.price?.current?.min || 0
      }&price[lte]=${params?.price?.current?.max || 30000}&category=${
        params?.category || ""
      }`;
    }
  } else {
    // params yoksa tüm ürünler için varsayılan URL
    link = `http://localhost:4000/products?keyword=&rating[gte]=0&price[gte]=0&price[lte]=30000`;
  }

  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
});
export const getProductDetail = createAsyncThunk("product", async (id) => {
  const response = await fetch(`http://localhost:4000/products/${id}`);
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

    builder.addCase(getProductDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductDetail.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
