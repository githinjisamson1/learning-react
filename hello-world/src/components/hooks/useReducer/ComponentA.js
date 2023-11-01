import React from "react";
import ComponentB from "./ComponentB";
import { useGlobalContext } from "../../../App";

const ComponentA = () => {
  // !useGlobalContext
  const { state, dispatch } = useGlobalContext();
  return (
    <div>
      <div>Component A: {state}</div>
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
      <ComponentB />
    </div>
  );
};

export default ComponentA;
