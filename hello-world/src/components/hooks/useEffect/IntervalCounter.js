import React, { useEffect, useState } from "react";

const IntervalCounter = () => {
  // state
  const [count, setCount] = useState(0);

  //   side effect
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount((prevState) => {
          return prevState + 1;
        });
      }, 1000);

      // cleanup function
      return () => {
        clearInterval(intervalId);
      };
    }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default IntervalCounter;
