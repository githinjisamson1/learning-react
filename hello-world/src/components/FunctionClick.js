import React from "react";

const FunctionClick = () => {

  const handleClick = (e) => {
    console.log(e.target);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FunctionClick;
