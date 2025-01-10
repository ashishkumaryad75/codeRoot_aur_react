// import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Counter Slice for Counter and Toggle.
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Auth Slice for Authntication.
// const initialAuthState = { isAuthenticated: false };
// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     logIn(state) {
//       state.isAuthenticated = true;
//     },
//     logOut() {
//       state.isAuthenticated = false;
//     },
//   },
// });


//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
}); // for multiple reducers.

// const store = configureStore({
//   reducer: counterSlice.reducer,
// }); //  for single reducer

export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;


// const counterRedusecer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterRedusecer);
