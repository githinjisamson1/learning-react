import React, { useEffect, useState } from "react";

const FunctionalArray = () => {
  const [users, setUsers] = useState([]);

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
