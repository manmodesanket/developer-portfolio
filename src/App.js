import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Profile from "./component/Profile";
import { UserContext } from "./component/UserContext";

import "./styles/styles.css";

const App = () => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  return (
    <div>
      <UserContext.Provider value={{ email, setEmail, username, setUsername }}>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Signup path="/signup" />
          <Profile path="/profile" />
        </Router>
      </UserContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
