import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START, REGISTER_FAIL, REGISTER_SUCCESS, GETAUTH_USER_SUCCESS, LOGOUT } from "../consts";
import { GETAUTH_USER_START, GETAUTH_USER_FAIL } from './../consts/index';



const initialState = {
    user: null,
    isFetching: false,
    error: false,
    isAuth: false,
  };

  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_START:
        case LOGIN_START:
          case GETAUTH_USER_START:
            
        return {
          ...state,
          isFetching: true,
        };
  
      case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        return {
          ...state,
          user: payload.user,
          isFetching: false,
          isAuth: true,
        };
        case GETAUTH_USER_SUCCESS:     
          return {
            ...state,
            user: payload.user,
            isFetching: false,
            isAuth: true,
          };
      case REGISTER_FAIL:
        case LOGIN_FAIL:
          case GETAUTH_USER_FAIL:
        return {
          ...state,
          isFetching: false,
          error: true,
          isAuth: false,

        };

        case LOGOUT:
          localStorage.removeItem('token')
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          user: null,
          // token: null,
        };
      default:
        return state;
    }
  };