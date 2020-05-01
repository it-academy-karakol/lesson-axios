import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";

export default () => {
  const [posts, setPosts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/posts.json")
      .then((response) => setPosts(response.data))
      .catch((error) => setError(true));
  }, []);

  let postsOutput = <p>Loading...</p>;
  if (posts) {
    postsOutput = Object.keys(posts).map((id) => (
      <Post key={id} id={id} {...posts[id]} />
    ));
  }
  if (posts === null) {
    postsOutput = <p>No blog posts found!</p>;
  }
  if (error) {
    postsOutput = <p className="error">Error loading posts from server!</p>;
  }

  return <div className="Posts">{postsOutput}</div>;
};
