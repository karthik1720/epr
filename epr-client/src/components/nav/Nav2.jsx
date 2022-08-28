import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";
function Nav2() {
  let navigate = useNavigate();
  return (
    <div>
      <nav className="navContainer">
        <a href="/" className="navItems">
          Home
        </a>
        <a href="/vc" className="navItems">
          Version Control
        </a>
        <a href="/dp" className="navItems">
          Deployment
        </a>
        <a href="/gc" className="navItems">
          Global Common
        </a>
        <a href="/report" className="navItems">
          Report
        </a>
      </nav>
    </div>
  );
}
export default Nav2;
