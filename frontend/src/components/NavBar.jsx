import React from "react";
import "../style/NavBar.css";
import { Link } from "react-router-dom";
import mainLogo from "../assets/logo-white.svg";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/">
        <img src={mainLogo} className="nav-logo" alt="WatchNow_logo" />
      </Link>
      <nav className="nav-menu">
        <Link to="/movies">Browse</Link>
        <Link to="/mylist">MyList</Link>
      </nav>
    </div>
  );
}

export default NavBar;
