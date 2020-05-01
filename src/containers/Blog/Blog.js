import React from "react";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import { Switch, Route } from "react-router-dom";
import Posts from "../../components/Posts/Posts";

export default () => {
  return (
    <div className="Blog">
      <h1>Blog</h1>

      <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/post/:id">
          <FullPost />
        </Route>
        <Route path="/new-post">
          <NewPost />
        </Route>
      </Switch>
    </div>
  );
};
