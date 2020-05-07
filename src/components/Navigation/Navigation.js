import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default () => (
  <ul className={classes.Navigation}>
    <li>
      <NavLink to="/posts" activeClassName={classes.active} exact>
        Posts
      </NavLink>
    </li>
    <li>
      <NavLink to="/posts/new" activeClassName={classes.active}>
        New post
      </NavLink>
    </li>
  </ul>
);
