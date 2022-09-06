import React from "react";
function FormData(props) {
  const arr = props.value;
  return (
    <select name="dept" onChange={props.handleChange}>
      {arr.map((val) => (
        <option>{val}</option>
      ))}
    </select>
  );
}

export default FormData;
