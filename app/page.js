"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { itemAbout } from "@/data/ItemData/ItemsData";
import { animationAbout, containerAbout } from "@/data/animations/animations";

function AboutPage() {
  return (
    <div className="flex items-center content-center justify-center ">
      <div>
        <p className="pt-1 pb-5 ">
          As a Full Stack Dbveloper and IT enthusiast, I do projects on{" "}
          <b>React</b>, <b>JavaScript</b> ,<b>Next</b>, <b>Java</b> and{" "}
          <b>Springboot</b> in accordance with my teammates to produce the best
          output, which gives me great joy!
        </p>
        <motion.ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 bt-5   items-stretch   "
          variants={containerAbout}
          initial="hidden"
          animate="visible"
        >
          {itemAbout.map((skill, index) => (
            <motion.li
              key={index}
              className="border-4 bg-blue-100 rounded-lg py-5 dark:bg-gray-400 "
              variants={animationAbout}
            >
              <SkillCard item={skill} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default AboutPage;
