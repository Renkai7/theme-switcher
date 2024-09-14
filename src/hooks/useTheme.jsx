"use client";

import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
