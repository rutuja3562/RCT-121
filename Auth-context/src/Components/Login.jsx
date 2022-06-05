import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContex";

export const Login = () => {
  const [state, dispatch] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState([]);
  const [searchParams,setSearchPArams] = useSearchParams()
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const login = async () => {
  // console.log(email, password);
  // const data = {
  //   email,
  //   password,
  // };
  // let res = await fetch("https://reqres.in/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // let dataaa = await res.json();
  // // console.log("KKK", dataaa);
  // setToken(dataaa.token);
  // handleAuth(true);
  // navigate("/product");
  //  };

  const login = async () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        alert(" login suceess");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.token,
        })
        const redirect = searchParams.get("redirectTo");
        if (redirect) {
          navigate(redirect);
        } else {
          navigate("/product");
        }
      })
      .catch((e) => {
        alert("err");
      });
  };

 
  if(state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <br />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};
