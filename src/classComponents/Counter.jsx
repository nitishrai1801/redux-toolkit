import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../components/Counter.module.css";
class Counter extends Component {
  incrementHandler = () => {
    this.props.increment();
    // dispatch({type: 'INCREMENT'})
  };
  decrementHandler = () => {
    this.props.decrement();
    // dispatch({type: 'DECREMENT'})
  };
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>

        <div className={classes.value}>{this.props.counter}</div>
        {/* {showCounter ? ( */}
        <div>
          <button
            className="counter__button"
            onClick={this.incrementHandler.bind(this)}
          >
            Increment
          </button>
          <button
            className="counter__button"
            onClick={this.decrementHandler.bind(this)}
          >
            Decrement
          </button>
        </div>
        {/* ) : null} */}
        {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
