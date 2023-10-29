import React, { useState, useEffect } from "react";

const RunEffectOnce = () => {
  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // eventHandler
  const handleMouseMove = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  //   side effect/run once
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", handleMouseMove);

    // cleanup function
    return () => {
      console.log("Unmounted");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      X: {x} Y: {y}
    </div>
  );
};

export default RunEffectOnce;
