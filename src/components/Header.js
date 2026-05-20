import React from "react";
import { logoUrl } from "../utils/MockData";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <img
        src={logoUrl} alt="Logo"
        className="logo"
      />
      <ul className="nav">
        <li className="nav-items"><Link to="/">Home</Link></li>
        <li className="nav-items"><Link to="/about">About</Link></li>
        <li className="nav-items"><Link to="/offers">Offers</Link></li>
        <li className="nav-items"><Link to="/help">Help</Link></li>
        <li className="nav-items"><Link to="/signin">Sign in</Link></li>
        <li className="nav-items"><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  );
};

export default Header;