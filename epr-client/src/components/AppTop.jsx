import React from "react";
import Header from "./header/Header";
import ListTitle from "./list-title/ListTitle";
import Nav2 from "./nav/Nav2";
import SearchBar from "./searchbar/SearchBar";
import Statusbar from "./statusbar/Statusbar";

export default function AppTop() {
  return (
    <div>
      <Header></Header>
      <Nav2></Nav2>
      <SearchBar></SearchBar>
      <Statusbar></Statusbar>
      <ListTitle></ListTitle>
    </div>
  );
}
