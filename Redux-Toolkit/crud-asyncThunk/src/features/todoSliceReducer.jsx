import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk("gitUsers", async () => {
  // const response = await fetch("https://api.github.com/users");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const result = await response.json();
  console.log(result);
  return result;
});


export const todoSliceReducer = createSlice({
  name: "todo",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default todoSliceReducer.reducer;


