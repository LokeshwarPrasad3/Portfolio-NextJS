"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Layout, Bug, Rocket, GitBranch, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type WorkTrait = {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  /** Tailwind gradient classes (bg-gradient-to-br compatible) */
  from: string;
  via: string;
  to: string;
  /** Accent color for the left-column indicator */
  accent: string;
};

const TRAITS: WorkTrait[] = [
  {
    id: "performance",
    title: "Performance-first",
    description:
      "I don't just ship features — I ship fast ones. 60fps animations and sub-second load times are non-negotiable on every project.",
    detail: "Lighthouse 95+, Core Web Vitals, bundle budgets",
    icon: Zap,
    from: "from-yellow-400",
    via: "via-orange-500",
    to: "to-red-500",
    accent: "bg-orange-500",
  },
  {
    id: "design",
    title: "Design-sensitive",
    description:
      "I bridge the gap between Figma and code. Pixel-perfect implementation, consistent spacing systems, and micro-interactions that feel alive.",
    detail: "Design tokens, animation curves, accessibility",
    icon: Layout,
    from: "from-pink-500",
    via: "via-rose-500",
    to: "to-red-400",
    accent: "bg-pink-500",
  },
  {
    id: "debug",
    title: "Debugger by instinct",
    description:
      "Tricky bugs are puzzles I actually enjoy. I trace issues end-to-end — across the stack, across environments — until the root cause is clear.",
    detail: "Root-cause analysis, systematic reproduction, stack traces",
    icon: Bug,
    from: "from-cyan-400",
    via: "via-blue-500",
    to: "to-indigo-500",
    accent: "bg-cyan-500",
  },
  {
    id: "ship",
    title: "Ship › Perfect",
    description:
      "Perfection is the enemy of done. I deliver real value to users fast, while keeping the quality bar high enough that I'm never embarrassed by what ships.",
    detail: "Iterative delivery, feature flags, progressive rollouts",
    icon: Rocket,
    from: "from-emerald-400",
    via: "via-green-500",
    to: "to-teal-500",
    accent: "bg-emerald-500",
  },
  {
    id: "version",
    title: "Git as a craft",
    description:
      "Clean atomic commits, meaningful PR descriptions, zero force-pushes on shared branches. I treat version history as living documentation for the team.",
    detail: "Conventional commits, branch strategy, code reviews",
    icon: GitBranch,
    from: "from-purple-400",
    via: "via-violet-500",
    to: "to-indigo-500",
    accent: "bg-violet-500",
  },
];

type TraitButtonProps = {
  trait: WorkTrait;
  isActive: boolean;
  index: number;
  onActivate: (t: WorkTrait) => void;
};

const TraitButton = ({ trait, isActive, index, onActivate }: TraitButtonProps) => {
  const Icon = trait.icon;

  return (
    <motion.button
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => onActivate(trait)}
      onClick={() => onActivate(trait)}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left",
        "transition-all duration-300 2xl:gap-4 2xl:px-5 2xl:py-4",
        isActive
          ? "border-white/10 bg-white/[0.06] shadow-lg"
          : "border-transparent hover:border-white/5 hover:bg-white/[0.03]"
      )}
    >
      {/* Accent bar */}
      <motion.div
        layoutId="trait-accent-bar"
        className={cn(
          "absolute top-1/2 left-0 h-5 w-0.5 -translate-y-1/2 rounded-full",
          isActive ? trait.accent : "bg-transparent"
        )}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />

      {/* Icon */}
      <div
        className={cn(
          "shrink-0 rounded-lg p-2 transition-all duration-300",
          isActive ? `bg-gradient-to-br ${trait.from} ${trait.via} ${trait.to}` : "bg-white/[0.05]"
        )}
      >
        <Icon
          className={cn(
            "h-3.5 w-3.5 transition-colors sm:h-4 sm:w-4 2xl:h-5 2xl:w-5",
            isActive ? "text-white" : "text-muted-foreground group-hover:text-white/70"
          )}
        />
      </div>

      {/* Label */}
      <span
        className={cn(
          "text-xs font-medium transition-colors sm:text-sm 2xl:text-base",
          isActive ? "text-white" : "text-muted-foreground group-hover:text-white/80"
        )}
      >
        {trait.title}
      </span>

      {/* Trail arrow — spring animated */}
      {isActive && (
        <motion.span
          layoutId="trail-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-auto text-xs text-white/30"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          →
        </motion.span>
      )}
    </motion.button>
  );
};

type DetailPanelProps = { trait: WorkTrait; index: number };

const DetailPanel = ({ trait, index }: DetailPanelProps) => {
  const Icon = trait.icon;

  return (
    <motion.div
      key={trait.id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex h-full flex-col justify-between gap-6"
    >
      {/* Index watermark */}
      <span className="absolute top-0 right-0 font-mono text-[5rem] leading-none font-black text-white/[0.04] select-none 2xl:text-[7rem]">
        0{index + 1}
      </span>

      {/* Icon + gradient */}
      <div
        className={cn(
          "w-fit rounded-2xl bg-gradient-to-br p-3.5 shadow-2xl 2xl:p-5",
          trait.from,
          trait.via,
          trait.to
        )}
      >
        <Icon className="h-7 w-7 text-white sm:h-9 sm:w-9 2xl:h-11 2xl:w-11" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <div className={cn("h-0.5 w-10 rounded-full bg-gradient-to-r", trait.from, trait.to)} />
        <h3 className="text-lg font-bold text-white sm:text-xl 2xl:text-3xl">{trait.title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm 2xl:text-base">
          {trait.description}
        </p>
      </div>

      {/* Detail chip */}
      <div className="flex flex-wrap gap-2">
        {trait.detail.split(", ").map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const WorkSection = () => {
  const [activeTrait, setActiveTrait] = useState<WorkTrait>(TRAITS[0]);
  const activeIndex = TRAITS.findIndex((t) => t.id === activeTrait.id);

  return (
    <section className="relative z-10 w-full overflow-hidden bg-black/5 px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-4xl 2xl:max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center lg:mb-14 2xl:mb-18"
        >
          <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.15em] uppercase">
            Engineering principles
          </p>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl 2xl:text-4xl">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              How I Actually Work
            </span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left — trait list */}
          <div className="flex flex-col gap-1.5 lg:col-span-5">
            {TRAITS.map((trait, i) => (
              <TraitButton
                key={trait.id}
                trait={trait}
                isActive={activeTrait.id === trait.id}
                index={i}
                onActivate={setActiveTrait}
              />
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 p-8 backdrop-blur-xl md:min-h-[320px] md:p-10 2xl:min-h-[380px] 2xl:p-12">
              {/* Ambient glow that tracks the active trait */}
              <motion.div
                key={activeTrait.id + "-glow"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.18 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br blur-[90px]",
                  activeTrait.from,
                  activeTrait.to
                )}
              />

              <AnimatePresence mode="wait">
                <DetailPanel key={activeTrait.id} trait={activeTrait} index={activeIndex} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
