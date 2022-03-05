import { publicRequest } from "../../reportMethods";
import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_START, GETAUTH_USER_SUCCESS, LOGOUT } from "../consts/index";
import { GETAUTH_USER_START, GETAUTH_USER_FAIL } from './../consts/index';

//SignIn user


export const signin = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN_START,
  });
  try {
    let { data } = await publicRequest.post("/auth/login", user);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data, //email or username and password
    });
  } catch (error) {
    console.dir(error);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


//SignUp User
export const signup = (user) => async (dispatch) => {
  try {
    dispatch({
          type: REGISTER_START,
         });
      
      let { data } = await publicRequest.post("/auth/register",  user);
      localStorage.setItem("token",data.token)
      dispatch(
          {
              type: REGISTER_SUCCESS,
              payload: data //User
          }
      )
  } catch (error) {
console.log(error)

      dispatch({
          type:REGISTER_FAIL,
         
      })
  
  }
  }


//LOGOUT user
export const logout = () => async(dispatch) =>{
   
  
  dispatch({
      type: LOGOUT,
   
  })
  
  
}
  //Get Authorized User
export const getAuthUser = () => async(dispatch) =>{
  // dispatch({
  //     type:GETAUTH_USER_START,
  // })
  const config = {
      headers: {
          Authorization:localStorage.getItem("token")
      },
  }
  try {
      const {data} = await publicRequest.get("/auth/me", config)
 dispatch({
     type: GETAUTH_USER_SUCCESS,
     payload: data
 })
 console.log(data)
 
  } catch (error) {
      dispatch({
          type: GETAUTH_USER_FAIL
      })
  }
}