"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeinup,
  routeAnimation,
  stagger,
} from "@/data/animations/animations";
import CertificateCard from "@/components/certificiteCard";
import { itemCertificates } from "@/data/ItemData/ItemsData";
import Head from "next/head";

function Certificates() {
  const [showDetail, setShowDetail] = useState(null);
  return (
    <>
      <Head>
        <title>Certificate | Sefa Demirtaş</title>
      </Head>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ height: "90vh" }}
        className="p-2 overflow-auto"
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-12 gap-4 my-3"
        >
          {itemCertificates.map((certificate, i) => (
            <motion.div
              variants={fadeinup}
              key={i}
              className="col-span-12 p-2 mt-4 bg-blue-100 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-gray-400"
            >
              <CertificateCard
                certificate={certificate}
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

export default Certificates;
