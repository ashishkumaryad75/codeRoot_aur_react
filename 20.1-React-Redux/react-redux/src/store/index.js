import { legacy_createStore as createStore } from "redux";

const counterRedusecer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterRedusecer);

export default store;
