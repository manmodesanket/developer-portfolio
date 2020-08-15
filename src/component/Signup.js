import React from "react";

const Signup = () => {
  return (
    <div className="container login-form">
      <form className="">
        <label>
          Email
          <input type="text" placeholder="email"></input>
        </label>
        <label>
          Username
          <input type="text" placeholder="username"></input>
        </label>
        <label>
          Password
          <input type="password" placeholder="password"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
