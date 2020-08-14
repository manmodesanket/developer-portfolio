import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import Info from "./Info";
import Skills from "./Skills";

const Profile = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername("johndoe");
    document.title = username;
  }, [username]);
  return (
    <div className="container">
      <Info />
      <Skills username={username} />
      <Projects username={username} />
    </div>
  );
};

export default Profile;
