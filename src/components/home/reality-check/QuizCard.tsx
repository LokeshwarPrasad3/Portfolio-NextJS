"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, HelpCircle, Trophy, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

import { toast } from "sonner";

import { Confetti, type ConfettiRef } from "@/components/ui/confetti";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

const options: Option[] = [
  { id: "A", text: "true", isCorrect: false },
  { id: "B", text: "false", isCorrect: true },
  { id: "C", text: "NaN", isCorrect: false },
  { id: "D", text: "undefined", isCorrect: false },
];

export const QuizCard = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const handleSelect = (optionId: string) => {
    if (hasAnswered) return;
    setSelected(optionId);
    setHasAnswered(true);

    const isCorrect = options.find((o) => o.id === optionId)?.isCorrect;

    if (isCorrect) {
      // Fire confetti from the center-bottom
      confettiRef.current?.fire({
        particleCount: 150,
        spread: 70,
        origin: { x: 0.5, y: 0.8 },
        colors: ["#22c55e", "#10b981", "#34d399", "#fcd34d", "#f59e0b"],
      });

      toast.custom(
        (t) => (
          <div className="flex w-full max-w-xl items-center gap-4 rounded-xl border border-emerald-500/20 bg-neutral-900/95 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
              <PartyPopper size={24} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white">Congratulations! 🚀</p>
              <p className="text-sm text-neutral-400">
                You are hired as a frontend developer! Welcome to the team.
              </p>
            </div>
          </div>
        ),
        { duration: 9000 }
      );
    } else {
      toast.custom(
        (t) => (
          <div className="flex w-full max-w-xl items-center gap-4 rounded-xl border border-red-500/20 bg-neutral-900/95 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/20">
              <X size={24} className="text-red-400" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white">So close! 😅</p>
              <p className="text-sm text-neutral-400">
                0.1 + 0.2 is actually 0.30000000000000004 because of floating point math.
              </p>
            </div>
          </div>
        ),
        { duration: 3000 }
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
      className="group relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
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
            <h3 className="text-lg font-bold text-white sm:text-xl">JS Reality Check</h3>
            <span className="text-xs text-neutral-400">Do you know your coercion?</span>
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
            <p className="text-purple-400 italic">// JavaScript Magic 🪄</p>
            <div className="text-neutral-300">console.log(</div>
            <div className="pl-4 text-neutral-300">
              <span className="text-blue-400">0.1</span> +{" "}
              <span className="text-blue-400">0.2</span> <span className="text-pink-400">===</span>{" "}
              <span className="text-blue-400">0.3</span>
            </div>
            <div className="text-neutral-300">);</div>
          </div>
        </div>

        <p className="text-sm font-medium text-neutral-400 sm:text-base">
          What does the console log?
        </p>

        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasAnswered}
              className={cn(
                "relative flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200",
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
                  <span>Correct! Enjoy your weekend.</span>
                </>
              ) : (
                <span>Oh no! ... 📱</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Confetti
        ref={confettiRef}
        className="pointer-events-none absolute inset-0 z-50 size-full"
        manualstart={true}
      />
    </motion.div>
  );
};
