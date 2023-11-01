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

const SimpleStateAction = () => {
  // !useReducer: pass in reducer & initialState then return state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

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
    </div>
  );
};

export default SimpleStateAction;

// TODO: steps include
// initialState
// reducer
// const [state, dispatch] = useReducer(reducer, initialState)
// dispatch("INCREMENT")/dispatch an action
