import React from "react";
import NameListItem from "./NameListItem";

const NameList = () => {
  // array
  const fruits = ["apple", "banana", "cherry"];

  return (
    <div>
      {/* manipulate array/transforming each item into a jsx element/transformation */}
      {fruits.map((fruit, index) => {
        // must use key attribute when dealing with a list
        return <NameListItem key={index} fruit={fruit} index={index} />;
      })}
    </div>
  );
};

export default NameList;

// TODO:
// can use element variables
