import React, { useEffect, useState } from "react";
import { useGlobalUsersContext } from "./usersContext";

const UsersList = () => {
  const { usersState, dispatchForUsersState } = useGlobalUsersContext();

  // no dependency: run all the time
  // empty dependency: run once
  // list of depedency(ies): run when dependencies change
  // return clean up function: when you want to prevent memory leaks === just an arrow function
  useEffect(() => {
    dispatchForUsersState({ type: "FETCH_REQUEST" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          dispatchForUsersState({ type: "FETCH_SUCCESS", payload: data });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        dispatchForUsersState({ type: "FETCH_FAILURE" });
      });
  }, []);

  if (usersState.loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {usersState.users &&
        usersState.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}: {user.website}
            </li>
          );
        })}
    </>
  );
};

export default UsersList;
