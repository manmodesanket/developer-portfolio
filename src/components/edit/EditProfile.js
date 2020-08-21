import React, { useState } from "react";

const EditProfile = () => {
  const { username, setUsername } = useContext(UserContext);
  const [name, setName] = useState("");
  const [username1, setUsername1] = useState("");
  const [bio, setBio] = useState("");
  //const [social, setSocial] = useState("");
  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");
  const [looking, setLooking] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "username") {
      setUsername1(e.target.value);
    } else if (e.target.name == "bio") {
      setBio(e.target.value);
    } else if (e.target.name == "location") {
      setLocation(e.target.value);
    } else if (e.target.name == "work") {
      setWork(e.target.value);
    } else if (e.target.name == "looking") {
      setLooking(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(username1);
    console.log(username);
    console.log(looking);
    document.getElementById("edit-profile").reset();
  };

  return (
    <div className="container">
      <form className="form" id="edit-profile" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </label>
        <label>
          Bio
          <input
            type="text"
            name="bio"
            placeholder="bio"
            onChange={handleChange}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            placeholder="location"
            onChange={handleChange}
          />
        </label>
        <label>
          Work
          <input
            type="text"
            name="work"
            placeholder="work"
            onChange={handleChange}
          />
        </label>
        <label>
          Work Status
          <input
            type="text"
            name="looking"
            placeholder="looking"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditProfile;
