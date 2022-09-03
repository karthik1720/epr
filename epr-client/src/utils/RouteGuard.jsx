import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    let flag = false;
    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          hasJWT() ? <Component {...props} /> : <Navigate to="/"></Navigate>
        }
      />
    </Routes>
  );
};

export default RouteGuard;
