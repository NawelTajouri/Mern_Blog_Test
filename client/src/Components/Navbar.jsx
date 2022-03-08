import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  return (
    <>
      <div className="Nav_Container">
        <div className="Nav_Wrapper">
          <div className="Top">
          
            <span>My Blog</span>
          
          </div>
          <div className="Buttom">
          <div className="left">
            <a>Posts</a>
            <a>Categories</a>
          </div>
          <div className="right">
            <Link to="/login">
              <a>SignIn</a>
            </Link>
            <Link to="/register">
              <a>SignUp</a>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
