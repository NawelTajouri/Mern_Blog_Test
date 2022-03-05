import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Actions/authActions";

import { useNavigate } from 'react-router-dom';

const Register = ({history}) => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
    navigate("/dashboard")
  
  };

  return (
    <div className="Login_Container">
      <div className="Login_Wrapper">
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            value={formData.FirstName}
            name="FirstName"
            type="text"
            placeholder="FirstName"
          />
          <input
            onChange={handleChange}
            value={formData.LastName}
            name="LastName"
            type="text"
            placeholder="LastName"
          />
          <input
            onChange={handleChange}
            value={formData.username}
            name="username"
            type="text"
            placeholder="username"
          />
          <input
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder="email"
          />
          <input
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">SIGN UP</button>
          <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href="#">LOGIN TO YOUR ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
