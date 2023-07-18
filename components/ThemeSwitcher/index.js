"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const ThemeSwitcher = () => {
 
  const { theme, setTheme } = useTheme();




  return (
    <div className="flex flex-row-reverse ">
      <div
        className="px-6 p-2  lg:px-14  gap-2"
       
      >
        {theme === "dark" ? (
          <button className="flex  gap-1   hover:text-white "  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Color Mode
            <CiDark size={25} />
          </button>
        ) : (
          <button className="flex  gap-1 text-white hover:text-black"  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Color Mode
            <MdOutlineLightMode size={25} className="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
