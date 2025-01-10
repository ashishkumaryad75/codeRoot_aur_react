// import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name:'counter',initialState:initialState,reducers:{
        increment(state,action){
            state.counter++;
        },
        decrement(state,action){state.counter--;},
        increse(state,action){return state.counter = state.counter + action.amount},
        toggleCounter(state){state.showCounter= !state.showCounter}
    }
})

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

const store = configureStore({reducer:counterSlice.reducer});
const store1 = configureStore({reducer:{counter: counterSlice.reducer}});// if we have multiple reducers.

export default store;
