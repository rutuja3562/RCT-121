import axios from "axios";
import { useContext, useReducer } from "react";
import { Navigate, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(AuthContext);
  const loginUser = async () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    })
      .then((res) => {
        alert("login");
        dispatch({
          type: "Login_success",
          payload: res.data.token,
        });
        // const redirect = useSearchParams.get("redirectto");
        // if (state.isAuth) {
        //   console.log("LLLL:",state.isAuth);
        //   navigate("/users");
        // }
        //  else {
        //   navigate("/login");
        // }
      })
      .catch((e) => {
        alert("Error");
      });
  };
  if (state.isAuth) {
    return navigate("/users");
    // return navigate("/");
  }
  return (
    <div>
      <h1>login</h1>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};
