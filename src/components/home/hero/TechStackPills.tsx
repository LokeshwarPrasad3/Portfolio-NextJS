"use client";

import { motion } from "motion/react";

type TechPill = {
  label: string;
  /** Tailwind border class */
  border: string;
  /** Tailwind text-color class */
  text: string;
};

const TECH_STACK: TechPill[] = [
  { label: "React", border: "border-cyan-500/20", text: "text-cyan-400/80" },
  { label: "TypeScript", border: "border-blue-500/20", text: "text-blue-400/80" },
  { label: "Next.js", border: "border-slate-500/20", text: "text-slate-300/80" },
  { label: "Node.js", border: "border-green-500/20", text: "text-green-400/80" },
  { label: "PostgreSQL", border: "border-indigo-500/20", text: "text-indigo-400/80" },
  { label: "Docker", border: "border-sky-500/20", text: "text-sky-400/80" },
  { label: "AWS", border: "border-orange-500/20", text: "text-orange-400/80" },
];

export const TechStackPills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-1.5 lg:justify-start"
    >
      {TECH_STACK.map(({ label, border, text }, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.28 + i * 0.06 }}
          whileHover={{ scale: 1.05, y: -1 }}
          className={[
            "inline-flex items-center gap-1 rounded-full border",
            "bg-white/[0.03] px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide",
            "backdrop-blur-sm transition-colors hover:bg-white/[0.07]",
            border,
            text,
          ].join(" ")}
        >
          <span className="h-1 w-1 rounded-full bg-current opacity-70" />
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
};
