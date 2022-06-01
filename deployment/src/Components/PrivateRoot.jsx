import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoot = ({ children }) => {
  const [state] = useContext(AuthContext);
  console.log(state);
  if (state.isAuth) {
    return children;
  }

  return <Navigate to={"/login"} />;
};
