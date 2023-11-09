import React from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo-white.svg";

function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={mainLogo} className="nav-logo" alt="WatchNow_logo" />
      </NavLink>
      <nav id="nav-menu">
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
