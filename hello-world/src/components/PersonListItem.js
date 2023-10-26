import React from "react";

const PersonListItem = ({ name, age, gender }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{gender}</p>
    </>
  );
};

export default PersonListItem;
