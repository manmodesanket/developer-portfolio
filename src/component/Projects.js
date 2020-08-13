import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const p = [
      {
        name: "Project Title 1",
        description: "First Project",
      },
      {
        name: "Project Title 2",
        description: "Second Project",
      },
      {
        name: "Project Title 3",
        description: "Third Project",
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
