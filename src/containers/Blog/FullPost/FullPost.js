import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
          console.log(response.data);
          setPost(response.data);
        });
    }
  }, [ id ]);

  let postOutput = <p>Select a blog post</p>;
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