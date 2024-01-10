import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const action = {
      type: "CHANGE_USERNAME",
      payload: e.target.value,
    };
    dispatch(action);
  };
  const handlePasswordChange = (e) => {
    const action = {
      type: "CHANGE_PASSWORD",
      payload: e.target.value,
    };
    dispatch(action);
  };
  const handleLogin = () => {
    const action = {
      type: "LOGIN",
    };
    dispatch(action);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "admin") {
      handleLogin();
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="container w-50">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            className="form-control w-50"
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleUsernameChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control w-50"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
