import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import SettingHome from "./components/edit/SettingHome";
import EditProfile from "./components/edit/EditProfile";
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
          <Setting path="/setting">
            <SettingHome path="/" />
            <EditProfile path="profile" />
          </Setting>
          <Profile path="/:username" />
        </Router>
      </UserContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
