import React from "react";

import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getallposts, getPost } from "./../redux/Actions/postActions";
import { getAuthUser } from "../redux/Actions/authActions";
import './Post.css';

// const mystyle = {
//   padding: "50px",
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "space-between",
// };

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const postload = useSelector((state) => state.postReducer.postload);
  const token = localStorage.getItem("token");
  const allposts = useSelector((state) => state.postReducer.allposts);

  if (postload){
    <h1>Loading...</h1>
  }
  useEffect(() => {
    dispatch(getallposts());
  }, [allposts,dispatch]);
  console.log(allposts);

  return (
    <>
      {allposts  ? (
        <div  className="allposts">
          {allposts.map((item) => (
            <Post item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Posts;
