"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("retro");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "cyberpunk" ? "luxury" : "cyberpunk"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
