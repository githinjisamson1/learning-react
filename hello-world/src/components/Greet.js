import React from "react";

const Greet = ({ name, gender, children }) => {
  // const { name, gender, children } = props;

  // console.log(props);

  return (
    <div>
      <h1>
        Greetings, {name}, {gender}
      </h1>
      {children}
    </div>
  );
};

// default export/import using any name
export default Greet;

// named export/import using exact name in curly braces {Greet}
// export Greet = () => {}

// =>: fat arrow syntax

// TODO: functional component
// returns html/jsx
// stateful as of 2018/hooks
