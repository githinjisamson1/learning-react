import React, { useEffect, useState } from "react";

const FunctionalArray = () => {
  const [users, setUsers] = useState([]);

  // no dependency: run all the time
  // empty dependency: run once
  // list of depedency(ies): run when dependencies change
  // return clean up function: when you want to prevent memory leaks === just an arrow function
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {users &&
        users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}: {user.website}
            </li>
          );
        })}
    </>
  );
};

export default FunctionalArray;
