import React, { useReducer } from "react";

// !initialState as object
// !suited when dealing with global state
const initialState = {
  counter: 0,
  counter2: 10,
};

// !reducer: spread oldState retun newState
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "INCREMENT5":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT5":
      return { ...state, counter: state.counter - action.payload };
    case "INCREMENT10":
      return { ...state, counter2: state.counter2 + action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const ComplexStateAction = () => {
  // !useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {state.counter}</div>
      <div>Count 2: {state.counter2}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT5", payload: 5 });
        }}
      >
        Increment 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT5", payload: 5 });
        }}
      >
        Decrement 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT10", payload: 10 });
        }}
      >
        Increment 10
      </button>
    </div>
  );
};

export default ComplexStateAction;

// TODO: steps include:
// initialState as object
// reducer/switch(action.type)
// const [state, dispatch] = useReducer(reducer, initialState)
// dispatch({type: "INCREMENT10", payload: 10})
