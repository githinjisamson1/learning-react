import React, { useState } from "react";

const ObjectState = () => {
  // !state
  const [student, setStudent] = useState({ name: "", age: "", gender: "" });

  //   !eventHandlers

  const handleChange = (e) => {
    // access name/value
    const name = e.target.name;
    const value = e.target.value;

    // !spread oldState/return newUpdatedState
    // !use dynamic object properties
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={student.name}
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        value={student.age}
        onChange={handleChange}
      />
      <input
        name="gender"
        type="text"
        value={student.gender}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default ObjectState;

// TODO: ALWAYS SPREAD OLD STATE AND RETURN NEW STATE/MERGING MANUALLY
// TODO: when using useState with objects
