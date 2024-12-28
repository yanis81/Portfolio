"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/aavatar";
import { motion } from "framer-motion";


const people = [
  {
    id: 1,
    name: "Yanis Lartigue",
    designation: "Développeur Web",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <motion.div 
    className="flex flex-row bg-transparent "
    initial={{
      scale:"1",
    }}
    whileHover={{ scale: 1.3,}}
    >
      <AnimatedTooltip items={people} />
    </motion.div>
  );
}
