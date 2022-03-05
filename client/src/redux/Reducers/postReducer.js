// import {CREATE_POST_SUCCESS, DeletePostsLogout, DELETE_POST, GET_POST_SUCCESS, LIKE_POST} from '../const/index'
import {
  GETPOSTS_FAIL,
  GETPOSTS_START,
  GETPOSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_START,
  LIKE_POST_FAIL,
  LIKE_POST_START,
  LIKE_POST_SUCCESS,
  MAKE_COMMENT_START,
  MAKE_COMMENT_SUCCESS,
  UNLIKE_POST_SUCCESS,
} from "../consts";
// import { GET_ALL_POSTS_SUCCESS, UNLIKE_POST, MAKE_COMMENT } from './../const/index';
import { GET_POST_SUCCESS } from "./../consts/index";

const initialState = {
  post: [],
  allposts: [],
  isPosts: false,
  postload: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_POST_SUCCESS:
      return {
        ...state,
        post: payload.thispost,
      };
    case GET_POST_START:
      return {
        ...state,
        postload: true,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        isPosts: false,
      };

    case GETPOSTS_START:
      return {
        ...state,
        postload: true,
      };
    case GETPOSTS_SUCCESS:
      return {
        ...state,
        allposts: payload,
        isPosts: true,
      };
    case GETPOSTS_FAIL:
      return {
        ...state,
        isPosts: false,
      };
    //  case DeletePostsLogout:
    //    return {

    //       ...state,
    //       post: null,

    //    }
    case LIKE_POST_START:
      case MAKE_COMMENT_START:
      return {
        ...state,
        postload: true,
      };
    case LIKE_POST_FAIL:
      return {
        ...state,
        isPosts: false,
      };
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        post: state.post.map((item) => {
          if (item._id === payload._id) {
            return payload;
          } else {
            return item;
          }
        }),
      };

    case UNLIKE_POST_SUCCESS:
      return {
        ...state,
        post: state.post.map((item) => {
          if (item._id === payload._id) {
            return payload;
          } else {
            return item;
          }
        }),
      };
      

    case MAKE_COMMENT_SUCCESS:
      return {
        ...state,
        post:state.post.map(item=>{
          if(item._id === payload._id) {
            return payload

          }else{ return item}
      })}

      // case DELETE_POST:
      // return {
      //   ...state,
      //   post:state.post.filter(item=>{
      //     if(item._id !== payload._id) {
      //       return payload

      //     }else{ return item}
      // })}

    default:
      return state;
  }
};
