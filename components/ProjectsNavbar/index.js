import React from "react";
export const NavItem = ({ category, handlerFilterCategory, active }) => {
  let className =
    "font-semibold   py-2 px-2 hover:bg-sky-500 hover:rounded-lg hover:text-white";
  if (active === category)
    className += "text-white bg-sky-500 rounded-lg dark:bg-white";

  return (
    <li className={className} onClick={() => handlerFilterCategory(category)}>
      {category}
    </li>
  );
};

function ProjectsNavbar({ handlerFilterCategory, active }) {
  return (
    <div>
      <div className="flex px-1 lg:px-3 lg:pt-3 pb-1 space-x-3  overflow-x-auto  list-none mt-7 ms-3 text-gray-400">
        <NavItem
          category="all"
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <NavItem
          category="react"
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <NavItem
          category="java"
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <NavItem
          category="springboot"
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <NavItem
          category="nextjs"
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
      </div>
    </div>
  );
}

export default ProjectsNavbar;
