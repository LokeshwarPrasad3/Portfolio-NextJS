"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const FeaturedBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative z-50 w-fit"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Subtle inline badge */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex cursor-pointer items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 transition-colors hover:bg-white/[0.08]"
      >
        <span className="text-xs leading-none">✦</span>
        <span className="text-muted-foreground text-xs font-medium tracking-wide">
          Try My New Product — Budgetter
        </span>
        <ExternalLink size={10} className="text-muted-foreground/60" />
      </div>

      {/* Hover popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 6 }}
            transition={{ duration: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="absolute top-full left-0 w-[300px] origin-top-left pt-2"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-3xl">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/5" />
              <div className="relative flex flex-col gap-2.5">
                <h3 className="text-sm leading-snug font-semibold text-white">
                  Budgetter — Expense Tracker &amp; Analytics
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Track every rupee, analyze spending patterns, and spend smarter every day.
                </p>
                <Link
                  href="https://budgetter.lokeshwardewangan.in"
                  target="_blank"
                  className="mt-0.5 flex w-fit items-center gap-1.5 text-xs font-medium text-pink-400 transition-colors hover:text-pink-300"
                >
                  Explore Product <ExternalLink size={10} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
