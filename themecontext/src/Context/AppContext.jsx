import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    console.log("theme", theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <AppContext.Provider value={[theme, toggleTheme]}>
      {children}
    </AppContext.Provider>
  );
};
