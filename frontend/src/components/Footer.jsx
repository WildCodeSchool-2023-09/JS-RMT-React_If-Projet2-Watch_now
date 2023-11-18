import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Footer.css";
import mainLogoName from "../assets/logo-white-name.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <NavLink to="/">
          <img
            src={mainLogoName}
            className="nav-logo-name"
            alt="WatchNow_logo_name"
          />
        </NavLink>
        <div className="text-footer">
          Made with ❤️ by Jean-Marc, Maxim & Thibaud
        </div>
      </div>
    </div>
  );
}

export default Footer;
