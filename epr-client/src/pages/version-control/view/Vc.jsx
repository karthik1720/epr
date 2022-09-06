import axios from "axios";
import React from "react";
import AppTop from "../../../components/AppTop";
import List from "../../../components/list/List";
import Err from "./Error.jsx";
import { useEffect } from "react";
import { useState } from "react";
import AppBottom from "../../../components/AppBottom";

function Vc() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios

      .get("/api/vcview")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          handleError(error.response.status);
        }
      });
  }, [1]);

  const handleError = (err) => {
    console.log(err);
  };

  return (
    <div>
      <AppTop></AppTop>
      {data.map((data, index) => (
        <List
          queueno={index}
          dept={data.dept}
          lpar={data.lpar}
          env={data.env}
          requestor={data.requestor}
          tor={data.tor}
          wip="wip"
          des={data.des}
          assignedTo="None"
          submittedOn="random date"
        ></List>
      ))}
      <AppBottom></AppBottom>
    </div>
  );
}

export default Vc;
