import React from "react";
import "./header.css";
import logo from "../../images/header_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="headerItems">
        <img className="logo" src={logo} alt="" />
        <h1 className="text">ePR ticketing tool</h1>
      </div>
      <div className="headerItems">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
export default Header;
