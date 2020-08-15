import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const Projects = (props) => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const p = [
      {
        name: "Project Title 1",
        description: "First Project",
        web: {
          github: "https://github.com/manmodesanket/developer-portfolio",
          site: "www.google.com",
        },
      },
      {
        name: "Project Title 2",
        description: "Second Project",
        web: {
          github: "https://github.com/manmodesanket/developer-portfolio",
          site: "www.google.com",
        },
      },
      {
        name: "Project Title 3",
        description: "Third Project",
        web: {
          github: "https://github.com/manmodesanket/developer-portfolio",
          site: "www.google.com",
        },
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
              <a href={p.web.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={p.web.site} target="_blank" rel="noreferrer">
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
