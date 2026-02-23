"use client";

import { motion } from "motion/react";
import { Github, FolderGit2, Code2 } from "lucide-react";

export const StatsSticker = () => {
  return (
    <div className="scale_layout relative z-30 my-8 flex w-full justify-center px-6 lg:-mt-16 lg:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-4xl"
      >
        <div className="bg-background/60 supports-backdrop-filter:bg-background/20 overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(168,85,247,0.15)] backdrop-blur-xl">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Github Commits */}
            <div className="flex items-center gap-5 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/20">
                <Github className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-foreground text-2xl font-bold">1600+</p>
                <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  GitHub Commits
                </p>
              </div>
            </div>

            {/* Projects Completed */}
            <div className="flex items-center gap-5 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
                <FolderGit2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-foreground text-2xl font-bold">30+</p>
                <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  Projects Done
                </p>
              </div>
            </div>

            {/* Years Experience */}
            <div className="flex items-center gap-5 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/20">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-foreground text-2xl font-bold">4+</p>
                <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  Years Coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
