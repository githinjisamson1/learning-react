import React from "react";

const NameListItem = (props) => {
  const { fruit, index } = props;
  return (
    <li>
      {index} {fruit}
    </li>
  );
};

export default NameListItem;
