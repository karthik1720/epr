import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import VcForm from "../pages/version-control/form/VcForm";
import VcView from "../pages/version-control/view/Vc.jsx";
import VersionControl from "../pages/version-control/VersionControl";
import Login from "../pages/auth/Login.jsx";
import RouteGuard from "../utils/RouteGuard.jsx";
function PageRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("token") ? <Home></Home> : <Login></Login>
          }
        ></Route>
        <Route path="/vc" element={<VersionControl></VersionControl>}></Route>
        <Route path="/vc/form" element={<VcForm></VcForm>}></Route>
        <Route path="/vc/view" element={<VcView></VcView>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default PageRoutes;
