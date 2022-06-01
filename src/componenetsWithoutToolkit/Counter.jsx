import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "../components/Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const increment5Handler = () => {
    dispatch({ type: "INCREASE", value: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>{counter}</div>
      {/* {showCounter ? ( */}
      <div>
        <button className="counter__button" onClick={incrementHandler}>
          Increment
        </button>
        <button className="counter__button" onClick={increment5Handler}>
          Increment by 5
        </button>
        <button className="counter__button" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      {/* ) : null} */}
      {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
    </main>
  );
};

export default Counter;
