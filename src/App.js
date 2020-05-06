import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./containers/Posts/Posts";
import FullPost from "./containers/FullPost/FullPost";
import NewPost from "./containers/NewPost/NewPost";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DeletePost from "./components/DeletePost/DeletePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Redirect to="/posts" />
          </Route>
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path="/posts/new">
            <NewPost />
          </Route>
          <Route path="/posts/:id" exact>
            <FullPost />
          </Route>
          <Route path="/posts/:id/delete">
            <DeletePost />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
