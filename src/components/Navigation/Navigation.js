import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <ul className="Navigation">
    <li>
      <NavLink to="/posts" exact>
        Posts
      </NavLink>
    </li>
    <li>
      <NavLink to="/posts/new">New post</NavLink>
    </li>
  </ul>
);
