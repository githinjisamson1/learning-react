import React from "react";

const Hello = () => {
  // TODO: using jsx
  //   return (
  //     <div>Hello</div>
  //   )

  //   TODO: not using jsx
  return React.createElement(
    "div",
    { id: "hello", className: "greet" },
    React.createElement("h1", null, "When not using jsx")
  );
};

export default Hello;

// TODO: appreciating importance of jsx
// when not using jsx:
// continuous nesting
// hard to read/debug code
// React.createElement(element, {propKey: propValue}, children)

// during compile time
// jsx is translated to pure js then executed
