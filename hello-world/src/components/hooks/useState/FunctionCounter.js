import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  // update state based on previous state/pass function/safe

  const handleIncrement = (e) => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrement = (e) => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };

  const handleReset = (e) => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FunctionCounter;
