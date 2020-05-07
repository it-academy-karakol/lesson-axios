import React, { useState, useEffect } from "react";
import axios from "../../axios";
import classes from "./Posts.module.css";
import Post from "../../components/Post/Post";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export default withErrorHandler(() => {
  const [posts, setPosts] = useState(false);
  const [error, setError] = useState(false);

  function loadPosts() {
    axios
      .get("/posts.json")
      .then((response) => setPosts(response.data))
      .catch((error) => setError(true));
  }

  function onRetry() {
    setError(false);
    loadPosts();
  }

  useEffect(loadPosts, []);

  let postsOutput = <span class={classes.message}>Loading...</span>;
  if (posts) {
    postsOutput = Object.keys(posts).map((id) => (
      <Post key={id} id={id} {...posts[id]} />
    ));
  }
  if (posts === null) {
    postsOutput = <span class={classes.message}>No blog posts found!</span>;
  }
  if (!posts && error) {
    postsOutput = <button onClick={onRetry}>Retry</button>;
  }

  return (
    <div className={classes.Posts}>
      <h1>Posts</h1>
      {postsOutput}
    </div>
  );
}, axios);
