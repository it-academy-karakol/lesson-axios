import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export default withErrorHandler(() => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    axios
      .get("/posts.json")
      .then((response) => setPosts(response.data))
      .catch((error) => {});
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

  return (
    <div className="Posts">
      <h1>Posts</h1>
      {postsOutput}
    </div>
  );
}, axios);
