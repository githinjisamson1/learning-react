import React, { useContext } from "react";

// retuurns Provider, Consumer
const UsersContext = React.createContext();

// wrap return in Provider
const UsersProvider = ({ children }) => {
  return <UsersContext.Provider>{children}</UsersContext.Provider>;
};

const useGlobalUsersContext = () => {
  return useContext(UsersContext);
};

export { UsersProvider, useGlobalUsersContext };
