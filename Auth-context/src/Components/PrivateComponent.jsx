import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContex";

export const PrivateComponent = ({ children }) => {
  const [state, dispatch] = useContext(AuthContext);
  // console.log(isAuth)
  if(state.isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
  // console.log(isAuth);
};
