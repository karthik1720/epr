import React from "react";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginItems">
        <label htmlFor="" className="loginLabel">
          Username
        </label>
        <label htmlFor="" className="loginLabel">
          Email
        </label>
        <label htmlFor="" className="loginLabel">
          Password
        </label>
      </div>
      <div className="loginItems">
        <input type="text" className="loginInput" />
        <input type="email" className="loginInput" />
        <input type="password" className="loginInput" />
      </div>
    </div>
  );
}

export default Login;
