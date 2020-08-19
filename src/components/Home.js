import React, { useContext, useEffect } from "react";
import { auth, db, logout } from "../firebase/firebase";
import { Link } from "@reach/router";
import { UserContext } from "./UserContext";

const Home = () => {
  const { username, setUsername } = useContext(UserContext);
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        db.collection("mapEmailUsername")
          .doc(auth.currentUser.email)
          .get()
          .then((doc) => {
            setUsername(doc.data().username);
          });
      } else {
        setUsername(null);
      }
    });
  }, [setUsername]);
  if (username) {
    return (
      <div className="container">
        <div className="row top">
          <div className="col s6 m6">
            <div className="title">DevPort</div>
          </div>
          <div className="col s3 m3">
            <Link to={`${username}`}>
              <button>Profile</button>
            </Link>
          </div>
          <div className="col s3 m3">
            <button onClick={logout}>Logout</button>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <h2 className="homepageheader">
              Developer Portfolios at one place
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row top">
          <div className="col s6 m6">
            <div className="title">DevPort</div>
          </div>
          <div className="col s3 m3">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div className="col s3 m3">
            <Link to="/signup">
              <button>Sigup</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <h2 className="homepageheader">
              Developer Portfolios at one place
            </h2>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
