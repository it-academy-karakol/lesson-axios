import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "../../axios";

export default () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  function deletePost() {
    axios.delete("/posts/" + id + ".json").then((response) => {
      history.push("/");
    });
  }

  useEffect(() => {
    axios.get("/posts/" + id + ".json").then((response) => {
      setPost(response.data);
    });
  }, [id]);

  // No ID and no loaded post
  let postOutput = <p>Select a blog post</p>;
  // ID selected post is loading
  if (id) {
    postOutput = <p>Loading...</p>;
  }
  // ID selected post is loaded
  if (post) {
    postOutput = (
      <>
        <h2>{post.title}</h2>
        <div className="author">{post.author}</div>
        <p>{post.body}</p>
        <button onClick={deletePost}>Delete</button>
      </>
    );
  }

  return <article className="FullPost">{postOutput}</article>;
};
