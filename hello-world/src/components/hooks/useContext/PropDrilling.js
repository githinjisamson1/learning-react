import React, { useState } from "react";
import { people as data } from "../../../MockData";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <section>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, age, gender, removePerson }) => {
  return (
    <div>
      <span>
        {name} | {age} | {gender}
      </span>
      <button
        onClick={() => {
          removePerson(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;

// TODO: prop drilling
// !we are passing props from one component to the next
// !which is not necessary
// !use CONTEXT API to solve this
