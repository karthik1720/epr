import React from "react";
import "./list.css";
function List(props) {
  return (
    <div className="listContainer">
      <div className="list">
        <h2>{props.queueno}</h2>
        <h2>{props.dept} </h2>
        <h2>{props.lpar}</h2>
        <h2>{props.env}</h2>
        <h2>{props.requestor}</h2>
        <h2>{props.tor}</h2>
        <h2>{props.wip}</h2>
        <h2>{props.des}</h2>
        <h2>{props.assignedTo}</h2>
        <h2>{props.submittedOn}</h2>
      </div>
    </div>
  );
}

export default List;
