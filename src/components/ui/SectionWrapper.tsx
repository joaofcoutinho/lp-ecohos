"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gridBg?: boolean;
  dotsBg?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  gridBg = false,
  dotsBg = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative w-full ${gridBg ? "bg-grid" : ""} ${dotsBg ? "bg-dots" : ""} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
