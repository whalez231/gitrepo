import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";
import Load from "../assets/img/Interwind.gif";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/whalez231`)
      .then((response) => response.json())
      .then((data) => {
        setDisplay(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const {
    name,
    followers,
    following,
    location,
    bio,
    blog,
    login,
    avatar_url,
    public_repos,
  } = display || {};

  return (
    <div className="home">
      {loading ? (
        <div className="home--loading">
          <img
            src={Load}
            alt="Loading..."
            style={{
              width: "5rem",
              height: "5rem",
            }}
          />
        </div>
      ) : error ? (
        <p className="home--error">
          Network Error{" "}
          <span className="home--error__span"> please refresh the page.</span>
        </p>
      ) : (
        <div className="home--content">
          <Helmet>
            <title>Git Repo | Home</title>
            <meta name="description" content="Home page of the Git Repo app" />
          </Helmet>
          <div className="home--container">
            <p className="home--container__title">
              Use <strong> Git Repo</strong> to search and view repositories of any user!
            </p>
            <div className="home--wrapper">
              <h1 className="home--info__heading">{name}'s Profile</h1>
              <div className="home--info">
                <div className="home--img">
                  <img
                    src={avatar_url}
                    alt="My img"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="home--container__bottom">
                  <p className="home--container__data intro">
                    <strong className="intro__strong">Intro</strong>
                    {bio}
                  </p>
                  <p className="home--container__data">
                    <strong>Username: </strong>
                    {login}{" "}
                  </p>
                  <p className="home--container__data">
                    <strong>URL: </strong>
                    {blog}{" "}
                  </p>
                  <p className="home--container__data">
                    <strong>Followers: </strong>
                    {followers}{" "}
                  </p>
                  <p className="home--container__data">
                    <strong>Following: </strong>
                    {following}{" "}
                  </p>
                  <p className="home--container__data">
                    <strong>Public Repos: </strong>
                    {public_repos}{" "}
                  </p>
                  <p className="home--container__data">
                    <strong>Location: </strong>
                    {location}{" "}
                  </p>
                </div>
              </div>
              <div className="home--button">
                <button
                  className="home--btn"
                  onClick={() => navigate("/repos")}
                >
                  View My Repos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
