import React, { useState, useContext } from "react";
import { people as data } from "../../../MockData";

// !returns two components: Provider(distributor), Consumer
// !we can pass arguments to React.createContext()
const PersonContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  // !wrap return of root component in PersonContext.Provider then pass value prop
  return (
    <PersonContext.Provider
      value={{
        people,
        removePerson,
      }}
    >
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = () => {
  // !access: mainData: {people, removePerson}
  //   !pass in PersonContext
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, age, gender }) => {
  // !access: destructure
  //   !pass in PersonContext
  const { removePerson } = useContext(PersonContext);
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

export default ContextApi;

// TODO: ContextAPI
// !we were passing props from one component to the next
// !which was not necessary
// !use CONTEXT API to solve this

// !steps include:
// React.createContext
// wrap return of root Component with PersonContext.Provider
// const {removePerson} = useContext(PersonContext)

// !a use case would be to use useGlobalContext === research on this
