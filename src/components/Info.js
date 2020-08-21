import React, { useState, useEffect } from "react";

const Info = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  //const [social, setSocial] = useState("");
  const [social, setSocial] = useState(null);
  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");
  const [looking, setLooking] = useState("");
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    setName("John Doe");
    setUsername("johnnyboi");
    setBio("I don't kid anymore. I do things");
    //setSocial("");
    setLocation("Pune, India");
    setWork("Software Engineer at Amdocs");
    setLooking("Open for New Oppoertunity");
    if (props.data) {
      setName(props.data.name);
      setUsername(props.data.username);
      setBio(props.data.bio);
      setSocial(props.data.social);
      setLocation(props.data.location);
      setWork(props.data.work);
      setLooking(props.data.work_status);
      setFlag(1);
    }
  }, [props.data]);

  if (flag) {
    const socialList = social.map((s, idx) => {
      return (
        <li key={idx}>
          <a href={s.link} target="_blank" rel="noreferrer">
            {s.site}
          </a>
        </li>
      );
    });
    return (
      <div className="info">
        <div className="data">
          <div>
            <h1>{name}</h1>
            <div>@{username}</div>
            <div>{bio}</div>
            <ul className="social">{socialList}</ul>
          </div>
          <ul className="status">
            <li>
              <div className="key">Work</div>
              <div className="value">{work}</div>
            </li>
            <li>
              <div className="key">Location</div>
              <div className="value">{location}</div>
            </li>
            <li>
              <div className="key">Work Status</div>
              <div className="value">{looking}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Profile</div>
          <div>Loading or data not available</div>
        </div>
      </div>
    );
  }
};

export default Info;
