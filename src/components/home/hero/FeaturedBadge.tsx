"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FeaturedBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <div
      className="relative z-50 w-fit"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 pl-4",
          "bg-white/5 backdrop-blur-md transition-all duration-300",
          "hover:bg-white/10"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full p-px">
          <div
            className="mask-linear-gradient absolute inset-0 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-60"
            style={{
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />
        </div>
        <span className="text-lg leading-none">✨</span>
        <span className="text-sm font-medium tracking-wide text-slate-200">
          Try My New Product — Budgetter
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{
              duration: 0.4,
              ease: [0.2, 0.65, 0.3, 0.9], // Smooth, fluid ease-out
            }}
            className="absolute top-full left-0 w-[340px] origin-top-left pt-3 sm:w-[380px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-3xl">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-pink-500/10 via-purple-500/5 to-cyan-500/10 opacity-50" />

              <div className="relative flex flex-col gap-3">
                <h3 className="text-lg leading-tight font-bold text-white">
                  Budgetter — Expense Tracker & Analytics
                </h3>
                <div className="h-0.5 w-12 bg-linear-to-r from-pink-500 to-purple-500 opacity-80" />
                <p className="text-sm leading-relaxed text-slate-300/90">
                  Track every rupee, analyze spending patterns, and Spend Smarter Every Day.
                </p>
                <Link
                  href="https://mybudgetter.netlify.app"
                  target="_blank"
                  className="group/cta mt-2 flex w-fit items-center gap-2 rounded-lg py-1 text-sm font-semibold text-pink-400 transition-colors hover:text-pink-300"
                >
                  → Explore Product
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
