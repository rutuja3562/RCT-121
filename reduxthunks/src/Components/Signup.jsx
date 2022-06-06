import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signedup } from "../Redux/action";

export const Signup = () => {
  //   const [user, setuser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.data.user);
//   console.log("user", user);
  const dispatch = useDispatch();

  const signup = () => {
    dispatch(
      signedup({
        name,
        email,
        password,
        username,
        mobile,
        description,
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
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
        type="number"
        name="number"
        value={mobile}
        placeholder="enter mobile"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <input
        type="text"
        name="description"
        value={description}
        placeholder="enter description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={signup}>SignUp</button>
    </div>
  );
};
