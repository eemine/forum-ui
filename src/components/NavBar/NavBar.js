import React from "react";
import { Link, NavLink } from "react-router-dom";
import foxIcon from "./fox.svg";

const NavBar = ({ logout, token }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={foxIcon} width="30" height="30" alt="" />
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {token && (
          <button
            onClick={logout}
            className="btn btn-sm btn-light"
            type="button"
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
