import React, { useContext, useReducer } from "react";

// returns Provider, Consumer
const UsersContext = React.createContext();

// wrap return in Provider
const UsersProvider = ({ children }) => {
  // initialUsersState
  const initialUsersState = {
    loading: false,
    users: [],
    error: "",
  };

  //   usersReducer
  const usersReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return {
          ...state,
          loading: true,
          users: [],
          error: "",
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: "",
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload,
        };

      default:
        return state;
    }
  };

//   useReducer hook
  const [usersState, dispatchForUsersState] = useReducer(
    usersReducer,
    initialUsersState
  );

  return (
    <UsersContext.Provider
      value={{
        usersState,
        dispatchForUsersState,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useGlobalUsersContext = () => {
  return useContext(UsersContext);
};

export { UsersProvider, useGlobalUsersContext };
