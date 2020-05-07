import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

export default ({ id, title, author, body }) => {
  return (
    <article className={classes.Post}>
      <h2>{title}</h2>
      <aside>
        <span className="author">{author}</span>
        <Link to={"/posts/" + id}>Read more</Link>
      </aside>
      <p>{body.slice(0, 250)}...</p>
    </article>
  );
};
