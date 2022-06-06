import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, loginAction } from "../Redux/action";


export const Login = () => {
  //   const [user, setuser] = useState("");
  const user = useSelector((state) => state.data.user);
//   console.log("user", user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
      dispatch(loggedIn({
          username,
          password
      }));
  }
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="enter username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};
