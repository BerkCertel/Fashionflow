import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isDialogShow: false,
    isSearchShow: false,
  },
  reducers: {
    setIsDialogShow(state, action) {
      state.isDialogShow = action.payload;
    },
    setIsSearchShow(state, action) {
      state.isSearchShow = action.payload;
    },
  },
});

export const { setIsDialogShow, setIsSearchShow } = modalSlice.actions;
export default modalSlice.reducer;
