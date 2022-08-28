import React from "react";
import Header from "../components/header/Header";
import ListTitle from "../components/list-title/ListTitle";
import Nav2 from "../components/nav/Nav2";
import SearchBar from "../components/searchbar/SearchBar";
import Statusbar from "../components/statusbar/Statusbar";

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
