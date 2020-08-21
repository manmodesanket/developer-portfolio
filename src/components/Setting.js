import React from "react";
import { Link } from "@reach/router";

const Setting = (props) => {
  return (
    <div>
      <h2>Setting</h2>
      <ul>
        <li>
          <Link to="./">Setting Home</Link>
        </li>
        <li>
          <Link to="profile">profile</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default Setting;
