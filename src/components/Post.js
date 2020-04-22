import React from 'react';

export default ({ title, author, click }) => {
  return (
    <div className="Post" onClick={click}>
      <h3>{title}</h3>
      <span className="author">{author}</span>
    </div>
  );
}