"use client";
import useTheme from "@/hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn btn-primary s">
      {theme === "luxury" ? "Switch to Cyberpunk" : "Switch to Luxury Mode"}
    </button>
  );
};

export default ThemeSwitcher;
