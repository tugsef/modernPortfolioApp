"use client";
import React from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

import Image from "next/image";
import { fadeinup, stagger } from "@/data/animations/animations";

function ProjectCard({ project, showDetail, setShowDetail }) {
  return (
    <div className="cursor-pointer ">
      <div onClick={() => setShowDetail(project.id)}>
        <Image
          src={project.imageUrl}
          alt={project.name}
          className="font-medium rounded-lg object-contain"
          layout="responsive"
          height="150"
          width="300"
        />

        <p className="my-2 font-[550] text-center">{project.name}</p>
      </div>

      {showDetail === project.id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-slate-600 bg-blue-100  rounded-lg md:p-10 md:grid-cols-2 gap-x-12 ">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="border-2 "
          >
            <motion.div variants={fadeinup}>
              <Image
                src={project.imageUrl}
                alt={project.name}
                layout="responsive"
                height="150"
                width="300"
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={fadeinup}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={project.github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg  bg-slate-500 text-white  rounded-lg"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={project.deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg text-white rounded-lg bg-emerald-500 rounded-lg"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeinup}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {project.name}
            </motion.h2>
            <motion.h3 variants={fadeinup} className="mb-3 font-medium">
              {project.description}
            </motion.h3>

            <motion.div
              variants={fadeinup}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {project.key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-teal-800 rounded-md text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 transition duration-300 bg-gray-200 rounded-full top-3 right-3 hover:scale-120 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
