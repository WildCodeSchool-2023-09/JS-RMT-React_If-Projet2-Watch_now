import React from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo-white.svg";
import searchLogo from "../assets/search.svg";

function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={mainLogo} className="nav-logo" alt="WatchNow_logo" />
      </NavLink>
      <nav id="nav-menu">
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/mylist">MyList</NavLink>
      </nav>
      <NavLink to="/movies">
        <img
          src={searchLogo}
          className="nav-search-logo"
          alt="WatchNow_search-logo"
        />
      </NavLink>
      <button type="button" className="cart-button">
        Cart
      </button>
    </div>
  );
}

export default NavBar;
