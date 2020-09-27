import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const NavBar = () => {
  return (
    <header className="NavBar">
      <Link to="/">
        <h1 className="logo">
          <img src={logo} alt="ntures" />
        </h1>
      </Link>
      <nav className="nav">
        <ul className="list">
          <li className="item active">Heaven Rider</li>
          <li className="item">HR Amaze</li>
          <li className="item">HR Mobilio</li>
          <li className="item">HR Classic</li>
          <li className="item">HR Sedan</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
