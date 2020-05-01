import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";

export default () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        // Get only first 8 posts
        const data = response.data.slice(0, 6);

        // Add fake author field
        data.forEach((post) => (post.author = "Bakyt"));

        setPosts(data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  let postsOutput = <p>Loading...</p>;
  if (error) {
    postsOutput = <p className="error">Error loading posts from server!</p>;
  }
  if (posts.length) {
    postsOutput = posts.map((post) => <Post key={post.id} {...post} />);
  }

  return <div className="Posts">{postsOutput}</div>;
};
