import Axios from "axios";
// import { }

export const login = (FormData) => {
  return async dispatch => {

    let response;
    try {
      dispatch(LOGIN_REQUEST())
      response = await Axios.post("http://localhost:9000/auth/login", FormData);

      dispatch(LOGIN_SUCCESS(response.data.user));
    } catch (e) {
      // login failure
      console.log(e.response)
      dispatch(LOGIN_FAILURE(e.response.data.message));
      console.log("log in failed")
    }
  }
}

export const LOGIN_REQUEST = () => {
  return {
    type: "LOGIN_REQUEST"
  }
}

export const LOGIN_SUCCESS = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user
  }
}

export const LOGIN_FAILURE = (error) => {
  return {
    type: "LOGIN_FAILURE",
    error
  }
}

export const logout = {
  type: "logout",
}


