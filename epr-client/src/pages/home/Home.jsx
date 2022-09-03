import React from "react";
import AppTop from "../../components/AppTop.jsx";
import AppBottom from "../../components/AppBottom.jsx";
const home = () => {
  return (
    <div className="home">
      <AppTop></AppTop>
      This is homepage
      <AppBottom></AppBottom>
    </div>
  );
};

export default home;
