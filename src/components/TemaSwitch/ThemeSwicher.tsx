import React from "react";
import { useTheme } from "../../context/ThemeContext";
import GoinDark from "./assets/GoInLight.png";
import GoingLigh2 from './assets/White(2).png'

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="block rounded text-white">
       <img src={theme === "light" ? GoingLigh2 : GoinDark} alt={theme === "light" ?  "Светлая" : "Темная"} />
    </button>
  );
};

export default ThemeSwitcher;

