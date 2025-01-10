import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counterValue: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counterValue++;
    },
    decrement(state, action) {
      state.counterValue--;
    },
    increase(state, action) {
      state.counterValue = state.counterValue + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
