import React from "react";
import Projects from "./Projects";
import Info from "./Info";
import Skills from "./Skills";

const Profile = () => {
  return (
    <div className="container">
      <Info />
      <Skills />
      <Projects />
    </div>
  );
};

export default Profile;
