import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser, logout } from './../redux/Actions/authActions';
import { Link } from 'react-router-dom';

const NavbarLinks = ({ user }) => {
  // console.log(user)
  let token=localStorage.getItem('token');
  // console.log(token);
  const dispatch = useDispatch();
//  const [thisuser, setThisuser] = useState(["username"])
//  useEffect(() => {
//   setThisuser(user);

//  }, [dispatch])
//  console.log(thisuser);
if(token){
  console.log(user.username);
} else{
  console.log("failed");
}
const logoutf = () => {
  dispatch(logout());
 
};
  return (
   

  
    <>
      {token? (
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
            <a>Welcome {user.username}</a>
            <Link to="/"><a   onClick={logoutf}>LogOut</a></Link>
            
          </div>
    </div>
         


        </div>
      </div>
      ): <h1>fail</h1>}

    </>


  );
};

export default NavbarLinks;
