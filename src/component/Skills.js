import React, { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const arrSkills = ["React", "NodeJS"];
    setSkills(arrSkills);
  }, []);

  if (skills) {
    const list = skills.map((s, idx) => {
      return <li key={idx}>{s}</li>;
    });
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Skills</div>
            <ul className="skillList">{list}</ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Skills;
