import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import Projects from "./Projects";
import Info from "./Info";
import Skills from "./Skills";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = "Profile";
    //setUsername("username");
    if (auth.currentUser) {
      db.collection("users")
        .doc(auth.currentUser.email)
        .get()
        .then((doc) => {
          setData(doc.data());
          setUsername(doc.data().username);
          document.title = username;
        });
    }
  }, [username]);
  return (
    <div className="container">
      <Info data={data} />
      <Skills username={username} data={data} />
      <Projects username={username} data={data} />
    </div>
  );
};

export default Profile;
