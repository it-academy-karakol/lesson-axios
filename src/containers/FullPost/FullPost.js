import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      setPost(null);
      axios.get("/posts/" + id).then((response) => {
        setPost(response.data);
      });
    }
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
        <button onClick={() => {}}>Delete</button>
      </>
    );
  }

  return <article className="FullPost">{postOutput}</article>;
};
