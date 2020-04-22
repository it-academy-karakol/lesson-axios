import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../../components/Post';

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  const postsOutput = posts.map(post => <Post key={post.id} title={post.title} />);

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {postsOutput}
    </div>
  );
}