import React, { useEffect, useState } from "react";
import "./Post.css";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import {
  getPost,
  likePost,
  makeComment,
  unlikePost,
} from "../redux/Actions/postActions";
import { useSelector } from "react-redux";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";
// import { useLocation, useParams } from "react-router-dom";
import Commentaire from "./Commentaire";

const Post = ({ item }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  console.log(token);

  return (
    <>
      {user ? (
        <div className="Post-Container">
          <div className="Post-Wrapper">
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div className="image">
              <img src={item.img} />
            </div>
            <div className="description">
              <p>{item.desc}</p>
            </div>
            <div className="Likes">
              <div className="like">
                <LikeButton item={item} />
              </div>

              <h5>{item.likes.length} Likes</h5>
             
            </div>
            <hr  style={{
    
width: "100%"
}}/>
            <div className="comments">
              <Commentaire item={item} />
            </div>

            <div></div>
          </div>
        </div>
      ) : (
        "load"
      )}
    </>
  );
};

export default Post;
