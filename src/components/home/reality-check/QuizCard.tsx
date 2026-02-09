"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, HelpCircle, Trophy, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

import { toast } from "sonner";

import confetti from "canvas-confetti";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

const options: Option[] = [
  { id: "A", text: '{ val: "150k" }', isCorrect: false },
  { id: "B", text: "undefined", isCorrect: true },
  { id: "C", text: "null", isCorrect: false },
  { id: "D", text: "SyntaxError", isCorrect: false },
];

export const QuizCard = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (optionId: string) => {
    if (hasAnswered) return;
    setSelected(optionId);
    setHasAnswered(true);

    const isCorrect = options.find((o) => o.id === optionId)?.isCorrect;

    if (isCorrect) {
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { x: 0.5, y: 0.5 },
        zIndex: 2147483647, // Max z-index to ensure visibility above everything
        colors: ["#22c55e", "#10b981", "#34d399", "#fcd34d", "#f59e0b"], // Emerald and Gold theme
      });

      toast.success("Correct! You're hired! Welcome to the team! 🚀", {
        duration: 9000,
        icon: "🎉",
      });
    } else {
      toast.error(
        "Gotcha! The newline after 'return' causes it to return undefined. Keep an eye on ASI! 👻",
        {
          duration: 3000,
          icon: "😅",
        }
      );
    }
  };

  const isCorrect = selected ? options.find((o) => o.id === selected)?.isCorrect : false;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-20 transition-opacity duration-500",
          hasAnswered
            ? isCorrect
              ? "bg-emerald-500/20"
              : "bg-red-500/20"
            : "bg-linear-to-b from-white/10 to-transparent"
        )}
      />

      <div className="relative flex flex-col gap-6 rounded-xl border border-white/5 bg-neutral-900/90 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
            {hasAnswered && isCorrect ? <PartyPopper size={22} /> : <HelpCircle size={22} />}
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-white">Vibe Check</h3>
            <span className="text-xs text-neutral-400">Can you pass the interview?</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-white/5 bg-black/50 p-5 font-mono text-sm leading-relaxed shadow-inner">
          {/* Window Dots */}
          <div className="absolute top-3 left-3 flex gap-1.5 opacity-60">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-purple-400 italic">// Tricky logic test</p>
            <div className="text-neutral-300">
              <span className="text-pink-400">function</span>{" "}
              <span className="text-blue-300">getSalary</span>() {"{"}
            </div>
            <div className="pl-4 text-neutral-300">
              <span className="text-pink-400">return</span>
            </div>
            <div className="pl-4 text-neutral-300">
              {"{"} <span className="text-orange-300">val</span>:{" "}
              <span className="text-green-300">"150k"</span> {"}"};
            </div>
            <div className="text-neutral-300">{"}"}</div>
            <div className="mt-3 text-neutral-300">
              console.log(<span className="text-blue-300">getSalary</span>());
            </div>
          </div>
        </div>

        <p className="text-sm font-medium text-neutral-400">What does it return?</p>

        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasAnswered}
              className={cn(
                "relative flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-lg font-medium transition-all duration-200",
                // Default State
                !hasAnswered &&
                  "border-white/10 bg-white/5 text-neutral-300 hover:scale-[1.02] hover:border-purple-500/30 hover:bg-purple-500/10",
                // Correct State
                hasAnswered &&
                  option.isCorrect &&
                  "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20",
                // Incorrect State (Selected)
                hasAnswered &&
                  !option.isCorrect &&
                  selected === option.id &&
                  "border-red-500/50 bg-red-500/10 text-red-400",
                // Disabled (Unselected)
                hasAnswered &&
                  selected !== option.id &&
                  !option.isCorrect &&
                  "border-white/5 bg-transparent opacity-40 blur-[1px]"
              )}
            >
              <span>{option.text}</span>
              {hasAnswered && option.isCorrect && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 text-emerald-500"
                >
                  <Check size={14} />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Feedback Message */}
        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg bg-white/5 p-2 text-center text-sm font-medium",
                isCorrect ? "text-emerald-400" : "text-neutral-400"
              )}
            >
              {isCorrect ? (
                <>
                  <Trophy size={16} className="text-yellow-400" />
                  <span>Correct! You just got the job.</span>
                </>
              ) : (
                <span>Too bad, we're broke! (Just kidding, try again)</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
