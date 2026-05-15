import React from "react";
import { logoUrl } from "../utils/MockData";

const Header = () => {
  return (
    <div className="header">
      <img
        src={logoUrl} alt="Logo"
        className="logo"
      />
      <ul className="nav">
        <li className="nav-items">Home</li>
        <li className="nav-items">Search</li>
        <li className="nav-items">Offers</li>
        <li className="nav-items">Help</li>
        <li className="nav-items">Sign in</li>
        <li className="nav-items">Cart</li>
      </ul>
    </div>
  );
};

export default Header;