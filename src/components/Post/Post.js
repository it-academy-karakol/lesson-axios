import React from "react";
import { Link } from "react-router-dom";

export default ({ id, title, author }) => {
  return (
    <div className="Post">
      <h3>{title}</h3>
      <span className="author">{author}</span>
      <br />
      <Link to={"/post/" + id}>Read more</Link>
    </div>
  );
};
