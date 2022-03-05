import { publicRequest } from "../../reportMethods";
import {
  GETPOSTS_FAIL,
  GETPOSTS_START,
  GETPOSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  LIKE_POST_START,
  LIKE_POST_SUCCESS,
  MAKE_COMMENT_START,
  MAKE_COMMENT_SUCCESS,
  UNLIKE_POST_SUCCESS,
} from "../consts";
import { LIKE_POST_FAIL } from "./../consts/index";

// Get all posts of all users
export const getallposts = () => async (dispatch) => {

  try {
    dispatch({
      type: GETPOSTS_START,
    });
    const { data } = await publicRequest.get("/post");
    console.log(data);

    dispatch({
      type: GETPOSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GETPOSTS_FAIL,
    });
  }
};

export const getPost = (postid) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    // dispatch({
    //   type: GET_POST_START,
    // });
    const { data } = await publicRequest.get(
      "/post/thispost/" + postid,
      config
    );
    console.log(data);

    dispatch({
      type: GET_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_POST_FAIL,
    });
  }
};
// Like a post
export const likePost = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    dispatch({
      type: LIKE_POST_START,
    });
    const { data } = await publicRequest.put(
      "/post/thispost/like",
      {
        postId: id,
      },
      config
    );
    console.log(id);
    dispatch({ type: LIKE_POST_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    console.dir(error);
    dispatch({
      type: LIKE_POST_FAIL,
    });
  }
};
// unlike a post
export const unlikePost = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await publicRequest.put(
      "/post/thispost/unlike",
      {
        postId: id,
      },
      config
    );
    dispatch({ type: UNLIKE_POST_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// Comment a post
export const makeComment =(newtext,id) => async (dispatch) => {
  const config = {
      headers: {
          Authorization:localStorage.getItem("token")
      },     
  }
  try {
    dispatch({
      type: MAKE_COMMENT_START,
    });
      const {data}=await publicRequest.put("/post/thispost/comment",{
        text:newtext, postId: id
      },config)
      console.log(data)
      dispatch({ type: MAKE_COMMENT_SUCCESS, payload:data })
  } catch (error) {
      console.log(error)
  }
}