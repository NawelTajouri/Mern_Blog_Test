import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import NavbarLinks from '../Components/NavLinks';
import Posts from './../Components/Posts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from './../redux/Actions/authActions';
import { useSelector } from 'react-redux';
import { getallposts, getPost } from './../redux/Actions/postActions';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { postid } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const isFetching = useSelector((state) => state.authReducer.isFetching);
  
  console.log(user);


  if (isFetching){
    <h1>Loading...</h1>
  }
  
  return (
    <>
    {user ? (
    <div className='Dash-Container'>
        <div className='Dash-Wrapper'>
            <NavbarLinks user={user}/>
            <Posts />
            <Footer/>
        </div>
    </div>) : <h1>load</h1>
}
    </>
  )
}

export default Dashboard