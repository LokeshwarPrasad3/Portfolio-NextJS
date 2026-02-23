"use client";

import { motion } from "motion/react";
import { QuizCard } from "./QuizCard";
import { cn } from "@/lib/utils";

export const RealityCheckSection = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden px-6 py-12 lg:px-12 lg:py-12 2xl:py-24">
      <div className="container mx-auto max-w-4xl 2xl:max-w-7xl">
        {/* 1. Header */}
        <div className="mb-8 flex flex-col items-center text-center lg:mb-12 2xl:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-xl font-bold tracking-wide sm:text-2xl 2xl:text-4xl">
              <span className="bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Quick Frontend Reality Check
              </span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-xs 2xl:text-base">
              Not a test. Just curiosity.
            </p>
          </motion.div>
        </div>

        {/* 2. Interactive Card */}
        <div className="flex justify-center">
          <QuizCard />
        </div>

        {/* 3. Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-xs font-medium sm:text-xs 2xl:text-base">
            Don’t worry. No one gets this right on first scroll.
          </p>
        </motion.div>
      </div>

      <div
        className={cn(
          "absolute inset-0 -z-10 opacity-40",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
    </section>
  );
};
