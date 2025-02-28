import { configureStore } from "@reduxjs/toolkit";
import  todoReducer   from "../features/todoSliceReducer.jsx";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
