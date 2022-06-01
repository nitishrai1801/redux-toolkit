import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleCounter, increase } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  /*  Implementation of dispatching actions without redux toolkit */
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "TOGGLE" });
  // };
  // const incrementHandler = () => {
  //   dispatch({ type: "INCREMENT" });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "DECREMENT" });
  // };

  /* Implementation of Action dispatch with Redux toolkit */
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const increment5Handler = () => {
    dispatch(increase(5));
  };

  console.log(counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <div className={classes.value}>{counter}</div>
      {showCounter ? (
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
      ) : null}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
