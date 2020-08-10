import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Home from "./component/Home";
import Profile from "./component/Profile";

import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Profile path="profile" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
