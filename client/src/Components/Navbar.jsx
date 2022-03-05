import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const token = localStorage.getItem("token");
  return (
    <>
      <div className="Nav_Container">
        <div className="Nav_Wrapper">
          <div className="left">
            <span>Posts</span>
          </div>
          <div className="center">
            <span>My Blog</span>
          </div>
          <div className="right">
            {/* {token ? <button>welcome</button>:
          <button>SignIn</button>}
          {token ? <button>LogOut</button>:
          <button>SignUp</button>} */}
          <Link to= "/login"><button>SignIn</button></Link>
          <Link to= "/register"><button>SignUp</button></Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
