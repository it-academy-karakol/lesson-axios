import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "../../axios";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

export default () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState(false);

  function deletePost() {
    axios.delete("/posts/" + id + ".json").then((response) => {
      history.replace("/posts");
    });
  }

  useEffect(() => {
    axios.get("/posts/" + id + ".json").then((response) => {
      setPost(response.data);
    });
  }, [id]);

  // ID selected post is loading
  let postOutput = <p>Loading...</p>;
  if (post === null) {
    postOutput = <PageNotFound />;
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
