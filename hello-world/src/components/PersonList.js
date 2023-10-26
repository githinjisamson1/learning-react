import React from "react";
import PersonListItem from "./PersonListItem";

const PersonList = () => {
  const people = [
    { id: 1, name: "John", age: 21, gender: "male" },
    { id: 2, name: "Doe", age: 22, gender: "male" },
    { id: 3, name: "Jane", age: 23, gender: "female" },
    { id: 4, name: "Susan", age: 24, gender: "female" },
    { id: 5, name: "Peter", age: 25, gender: "male" },
  ];

  const newPerson = people.map((person) => {
    return <PersonListItem key={person.id} {...person} />;
  });

  return <>{newPerson}</>;
};

export default PersonList;

// TODO:
// write then refactor
// refactor jsx into a separate component
// !key prop cannot be accessed
// !keys help react identify items added, updated or removed hence handle UI updated efficiently
// e.g., adding one list item after comparison to original/preserves original
