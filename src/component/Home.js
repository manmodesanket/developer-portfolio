import React from "react";
import { Link } from "@reach/router";
import { auth } from "../firebase/firebase";

const Home = () => {
  //const { email, setEmail, username, setUserame } = useContext(UserContext);

  if (auth.currentUser) {
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
            <Link to="/profile">
              <button>Profile</button>
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
