import React from "react";
import "./vcForm.css";
function VcForm() {
  return (
    <div className="vcContainer">
      <form className="vcForm">
        <div className="vcFormItem">
          <label className="vcFormLabel">Department</label>
          <input type="text"></input>
        </div>
        <div className="vcFormItem">
          <label className="vcFormLabel">LPAR</label>
          <input type="text" />
        </div>
        <div className="vcFormItem">
          <label className="vcFormLabel" htmlFor="">
            Env
          </label>
          <input type="text" />
        </div>
        <div className="vcFormItem">
          {" "}
          <label className="vcFormLabel" htmlFor="">
            Requestor
          </label>
          <input type="text" />
        </div>
        <div className="vcFormItem">
          <label className="vcFormLabel" htmlFor="">
            Type of Request
          </label>
          <input type="text" />
        </div>
        <div className="vcFormItem">
          <label className="vcFormLabel" htmlFor="">
            Description
          </label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default VcForm;
