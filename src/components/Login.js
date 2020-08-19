import { Link } from "@reach/router";
import React, { useState, useContext } from "react";
import { login } from "../firebase/firebase";
import { UserContext } from "./UserContext";

const Login = () => {
  const [emailForm, setEmailForm] = useState("");
  const [pass, setPass] = useState("");
  const { username, setUsername } = useContext(UserContext);

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmailForm(e.target.value);
    } else if (e.target.name == "password") {
      setPass(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailForm, pass);
    document.getElementById("login-form").reset();
  };

  if (username) {
    //setEmail(auth.currentUser.email);
    return (
      <div>
        <div>Already LoggedIn</div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container login-form">
        <form onSubmit={handleSubmit} id="login-form">
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            ></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default Login;
