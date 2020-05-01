import React, { useState } from "react";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
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
    axios.post("/posts.json", { ...newPost }).then(({ data }) => {
      setNewPost({
        title: "",
        body: "",
        author: "",
      });

      history.push("/post/" + data.name);
    });
  }

  return (
    <div className="NewPost">
      <div>
        <div>Title:</div>
        <input type="text" onChange={titleChange} value={newPost.title} />
      </div>
      <div>
        <div>Body:</div>
        <textarea onChange={bodyChange} value={newPost.body}></textarea>
      </div>
      <div>
        <div>Author:</div>
        <input type="text" onChange={authorChange} value={newPost.author} />
      </div>
      <button onClick={submitPost}>Submit</button>
    </div>
  );
};
