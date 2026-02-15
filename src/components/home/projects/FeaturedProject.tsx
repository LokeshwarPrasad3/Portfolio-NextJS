"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Project } from "./project-data";
import { TechBadge } from "./TechBadge";
import { ProjectLinks } from "./ProjectLinks";

export const FeaturedProject = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
    >
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Links Overlay (Visible on Hover for Desktop, always accessible) */}
        <div className="absolute right-4 bottom-4 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ProjectLinks
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            className="scale-90"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white md:text-2xl">{project.title}</h3>
          <span className="text-4xl font-bold text-white/5">0{index + 1}</span>
        </div>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} small />
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-white/40">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
