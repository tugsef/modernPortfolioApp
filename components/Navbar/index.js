"use client";
import { itemNavbar } from "@/data/ItemData/ItemsData";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <div className="flex items-center justify-between px-1 py-2 my-1 lg:px-5 lg:py-3 lg:my-2 ">
      <span className="text-xl xs:text-lg font-bold border-b-4 border-sky-600  md:text-2xl text-sky-600 dark:text-white dark:border-white">
        {active}
      </span>
      <nav className="flex lg:gap-3 text-sky-600">
        {itemNavbar.map((item) => (
          <Link
            key={item.name}
            className="px-1 py-1 hover:bg-sky-600  hover:rounded-lg hover:py-1 hover:px-1 hover:text-white dark:text-white"
            onClick={() => setActive(item.name)}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
