import React, { useContext, useState } from "react";
import store from "./store";

export const ReduxContext = React.createContext();
export const ReduxProvider = ({ children }) => {
    const [count,setCount]=useState(0)
  store.subscribe(() => {
    setCount((prev) => prev + 1);
  });
  return (
    <ReduxContext.Provider
      value={[store.getState.bind(store), store.dispatch.bind(store)]}
    >
      {children}
    </ReduxContext.Provider>
  );
};
