import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  //const [social, setSocial] = useState("");
  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");
  const [looking, setLooking] = useState("");

  useEffect(() => {
    setName("John Doe");
    setUsername("johnnyboi");
    setBio("I don't kid anymore. I do things");
    //setSocial("");
    setLocation("Pune, India");
    setWork("Software Engineer at Amdocs");
    setLooking("Open for New Oppoertunity");
  }, []);

  return (
    <div className="info">
      <div className="data">
        <div>
          <h1>{name}</h1>
          <div>@{username}</div>
          <div>{bio}</div>
          <ul className="social">
            <li>Twitter</li>
            <li>Github</li>
            <li>Medium</li>
          </ul>
        </div>
        <ul className="status">
          <li>
            <div className="key">Work</div>
            <div className="value">{work}</div>
          </li>
          <li>
            <div className="key">Location</div>
            <div className="value">{location}</div>
          </li>
          <li>
            <div className="key">Work Status</div>
            <div className="value">{looking}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
