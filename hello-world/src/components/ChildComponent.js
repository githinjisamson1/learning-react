import React from "react";

const ChildComponent = (props) => {
  // destructure props
  const { greetParent } = props;
  return (
    <div>
      <button
        onClick={() => {
          // pasing props from child to parent
          greetParent("child");
        }}
      >
        Greet Parent
      </button>
    </div>
  );
};

export default ChildComponent;
