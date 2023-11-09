import React from "react";
import "../style/NavbarModal.css";
import { NavLink } from "react-router-dom";

function NavbarModal() {
  return (
    <div>
      <nav id="nav-menu-modal">
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/mylist">MyList</NavLink>
      </nav>
    </div>
  );
}

export default NavbarModal;
