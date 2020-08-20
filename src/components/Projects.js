import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
//import { Link } from "@reach/router";
//import { UserContext } from "./UserContext";

const Projects = (props) => {
  const [projects, setProjects] = useState(null);
  //const { email, setEmail, username, setUserame } = useContext(UserContext);
  useEffect(() => {
    if (props.data) {
      setProjects(props.data.project);
    }
  }, [props.data]);

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
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Projects</div>
            <div>Connection error or data not available</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Projects;
