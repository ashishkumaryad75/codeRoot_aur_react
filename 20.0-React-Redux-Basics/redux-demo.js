console.log("Redux");

const redux = require("redux");

// creating the reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 2,
    };
  }

  return state; // returning the state
};

const store = redux.createStore(counterReducer); // creating the store

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}; // create a counter Subscription

store.subscribe(counterSubscriber); // subscribe the counterSubscriber from the store

store.dispatch({ type: "increment" }); // dispatching the action for increment

store.dispatch({ type: "decrement" }); // dispatching the action for decrement
