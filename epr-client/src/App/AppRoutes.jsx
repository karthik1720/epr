import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import VcForm from "../pages/version-control/form/VcForm";
import VcView from "../pages/version-control/view/Vc.jsx";
import VersionControl from "../pages/version-control/VersionControl";
function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/vc" element={<VersionControl></VersionControl>}></Route>
      <Route path="/vc/form" element={<VcForm></VcForm>}></Route>
      <Route path="/vc/view" element={<VcView></VcView>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
  );
}

export default PageRoutes;
