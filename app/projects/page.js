"use client";
import { useState } from "react";

import { projects as projectsData } from "@/data/ItemData/ItemsData";
import { motion } from "framer-motion";

import ProjectsNavbar from "@/components/ProjectsNavbar";
import {
  fadeinup,
  routeAnimation,
  stagger,
} from "@/data/animations/animations";
import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState(null);

  const handleShowDetail = ()=>setShowDetail("true");


  const handlerFilterCategory = (category = "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <>
      <Head>
        <title>Projects | Sefa Demirtaş</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-5 py-2 overflow-y-scroll relative"
        style={{ height: "70vh" }}
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-12 gap-4 my-3"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeinup}
              key={project.name}
              className="p-2 mt-4 bg-blue-100  rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 dark:bg-gray-400"
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
    </>
  );
}

export default ProjectsPage;
