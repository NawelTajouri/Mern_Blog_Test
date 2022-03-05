import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";


import { signin } from "../redux/Actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    dispatch(signin({ email, password }));
    navigate("/dashboard");
   
  };
  return (
    <div className="Login_Container">
      <div className="Login_Wrapper">
        <h1>SIGN IN</h1>
        <form onSubmit={handleSubmit}>

          <input
            onChange={(e) => setEmail(e.target.value)}
            // value={formData.email}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            // value={formData.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">LOGIN</button>
          <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href="#">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
