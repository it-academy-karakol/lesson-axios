import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      setPost(null);
      axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
          setPost(response.data);
        });
    }
  }, [ id ]);

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
      </>
    );
  }

  return (
    <article className="FullPost">
      {postOutput}
    </article>
  );
}