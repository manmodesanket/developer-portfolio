import React, { useState } from "react";
import { auth, login } from "../firebase/firebase";

const Login = () => {
  const [emailForm, setEmailForm] = useState("");
  const [pass, setPass] = useState("");
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

  auth.onAuthStateChanged(() => {
    console.log("change");
  });
  if (auth.currentUser) {
    //setEmail(auth.currentUser.email);
    console.log(auth.currentUser);
  }
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
};

export default Login;
