import React, { useState } from "react";

const FunctionalCounter = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((previousValue) => {
      return (previousValue += 1);
    });
  };
  
  return (
    <>
      <div>{value}</div>
      <button onClick={handleClick}>Increase count</button>
    </>
  );
};

export default FunctionalCounter;
