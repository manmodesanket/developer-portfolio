import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { UserContext } from "./components/UserContext";

import "./styles/styles.css";

const App = () => {
  const [username, setUsername] = useState(null);
  return (
    <div>
      <UserContext.Provider value={{ username, setUsername }}>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Signup path="/signup" />
          <Profile path="/:username" />
        </Router>
      </UserContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
