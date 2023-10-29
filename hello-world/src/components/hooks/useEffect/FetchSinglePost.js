import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchSinglePost = () => {
  // states
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  //   !fetchPost using built-in  fetch
  const fetchPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //   !fetchPost using axios
  const fetchPostUsingAxios = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
      );
      console.log(response);
      setPost(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   side effect/run every time id changes
  useEffect(() => {
    fetchPost();

    // fetchPostUsingAxios();
  }, [idFromButtonClick]);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={handleChange} />
      <button onClick={handleClick}>Fetch</button>
      <h1>{post.title}</h1>
    </div>
  );
};

export default FetchSinglePost;
