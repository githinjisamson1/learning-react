import React, { useReducer } from "react";

// !initialState
const initialState = 0;

// !reducer: pass in state & action then return newState
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const MultipleUseReducers = () => {
  // !useReducer: pass in reducer & initialState then return state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {state}</div>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>

      <div>Count: {state2}</div>
      <button
        onClick={() => {
          dispatch2("INCREMENT");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch2("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch2("RESET");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default MultipleUseReducers;

// TODO: multiple useReducers
// we can have multiple useReducers working indpendently of each other
// e.g., counter, counter2
// DRY
