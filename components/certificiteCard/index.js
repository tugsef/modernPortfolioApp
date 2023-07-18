"use client";
import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillProject } from "react-icons/ai";
import { fadeinup, stagger } from "@/data/animations/animations";

function CertificateCard({ certificate, showDetail, setShowDetail }) {
  return (
    <div className="cursor-pointer">
      <div onClick={() => setShowDetail(certificate.id)}>
        <Image
          src={certificate.imageUrl}
          alt={certificate.name}
          className="font-medium rounded-lg"
          layout="responsive"
          height="150"
          width="300"
        />
        <p className="my-2 font-[550] text-center">{certificate.name}</p>
      </div>

      {showDetail === certificate.id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-slate-600 bg-blue-200 rounded-lg bg-opacity-0.5 lg:px-48 lg:py-20">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeinup}>
              <Image
                src={certificate.imageUrl}
                alt={certificate.name}
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
                href={certificate.url}
                target="_blank"
                className="flex text-white items-center px-4 py-2 space-x-3 text-lg rounded-lg bg-emerald-500"
              >
                <AiFillProject /> <span>Verify</span>
              </a>
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 transition duration-300 rounded-full top-3 right-3 hover:scale-120 focus:outline-none "
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}

export default CertificateCard;
