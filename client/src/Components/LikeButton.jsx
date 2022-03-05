import { pink, red } from "@material-ui/core/colors";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { likePost, unlikePost } from "../redux/Actions/postActions";

const LikeButton = ({ item }) => {
  //item : rahi post
  console.log(item);
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(item._id));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(item._id));
    setLiked(false);
  };

  return (
    <>
      {user ? (
        <div className="like-container">
          {item.likes.includes(user._id) || liked ? (
            <Favorite color="primary" onClick={unlike} />
          ) : (
            <Favorite color="success" onClick={like} />
          )}
        </div>
      ) : (
        <h6>hello</h6>
      )}
    </>
  );
};

export default LikeButton;
