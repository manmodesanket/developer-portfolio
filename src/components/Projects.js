import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
//import { Link } from "@reach/router";
//import { UserContext } from "./UserContext";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  //const { email, setEmail, username, setUserame } = useContext(UserContext);
  useEffect(() => {
    //db.collection('users').doc()
    //console.log(db.collection("users").doc(email));
    if (auth.currentUser) {
      console.log(auth.currentUser.email);
      /*db.collection("users")
        .doc(auth.currentUser.email)
        .get()
        .then((doc) => {
          console.log(doc.data());
        });*/
    }
    const p = [
      {
        name: "Project Title 1",
        description: "First Project",
        github: "https://github.com/manmodesanket/developer-portfolio",
        site: "www.google.com",
      },
      {
        name: "Project Title 2",
        description: "Second Project",
        github: "https://github.com/manmodesanket/developer-portfolio",
        site: "www.google.com",
      },
      {
        name: "Project Title 3",
        description: "Third Project",
        github: "https://github.com/manmodesanket/developer-portfolio",
        site: "www.google.com",
      },
    ];
    setProjects(p);
  }, []);

  if (projects) {
    const list = projects.map((p, idx) => {
      return (
        <li key={idx}>
          <div className="card">
            <div className="card-content">
              <span className="card-title">{p.name}</span>
              <div>{p.description}</div>
            </div>
            <div className="card-action">
              <a href={p.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={p.site} target="_blank" rel="noreferrer">
                Site
              </a>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="container">
        <ul>{list}</ul>
      </div>
    );
  } else {
    return <div>Projects</div>;
  }
};

export default Projects;
