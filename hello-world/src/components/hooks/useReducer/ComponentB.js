import React, { useContext } from "react";
import { useGlobalContext } from "../../../App";

const ComponentB = () => {
  // !useGlobalContext
  const { state, dispatch } = useGlobalContext();

  return (
    <div>
      <div>Component B: {state}</div>
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

export default ComponentB;
