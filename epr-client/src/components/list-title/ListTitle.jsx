import React from "react";
import "./listTitle.css";

function ListTitle() {
  return (
    <div className="listTitleContainer">
      <div className="listTitle">
        <h2>Queue No</h2>
        <h2>Dept</h2>
        <h2>LPAR</h2>
        <h2>Env</h2>
        <h2>Requestor</h2>
        <h2>Type of request</h2>
        <h2>WIP</h2>
        <h2>Reason</h2>
        <h2>Assigned to</h2>
        <h2>Submitted on</h2>
      </div>
    </div>
  );
}

export default ListTitle;
