import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.js";
import counterSlice from "./counter.js";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;
