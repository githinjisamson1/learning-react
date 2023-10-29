import React, { useState, useEffect } from "react";

const UpdateTitle = () => {
  // state
  const [count, setCount] = useState(0);

  // perfom side effects/run every time count changes
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  // eventHandler
  const handleIncrement = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <button onClick={handleIncrement}>Clicked {count} times</button>
    </div>
  );
};

export default UpdateTitle;

// TODO: useEffect
// perform side effects
// runs after every render

// !dependency array cheatsheet
// no dependency array: run every time
// empty []: run once/initial render
// [variable1, variable2]: every time variable(s) change
