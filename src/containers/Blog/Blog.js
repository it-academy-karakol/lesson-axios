import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import Post from '../../components/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

export default () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(null);

  function deletePost() {
    axios.delete('/posts/' + selectedPostId)
      .then(response => {
        console.log(response);
      });
  }

  useEffect(() => {
    axios.get('/posts')
      .then(response => {
        // Get only first 8 posts
        const data = response.data.slice(0, 6);

        // Add fake author field
        data.forEach(post => post.author = "Bakyt");

        setPosts(data);
      })
      .catch(error => {
        setError(true);
      });
  }, []);

  let postsOutput = <p>Loading...</p>;
  if (error) {
    postsOutput = <p className="error">Error loading posts from server!</p>;
  }
  if (posts.length) {
    postsOutput = posts.map(
      post => <Post
        key={post.id}
        title={post.title}
        author={post.author}
        click={() => setSelectedPostId(post.id)} />
    );
  }

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {postsOutput}
      <FullPost id={selectedPostId} deletePost={deletePost} />
      <NewPost />
    </div>
  );
}