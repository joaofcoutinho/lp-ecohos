"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  label?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CtaButton({
  label = "QUERO FAZER PARTE DESSE MOVIMENTO",
  href = "#contato",
  size = "md",
  className = "",
}: CtaButtonProps) {
  const sizes = {
    sm: "text-[11px] px-6 py-3",
    md: "text-[12px] px-8 py-4",
    lg: "text-[13px] px-10 py-5",
  };

  return (
    <motion.a
      href={href}
      className={`btn-cta gap-2 ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
      <ArrowRight size={14} strokeWidth={2.5} />
    </motion.a>
  );
}
