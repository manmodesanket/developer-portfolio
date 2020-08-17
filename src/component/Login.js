import React, { useState } from "react";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [emailForm, setEmailForm] = useState("");
  const [pass, setPass] = useState("");
  //const { email, setEmail, username, setUsername } = useContext(UserContext);
  const login = () => {
    auth.signInWithEmailAndPassword(emailForm, pass);
  };
  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmailForm(e.target.value);
    } else if (e.target.name == "password") {
      setPass(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("email " + email);
    //console.log("pass  " + pass);
    login();
    document.getElementById("login-form").reset();
  };

  const logout = () => {
    auth.signOut();
  };

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
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;
