import React, { useState } from "react";
import RunEffectOnce from "./RunEffectOnce";

const CleanupDemo = () => {
  // state
  const [display, setDisplay] = useState(false);

  //   eventHandler
  const handleToggleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={handleToggleDisplay}>Toggle Display</button>
      {display && <RunEffectOnce />}
    </div>
  );
};

export default CleanupDemo;
