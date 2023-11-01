import axios from "axios";
import React, { useEffect, useReducer } from "react";

// !initialState
const initialState = {
  loading: true,
  post: {},
  error: "",
};

// !reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POST":
      return {
        ...state,
        loading: !state.loading,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: !state.loading,
        post: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

const DataFetching2 = () => {
  // !useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //   !fetch API - 1
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log(response.data);
      dispatch({ type: "FETCH_POST", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  //   !useEffect run on initial render/once
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {state.loading ? <h1>Loading...</h1> : <h2>{state.post.title}</h2>}
      {/* {state.error && <p>{state.error}</p>} */}
    </div>
  );
};

export default DataFetching2;
