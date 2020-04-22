import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  function titleChange(event) {
    const post = { ...newPost };
    post.title = event.target.value;
    setNewPost(post);
  }

  function bodyChange(event) {
    setNewPost({
      ...newPost,
      body: event.target.value
    });
  }

  function submitPost() {
    axios.post('https://jsonplaceholder.typicode.com/posts', { ...newPost })
      .then(response => {
        console.log(response);
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
      <button onClick={submitPost}>Submit</button>
    </div>
  );
}