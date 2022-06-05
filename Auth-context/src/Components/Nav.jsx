import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContex";
import { Navigate, useNavigate } from "react-router";
export const Nav = () => {
  const [state, dispatch] = useContext(AuthContext);
  const logout = () => {
    console.log(state.isAuth);
    if (state.isAuth) {
      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: null,
      });
    }
    return <Navigate to="/login" />;
  };
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
