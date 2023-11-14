import React from "react";
import "../style/NavbarModal.css";
import { NavLink } from "react-router-dom";

function NavbarModal() {
  return (
    <div>
      <nav className="nav-menu-modal">
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
}

export default NavbarModal;
