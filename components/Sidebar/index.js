"use client";
import React from "react";
import BsFileEarmarkPersonFill, {
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Sidebar() {
  return (
    <div className="mt-10 text-center ">
      <img
        className="w-24 h-24 my-4 rounded-full mx-auto"
        src="https://res.cloudinary.com/dvfdwlbuy/image/upload/v1684421007/jykpmcyutpfkmfxiz94x.jpg"
        width="384"
        height="512"
      />
      <div className="mx-5 my-6 text-3xl font-extrabold ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-300 dark:text-white">
          Sefa Demirtaş{" "}
        </span>
      </div>
      <div className="mx-6 my-6 py-1 px-1 bg-white  rounded-full text-slate-600 border-slate-600 border dark:border-white dark:bg-slate-600">
        <span className="py-1 px-1 text-slate-600 dark:text-white">
          Full Stack Developer
        </span>
      </div>
      <div className="flex  items-center justify-center  gap-1 mx-6 my-6 py-1 px-1 bg-white rounded-full text-slate-600 border-slate-600 border dark:text-white dark:bg-slate-600 dark:border-white">
        <span>
          <BsFillFileEarmarkPersonFill />
        </span>

        <a
          className=" "
          href="/portpolio-app/data/SefaDemirtas.docx"
          download="SefaDemirtas.docx"
        >
          Download my resume
        </a>
      </div>

      <div className="flex justify-around w-3/4 mx-auto my-5 md:w-full ">
        <a
          className="box-decoration-slice bg-gradient-to-r from-blue-600 to-sky-300 text-white px-2 rounded-lg font-serif  py-2 text-xl dark:text-slate-600 dark:box-decoration-slice dark:bg-gradient-to-r dark:from-white"
          href="https://github.com/tugsef"
          aria-label="Github"
          target="_blank"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          className="box-decoration-slice bg-gradient-to-r from-blue-600 to-sky-300 text-white px-2 rounded-lg font-serif  py-2 text-xl dark:text-slate-600 dark:bg-gradient-to-r dark:from-white"
          href="https://twitter.com/SefaDemirtas91"
          aria-label="Twitter"
          target="_blank"
        >
          <AiFillTwitterCircle className="w-8 h-8" />
        </a>
        <a
          className="box-decoration-slice bg-gradient-to-r from-blue-600 to-sky-300 text-white px-2 rounded-lg font-serif  py-2 text-xl dark:text-slate-600 dark:bg-gradient-to-r dark:from-white"
          href="https://www.linkedin.com/in/sefa-demirta%C5%9F-86b473230/"
          aria-label="Linkedin"
          target="_blank"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div className="py-4 mx-4 my-5 bg-white border border-slate-600  dark:bg-slate-600  rounded-xl">
        <div className="flex items-center justify-center space-x-2 font-semibold font-montserrat ">
          <GoLocation />
          <span> Turkey</span>
        </div>
        <p className="my-2 font-medium text-lg md:text-lg ">
          sefa.demirtas91@gmail.com
        </p>
        <p className="my-2 font-semibold font-montserrat">0(507) 498 17 02</p>
      </div>
      <div
        className='box-decoration-slice bg-gradient-to-r from-blue-600 to-sky-300 text-white lg:max-w-xl  text-white px-2 rounded-lg font-serif  py-2 text-xl dark:text-slate-600 dark:bg-gradient-to-r dark:from-white py-4 mx-4 my-5 items-center"
'
      >
        <a href="mailto:sefa.demirtas91@gmail.com">Email Me</a>
      </div>
    </div>
  );
}

export default Sidebar;
