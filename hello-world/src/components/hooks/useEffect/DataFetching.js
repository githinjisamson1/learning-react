import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  // state
  const [posts, setPosts] = useState([]);

  //   side effect/run on initial render
  useEffect(() => {
    // TODO: fetch()
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    // TODO: axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          const { id, title } = post;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default DataFetching;
