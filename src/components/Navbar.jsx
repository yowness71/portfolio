import React from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="nav-links">
            <ul>
              <li>about</li>
              <li>portfolio</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
