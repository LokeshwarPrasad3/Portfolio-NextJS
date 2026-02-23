"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUpRight, Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-white/5 bg-black/5 px-6 pt-12 pb-8 backdrop-blur-3xl lg:px-12 lg:pt-16 2xl:pt-20">
      <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-50" />

      <div className="container mx-auto max-w-4xl 2xl:max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md sm:flex-row md:px-12 2xl:mb-20">
          <div className="text-center sm:text-left">
            <h2 className="font-bree text-lg font-bold text-white sm:text-xl 2xl:text-2xl">
              Have an idea?
            </h2>
            <p className="text-muted-foreground text-xs sm:text-xs 2xl:text-base">
              Let’s build something clean, fast, and scalable.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm 2xl:px-6 2xl:py-3"
          >
            <span>Get in touch</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

            {/* Button Glow */}
            <div className="absolute -inset-1 rounded-full bg-white/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-12 2xl:mb-20">
          <div className="flex flex-col gap-4 md:col-span-5">
            <h2 className="font-bree text-base font-bold tracking-tight text-white sm:text-lg 2xl:text-xl">
              Lokeshwar Prasad.
            </h2>
            <p className="text-muted-foreground/80 max-w-xs text-xs leading-relaxed sm:text-xs 2xl:text-base">
              Full-Stack Developer who cares about details, performance, and user experience.
            </p>
            <div className="mt-2 flex items-center gap-4">
              <TooltipProvider>
                {[
                  { icon: Github, href: "https://github.com/LokeshwarPrasad3", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/lokeshwar-prasad-dewangan-7b2163211/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/lokeshwarprasad1/",
                    label: "Instagram",
                  },
                  { icon: Twitter, href: "https://twitter.com/LokeshwarPras17", label: "Twitter" },
                  { icon: Mail, href: "mailto:lokeshwar.prasad.cse@gmail.com", label: "Email" },
                ].map((social, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground rounded-full bg-white/5 p-2 transition-all hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95"
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Pages</h3>
              <div className="flex flex-col gap-2">
                {["Home", "Projects", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-muted-foreground/80 w-fit text-xs transition-colors hover:text-white 2xl:text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Resources
              </h3>
              <div className="flex flex-col gap-2">
                {["Resume", "Uses", "Guestbook", "Source"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-muted-foreground/80 w-fit text-xs transition-colors hover:text-white 2xl:text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground/40 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Lokeshwar Prasad Dewangan. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with curiosity & chai</span>
            <Heart size={10} className="fill-red-500/50 text-red-500" />
            <span>using Next.js</span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "absolute inset-0 -z-10 opacity-40",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
    </footer>
  );
};
