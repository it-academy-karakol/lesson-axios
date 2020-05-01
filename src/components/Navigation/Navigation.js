import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <ul className="Navigation">
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/new-post">New post</NavLink>
    </li>
  </ul>
);
