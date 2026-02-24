"use client";

import { motion } from "motion/react";
import { Award, Medal, Trophy, CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    id: 1,
    title: "Winner - College Aavishkar Software Program 2024",
    description:
      "Won first place for developing SMART-CANTEEN, an innovation competition challenging participants to solve real-world problems through practical, impactful, and scalable technology solutions.",
    link: "https://www.linkedin.com/posts/lokeshwar-dewangan-7b2163211_avishkar-softwareinnovation-techleadership-activity-7167142733273407488-dDt-",
    icon: Trophy,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Globussoft Employee Recognition",
    description:
      "Officially recognized by the organization through an employee testimonial for outstanding contributions to projects like PowerBrowser, PowerNews, and AdsGPT.",
    link: "https://globussoft.com/employee-testimonials/",
    icon: Award,
    gradient: "from-blue-400 to-indigo-500",
  },
];

const certifications = [
  {
    title: "NPTEL Certified in JAVA Programming",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S95270002530563039",
  },
  {
    title: "IBM Skillbuild Certified in Web Development",
    link: "https://www.credly.com/badges/7a6397fe-6533-47a2-86dc-6600aff967ce/linked_in?t=saek8x",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    link: "https://api.badgr.io/public/assertions/X2aHNIvcRneM6m7H7FIk4A",
  },
];

export const AchievementsSection = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-black/10 px-6 py-12 lg:px-12 lg:py-20">
      <div className="container mx-auto max-w-4xl 2xl:max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bree mb-4 text-3xl font-bold tracking-wide sm:text-4xl 2xl:text-5xl">
              <span className="bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Milestones & Recognition
              </span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-xs 2xl:text-base">
              Awards, certifications, and moments where hard work paid off.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Achievements Column */}
          <div className="flex flex-col gap-6">
            <h3 className="mb-2 flex items-center gap-3 text-xl font-bold text-white">
              <Medal className="text-yellow-500" />
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-black/40"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "mt-1 rounded-full bg-linear-to-br p-3 shadow-lg",
                      achievement.gradient
                    )}
                  >
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-white">
                      {achievement.link ? (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-400"
                        >
                          {achievement.title}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        achievement.title
                      )}
                    </h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                {/* Background Glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-10",
                    achievement.gradient.replace("from-", "bg-")
                  )}
                />
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-6">
            <h3 className="mt-8 mb-2 flex items-center gap-3 text-xl font-bold text-white lg:mt-0">
              <Award className="text-blue-500" />
              Certifications
            </h3>
            <div className="flex h-full flex-col justify-center gap-6 rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-md">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <div className="shrink-0 rounded-full bg-emerald-500/20 p-2 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-base text-neutral-300 transition-colors group-hover:text-white hover:text-blue-400 hover:underline"
                  >
                    {cert.title}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
