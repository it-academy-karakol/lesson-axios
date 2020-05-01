import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./containers/Posts/Posts";
import FullPost from "./containers/FullPost/FullPost";
import NewPost from "./containers/NewPost/NewPost";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

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
    </BrowserRouter>
  );
}

export default App;
