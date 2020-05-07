import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../../axios";
import classes from "./FullPost.module.css";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export default withErrorHandler(() => {
  const { id } = useParams();
  const [post, setPost] = useState(false);
  const [error, setError] = useState(false);

  function loadFullPost() {
    axios
      .get("/posts/" + id + ".json")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => setError(true));
  }

  function onRetry() {
    setError(false);
    loadFullPost();
  }

  useEffect(loadFullPost, [id]);

  // ID selected post is loading
  let postOutput = <span>Loading...</span>;
  if (post === null) {
    postOutput = <PageNotFound />;
  }
  if (!post && error) {
    postOutput = <button onClick={onRetry}>Retry</button>;
  }

  // ID selected post is loaded
  if (post) {
    postOutput = (
      <>
        <h1>{post.title}</h1>
        <aside>
          <span>{post.author}</span>
          <Link
            to={"/posts/" + id + "/delete?title=" + post.title}
            className={classes.delete}
          >
            Delete
          </Link>
        </aside>
        <p>{post.body}</p>
      </>
    );
  }

  return <div className={classes.FullPost}>{postOutput}</div>;
}, axios);
