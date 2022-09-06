import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vcForm.css";
import FormData from "./FormData.jsx";
function VcForm() {
  let navigate = useNavigate();
  console.log("form");
  const [data, setData] = useState({
    dept: "",
    lpar: "",
    env: "",
    requestor: "",
    tor: "",
    des: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submit = async () => {
    const payload = {
      dept: data.dept,
      lpar: data.lpar,
      env: data.env,
      requestor: data.requestor,
      tor: data.tor,
      des: data.des,
    };
    await axios.post("/api/vcform", data).then((response) => {
      console.log("done");
      navigate("./../view");
    });
  };

  const formSelectionData = ["hi", "Hello"];

  return (
    <div className="vcContainer">
      <div className="vcFormItem">
        <FormData
          handleChange={handleChange}
          value={formSelectionData}
        ></FormData>
      </div>
      <div className="vcFormItem">
        <label className="vcFormLabel">Department</label>
        {/* <input
          value={data.dept}
          name="dept"
          onChange={handleChange}
          type="text"
        ></input> */}
      </div>
      <div className="vcFormItem">
        <label className="vcFormLabel">LPAR</label>
        <input
          value={data.lpar}
          name="lpar"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="vcFormItem">
        <label className="vcFormLabel" htmlFor="">
          Env
        </label>
        <input
          value={data.env}
          name="env"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="vcFormItem">
        {" "}
        <label className="vcFormLabel" htmlFor="">
          Requestor
        </label>
        <input
          value={data.requestor}
          name="requestor"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="vcFormItem">
        <label className="vcFormLabel" htmlFor="">
          Type of Request
        </label>
        <input
          value={data.tor}
          name="tor"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="vcFormItem">
        <label className="vcFormLabel" htmlFor="">
          Description
        </label>
        <input
          value={data.des}
          name="des"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="vcFormItem">
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default VcForm;
