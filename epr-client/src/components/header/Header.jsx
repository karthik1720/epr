import React from "react";
import "./header.css";
import logo from "../../images/header_logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="headerItems">
        <img className="logo" src={logo} alt="" />
        <h1 className="text">ePR ticketing tool</h1>
      </div>
      <div className="headerItems">
        <button>LogIn</button>
      </div>
    </div>
  );
};
export default Header;
