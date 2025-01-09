import classes from "./Counter.module.css";
// import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  function incrementHandle() {
    dispatch({ type: "increment" });
  }

  function decrementHandle() {
    dispatch({ type: "decrement" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandle}>Increment</button>
        <button onClick={decrementHandle}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {

//   incrementHandle() {
//     this.props.increment();
//   }

//   decrementHandle() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandle.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandle.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "incerment" }),
//     decrement: () => dispatch({ type: "decerment" }),
//   };
// };

// export default connect(mapStateProps, mapDispatchProps)(Counter);
