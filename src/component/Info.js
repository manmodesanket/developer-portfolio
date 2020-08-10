import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [social, setSocial] = useState("");

  useEffect(() => {
    setName("John Doe");
    setUsername("johnnyboi");
    setBio("I don't kid anymore. I do things");
    setSocial("");
  });

  return (
    <div className="info">
      <div>
        <div>{name}</div>
        <div>@{username}</div>
      </div>
      <div>{bio}</div>
      <ul className="social">
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Github</li>
        <li>Medium</li>
      </ul>
    </div>
  );
};

export default Info;
