"use client";

import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { motion } from "framer-motion";

export function MacbookScrollgo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1.7, y: 0 }}
        transition={{ duration: 3 }}
      >
        <MacbookScroll
          title={<span></span>}
          src={`/presentationImage/Bienven.png`}
        />
      </motion.div>
    </div>
  );
}
