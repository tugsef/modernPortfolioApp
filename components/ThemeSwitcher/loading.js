import React from "react";
import { MdOutlineLightMode } from "react-icons/md";

function ThemeLoading() {
  return (
    <button
      className="flex  gap-1 text-white hover:text-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Color Mode
      <MdOutlineLightMode size={25} className="" />
    </button>
  );
}

export default ThemeLoading;
