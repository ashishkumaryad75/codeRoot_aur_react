import { createSlice } from "@reduxjs/toolkit";

// UI-Slice for Authntication.
const initialUiState = { cartIsVisible: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
