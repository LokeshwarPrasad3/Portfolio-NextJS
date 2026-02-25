"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, GraduationCap, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    title: "UI/UX Developer",
    company: "Globussoft",
    date: "July 2024 - Present",
    description: (
      <>
        Building and improving responsive, user-friendly web applications using modern frontend
        technologies. Developed projects including{" "}
        <a
          href="https://powerbrowser.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          PowerBrowser
        </a>{" "}
        (Web UI of a Chromium-based browser),{" "}
        <a
          href="https://news.powerbrowser.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          PowerNews
        </a>
        , and{" "}
        <a
          href="https://adsgpt.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          AdsGPT
        </a>
        . Officially recognized via employee testimonial.
      </>
    ),
    link: "https://globussoft.com/employee-testimonials/",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "IJSRGI (College Journal Website)",
    date: "Feb 2024",
    description: (
      <>
        Designed, developed, and supported initial maintenance of the{" "}
        <a
          href="https://ijsrgi.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          official journal website
        </a>{" "}
        for the college, streamlining the paper submission and publication process.
      </>
    ),
    link: "https://ijsrgi.com/",
    icon: Briefcase,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "B.Tech in Computer Science & Engineering",
    company: "CSVTU",
    date: "2021 - 2025",
    description: (
      <>
        Graduated with 8.5 CGPA. Specialized in Software Engineering and Data Structures &
        Algorithms. Built multiple academic projects including an Award-winning Smart Canteen
        system.
      </>
    ),
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative z-10 w-full overflow-hidden bg-black/5 py-12 md:py-16 2xl:py-24"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6 2xl:max-w-7xl">
        <div className="mb-12 text-center lg:mb-16 2xl:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-3xl font-bold tracking-wide sm:text-4xl 2xl:text-5xl">
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-xs 2xl:text-base">
              A chronological roadmap of my professional growth, educational background, and
              significant milestones.
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Central Line for Desktop */}
          <div className="absolute top-0 bottom-0 left-4 hidden w-[2px] bg-white/10 md:left-1/2 md:-ml-px md:block" />

          {/* Animated Glowing Line for Desktop */}
          <motion.div
            style={{ height: pathHeight }}
            className="absolute top-0 left-4 hidden w-[2px] bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] md:left-1/2 md:-ml-px md:block"
          />

          {/* Static Line for Mobile */}
          <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-white/10 md:hidden" />

          {/* Animated Glowing Line for Mobile */}
          <motion.div
            style={{ height: pathHeight }}
            className="absolute top-0 left-4 w-[2px] bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] md:hidden"
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.icon;

              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative flex flex-col items-center md:flex-row",
                    isEven ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Timeline Node - Desktop & Mobile */}
                  <div className="absolute top-[10px] left-[5px] md:top-1/2 md:left-1/2 md:-mt-[20px] md:-ml-[20px]">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-black/80 ring-2 ring-black backdrop-blur-md md:h-10 md:w-10 md:ring-4"
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full bg-linear-to-br p-[2px] md:h-6 md:w-6 md:p-1",
                          exp.gradient
                        )}
                      >
                        <Icon className="h-full w-full text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className={cn(
                      "w-full pt-4 pl-12 md:w-5/12 md:pt-0 md:pl-0",
                      isEven ? "text-left md:pr-12 md:text-right" : "text-left md:pl-12"
                    )}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-black/40">
                      <div
                        className={cn(
                          "flex flex-col gap-2",
                          isEven ? "items-start md:items-end" : "items-start"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-block w-fit rounded-full bg-white/5 py-1 text-xs font-semibold text-white/70",
                            "px-3"
                          )}
                        >
                          {exp.date}
                        </span>
                        <h3 className="font-bree mt-2 text-xl font-bold tracking-wide text-white 2xl:text-2xl">
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-400"
                            >
                              {exp.title}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            exp.title
                          )}
                        </h3>
                        <h4
                          className={cn(
                            "bg-linear-to-r bg-clip-text text-sm font-semibold text-transparent",
                            exp.gradient
                          )}
                        >
                          {exp.company}
                        </h4>
                        <p
                          className={cn(
                            "text-muted-foreground mt-2 text-sm leading-relaxed 2xl:text-base",
                            isEven ? "text-left md:text-right" : "text-left"
                          )}
                        >
                          {exp.description}
                        </p>
                      </div>

                      {/* Hover effect blob */}
                      <div
                        className={cn(
                          "absolute -z-10 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20",
                          isEven ? "-right-20 -bottom-20" : "-bottom-20 -left-20",
                          exp.gradient.split(" ")[0].replace("from-", "bg-") // Hacky extraction of bg color
                        )}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
