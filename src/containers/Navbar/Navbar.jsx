import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Awo Ali</div>
      <div className="navbar__links">
        <div className="navbar__links-styling">Home</div>
        <div className="navbar__links-styling">About</div>
        <div className="navbar__links-styling">Projects</div>
        <button className="navbar__contact">Get in Touch</button>
      </div>
    </div>
  );
};

export default Navbar;
