import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetching1 = () => {
  // !states
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  //   !fetch API - 1
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = response.data;
      console.log(data);

      if (data) {
        // !state transitions
        setLoading(!loading);
        setPost(data);
        setError("");
      }
    } catch (error) {
      console.log(error.message);
      //   !state transitions
      setLoading(!loading);
      setPost({});
      setError(`${error.message}!`);
    }
  };

  //   !run useEffect on initial render/once
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>{post.title}</h1>}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default DataFetching1;

// TODO: fetching data with use of useState and useEffect
// !take note of state transitions
// !state transitions
// setLoading(!loading);
// setPost(data);
// setError("");
