import React, { useReducer, useState } from "react";
export const AuthContext = React.createContext();
const initState = {
  isAuth: false,
  token: null,
};
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "Login_success": {
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    }
    case "Logout_success": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
