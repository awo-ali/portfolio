import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Awo Ali</div>
      <ul className="navbar__links">
        <li>
          <a className="navbar__links-styling" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="navbar__links-styling" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="navbar__links-styling" href="#projects">
            Projects
          </a>
        </li>
        <a href="#contact">
          <button className="navbar__contact">Get in Touch</button>
        </a>
      </ul>
      {/* <div className="navbar__links">
        <div className="navbar__links-styling">Home</div>
        <div className="navbar__links-styling">About</div>
        <div className="navbar__links-styling">Projects</div>
        <button className="navbar__contact">Get in Touch</button>
      </div> */}
    </div>
  );
};

export default Navbar;
