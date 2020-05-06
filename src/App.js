import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./containers/Posts/Posts";
import FullPost from "./containers/FullPost/FullPost";
import NewPost from "./containers/NewPost/NewPost";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path="/posts/:id">
            <FullPost />
          </Route>
          <Route path="/posts/new">
            <NewPost />
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
