import React, { useState, useEffect } from "react";

const Skills = (props) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (props.data) {
      setSkills(props.data.skills);
    }
  }, [props.data]);

  if (skills) {
    const list = skills.map((s, idx) => {
      return <li key={idx}>{s}</li>;
    });
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Skills</div>
            <ul className="skillList">
              {list ? list : <div>Connection error or data not available</div>}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="card">
          <div className="card-title">Skills</div>
          <div>Connection error or data not available</div>
        </div>
      </div>
    );
  }
};

export default Skills;
