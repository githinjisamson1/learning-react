import React from "react";

const Column = () => {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>John</td>
    </React.Fragment>
  );
};

export default Column;

// TODO: React.Fragment use case/instead of div
// cannot use td as parent to div
// React.Fragment does not add nodes/elements to the DOM
// React.Fragment can pass in only key attribute/ when dealing with a list
// <></> as shorthand/cannot pass in key attribute
