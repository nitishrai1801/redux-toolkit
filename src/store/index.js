//Implementation withour redux toolkit(with classic redux)

// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
//   showCounter: true,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     case "TOGGLE":
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;

/* 
// Implementation with Redux Toolkit

*/

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};
const initialAuthState = {
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    toggleCounter: (state, action) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const { increment, decrement, toggleCounter, increase } =
  counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
