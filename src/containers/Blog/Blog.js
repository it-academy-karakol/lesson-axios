import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../../components/Post';
import FullPost from './FullPost/FullPost';

export default () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Get only first 8 posts
        const data = response.data.slice(0, 6);

        // Add fake author field
        data.forEach(post => post.author = "Bakyt");

        setPosts(data);
      });
  }, []);

  const postsOutput = posts.map(
    post => <Post
      key={post.id}
      title={post.title}
      author={post.author}
      click={() => setSelectedPostId(post.id)} />
  );

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {postsOutput}
      <FullPost id={selectedPostId} />
    </div>
  );
}