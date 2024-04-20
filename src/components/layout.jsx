import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/layout.css";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Layout = () => {
  return (
    <>
      <LayoutSmall />
      <LayoutLarge />
    </>
  );
};

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "#00bb14",
    fontWeight: "bold"
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      {...props}
    />
  );
};

const LayoutSmall = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="layout layoutOne">
      <header className="layout--header">
          <Link to="/" className="layout--header--logo">Gitfolio</Link>
        <nav className="layout--items">
          <button onClick={toggleNav} className="layout--btn">
            {nav ? (
              <MdClose className="layout--btn--icon" />
            ) : (
              <FiMenu className="layout--btn--icon" />
            )}
          </button>
          <div className={`menuNav ${nav ? " showMenu" : ""}`}>
            <CustomNavLink
              to="/"
              end
              className="layout--item"
              onClick={() => closeNav()}
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              to="search"
              className="layout--item"
              onClick={() => closeNav()}
            >
              Search Repos
            </CustomNavLink>
            <CustomNavLink
              to="test"
              className="layout--item"
              onClick={() => closeNav()}
            >
              Test Error
            </CustomNavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

const LayoutLarge = () => {
  return (
    <div className="layout layoutTwo">
      <header className="layout--header">
          <Link to="/" className="layout--header--logo">Git Repo</Link>
        <nav className="layout--items--container">
          <CustomNavLink to="/" end className="layout--item__two">
            Home
          </CustomNavLink>
            <CustomNavLink to="search" className="layout--item__two">
            Search Repos
          </CustomNavLink>
          <CustomNavLink to="test" className="layout--item__two">
            Test Error
          </CustomNavLink>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
