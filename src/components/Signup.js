import React, { useState } from "react";
import { signup } from "../firebase/firebase";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [uname, setUname] = useState(null);

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPass(e.target.value);
    } else if (e.target.name == "username") {
      setUname(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass, uname);
    signup(email, pass, uname);
    document.getElementById("signup-form").reset();
  };

  return (
    <div className="container login-form">
      <form id="signup-form" onSubmit={handleSubmit}>
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
          Username
          <input
            type="text"
            name="username"
            placeholder="username"
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

export default Signup;
