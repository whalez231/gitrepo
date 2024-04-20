import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/error.css";
import avatar from "../assets/img/errorImg.jpg";

const Error = () => {
  return (
    <div className="error">
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="Error message for invalid Route" />
      </Helmet>
      <div className="error--container">
        <div className="error--img__container">
          <img src={avatar} alt="404 error" className="error--img" />
        </div>
        <p className="error--paragraph">
          The page you are trying to access does not exist.
        </p>
        <Link to="/" className="error--link">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Error;
