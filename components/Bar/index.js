"use client";
import React from "react";
import { motion } from "framer-motion";

function Bar({ value }) {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: value.skor,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className=" flex my-2 text-white bg-gray-200 rounded-full ">
      <motion.div
        className="flex w-full items-center px-4 py-1 rounded-full gap-2  bg-gradient-to-r from-indigo-600 to-sky-300"
        style={{ width: "50px" }}
        variants={variants}
        animate="animate"
        initial="initial"
      >
        <div>{value.icon}</div>
        {value.name}
      </motion.div>
    </div>
  );
}

export default Bar;
