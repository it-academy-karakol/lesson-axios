import React from "react";
import "./App.css";
import Blog from "./containers/Blog/Blog";
import { BrowserRouter, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new-post">New post</NavLink>
          </li>
        </ul>
        <Blog />
      </div>
    </BrowserRouter>
  );
}

export default App;
