import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import Projects from "./Projects";
import Info from "./Info";
import Skills from "./Skills";
import { auth } from "firebase";

const Profile = (props) => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = "Profile";
    db.collection("userList")
      .doc(props.username)
      .get()
      .then((doc) => {
        setData(doc.data());
        setUsername(doc.data().username);
        document.title = `${username}`;
      });
  }, [username, props.username]);
  return (
    <div className="container">
      <Info data={data} />
      <Skills username={username} data={data} />
      <Projects username={username} data={data} />
    </div>
  );
};

export default Profile;
