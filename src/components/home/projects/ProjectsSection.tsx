"use client";

import { motion } from "motion/react";
import {
  FullStackProjectsArray,
  ReactFrontendProjectsArray,
  FrontendProjectsArray,
} from "./project-data";
import { FeaturedProject } from "./FeaturedProject";
import { ReactProjects } from "./ReactProjects";
import { HorizontalScrollSection } from "./HorizontalScrollSection";

export const ProjectsSection = () => {
  // Correctly typed data
  const fullstack = FullStackProjectsArray;
  const react = ReactFrontendProjectsArray;
  const js = FrontendProjectsArray;

  return (
    <section
      id="projects"
      className="relative z-10 w-full overflow-hidden bg-black/5 py-20 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* SECTION HEADER */}
        <div className="mb-12 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bree mb-4 text-4xl font-bold tracking-wide md:text-5xl">
              <span className="bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Selected Works
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-white/60 md:text-lg">
              A collection of projects exploring modern web technologies.
            </p>
          </motion.div>
        </div>

        {/* 1. FULLSTACK SECTION - 2 Columns */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-3">
            <h3 className="text-xl font-bold text-indigo-400 md:text-2xl">
              01. Fullstack Architecture
            </h3>
            <div className="h-px flex-1 bg-indigo-500/30" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {fullstack.map((project, index) => (
              <FeaturedProject key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* 2. REACT SECTION - 3 Columns */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 flex items-center gap-3">
            <h3 className="text-xl font-bold text-cyan-400 md:text-2xl">02. React Ecosystem</h3>
            <div className="h-px flex-1 bg-cyan-500/30" />
          </div>

          <ReactProjects projects={react} />
        </div>

        {/* 3. JAVASCRIPT SECTION */}
        <div className="mb-6">
          <div className="mb-6 flex items-center gap-3">
            <h3 className="text-xl font-bold text-yellow-400 md:text-2xl">03. JavaScript Lab</h3>
            <div className="h-px flex-1 bg-yellow-500/30" />
          </div>
          <p className="mb-6 text-sm text-white/50">
            Smaller experiments and creative coding sketches.
          </p>
        </div>
      </div>

      {/* Full width container for horizontal scroll */}
      <HorizontalScrollSection projects={js} />
    </section>
  );
};
