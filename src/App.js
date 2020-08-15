import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Profile from "./component/Profile";

import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
