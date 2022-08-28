import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VcForm from "./form/VcForm.jsx";
import VcView from "./view/Vc.jsx";
function VersionControl() {
  return (
    <div>
      <Link to="./form">Form</Link>
      <Link to="./view">view</Link>
    </div>
  );
}

export default VersionControl;
