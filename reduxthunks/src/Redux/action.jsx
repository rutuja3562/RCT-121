import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const loginAction = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const signInAction = (data) => {
  return {
    type: "SIGNUP_SUCCESS",
    payload: data,
  };
};

export const signedup =
  ({ name, email, password, username, mobile, description }) =>
  (dispatch) => {
    return axios({
      method: "POST",
      url: "https://masai-api-mocker.herokuapp.com/auth/register",
      //   url: "https://reqres.in/api/login",
      // url: "https://masai-api-mocker.herokuapp.com/auth/register"
      data: {
        name,
        email,
        password,
        username,
        mobile,
        description,
      },
    })
      .then((res) => {
        console.log("hili");
        console.log("res", res.data);
        const actionSignin = signInAction(res);
        dispatch(actionSignin);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

export const loggedIn =
  ({ username, password }) =>
  (dispatch) => {
    
    return axios({
      method: "POST",
      url: "https://masai-api-mocker.herokuapp.com/auth/login",
      //   url: "https://reqres.in/api/login",
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        console.log("hili");
        console.log("res", res.data.token);
        const actionLogin = loginAction(res.data.token);
        dispatch(actionLogin);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };


  