"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Project } from "./project-data";
import { TechBadge } from "./TechBadge";
import { ProjectLinks } from "./ProjectLinks";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ReactProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-colors hover:border-white/10 hover:bg-white/10"
        >
          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <ProjectLinks
                liveLink={project.liveLink}
                repoLink={project.repoLink}
                className="scale-90"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
            <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-white/60">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <TechBadge key={tech} name={tech} small />
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs text-white/40">+{project.techStack.length - 3}</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
