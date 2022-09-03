import React, { useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser((prev) => {
      if (event.target.name === "username")
        return {
          username: event.target.value,
          email: prev.email,
          password: prev.password,
        };
      if (event.target.name === "email")
        return {
          email: event.target.value,
          username: prev.username,
          password: prev.password,
        };
      if (event.target.name === "password")
        return {
          password: event.target.value,
          email: prev.email,
          username: prev.username,
        };
    });
  };

  const handleSubmit = async () => {
    const loginPayload = {
      name: user.username,
      password: user.password,
    };

    await axios
      .post("http://localhost:8080/api/login", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        console.log(token);

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginContainer">
      <div className="loginItems">
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          className="loginInput"
        />
      </div>
      <div className="loginItems">
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          placeholder="email"
          className="loginInput"
        />
      </div>
      <div className="loginItems">
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          className="loginInput"
        />
      </div>
      <div className="loginItems">
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
