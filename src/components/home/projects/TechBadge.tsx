"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TechBadgeProps {
  name: string;
  className?: string;
  small?: boolean;
}

export const TechBadge = ({ name, className, small = false }: TechBadgeProps) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white",
        small ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        className
      )}
    >
      {name}
    </motion.span>
  );
};
