import React from 'react';

export default ({ title, author }) => {
  return (
    <div className="Post">
      <h3>{title}</h3>
      <span className="author">{author}</span>
    </div>
  );
}