import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(increment());
  }
  function decrementHandler() {
    dispatch(decrement());
  }
  function resetHandler() {
    dispatch(reset());
    setAmount(0);
  }
  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <button onClick={incrementHandler}> + </button>
      <br />
      <br />
      <p>Count: {count}</p>
      <button onClick={decrementHandler}> - </button>
      <br />
      <br />
      <button onClick={resetHandler}> Reset </button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter the Amount"
        onChange={({ target: { value } }) => setAmount(value)}
      />
      <button onClick={incrementByAmountHandler}> + By {amount}</button>
    </>
  );
}

export default App;
