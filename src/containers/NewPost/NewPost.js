import React, { useState } from "react";
import axios from "../../axios";
import classes from "./NewPost.module.css";
import { useHistory } from "react-router-dom";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export default withErrorHandler(() => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    author: "",
  });

  function titleChange(event) {
    const post = { ...newPost };
    post.title = event.target.value;
    setNewPost(post);
  }

  function bodyChange(event) {
    setNewPost({
      ...newPost,
      body: event.target.value,
    });
  }

  function authorChange(event) {
    setNewPost({
      ...newPost,
      author: event.target.value,
    });
  }

  function submitPost() {
    if (!newPost.title || !newPost.body || !newPost.author) {
      alert("Fill the fields!");
      return;
    }

    setLoading(true);
    axios
      .post("/posts.json", { ...newPost })
      .then(({ data }) => {
        setNewPost({
          title: "",
          body: "",
          author: "",
        });
        setLoading(false);

        history.push("/posts/" + data.name);
      })
      .catch((error) => setLoading(false));
  }

  return (
    <div className={classes.NewPost}>
      <h1>New Post</h1>
      <div>
        <input
          type="text"
          onChange={titleChange}
          value={newPost.title}
          disabled={loading}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          onChange={bodyChange}
          value={newPost.body}
          disabled={loading}
          placeholder="Body"
        ></textarea>
      </div>
      <div>
        <input
          type="text"
          onChange={authorChange}
          value={newPost.author}
          disabled={loading}
          placeholder="Author"
        />
      </div>
      <button onClick={submitPost} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
}, axios);
