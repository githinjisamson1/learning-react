import React from "react";
import "./stylesheet.css";

const StyleSheet = (prop) => {
  let className = prop.primary ? "primary" : "";

  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  );
};

export default StyleSheet;

// TODO: alternative to backticks ``
// can use className library for multiple classNames
// can conditionally apply classes based on props or state of Component

