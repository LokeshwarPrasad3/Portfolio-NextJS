"use client";

import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ProjectLinksProps {
  liveLink?: string;
  repoLink?: string;
  className?: string;
  title?: string;
}

export const ProjectLinks = ({ liveLink, repoLink, className, title }: ProjectLinksProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {liveLink && liveLink !== "#" && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={title ? `Live Demo for ${title}` : "Live Demo"}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:shadow-lg hover:shadow-white/20"
          >
            <span>Live Demo</span>
            <ExternalLink
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.div>
        </a>
      )}

      {repoLink && repoLink !== "#" && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title ? `Code Repository for ${title}` : "Code Repository"}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/20 hover:bg-black/70 hover:text-white"
          >
            <Github size={16} />
            <span>Code</span>
          </motion.div>
        </a>
      )}
    </div>
  );
};
