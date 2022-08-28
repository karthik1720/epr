import React from "react";
import "./statusbar.css";
function Statusbar() {
  return (
    <div className="statusContainer">
      <div className="statusItem">
        <label htmlFor="">Status</label>
        <select name="" id="">
          <option value="">Option1</option>
          <option value="">Option2</option>
          <option value="">Option3</option>
        </select>
      </div>
      <div className="statusItem">
        <label htmlFor="">Type of request</label>
        <select name="" id="">
          <option value="">Option1</option>
          <option value="">Option2</option>
          <option value="">Option3</option>
        </select>
      </div>
      <div className="statusItem">
        <label htmlFor="">Country</label>
        <select name="" id="">
          <option value="">Option1</option>
          <option value="">Option2</option>
          <option value="">Option3</option>
        </select>
      </div>
    </div>
  );
}

export default Statusbar;
