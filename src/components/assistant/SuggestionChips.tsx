"use client";

import { motion } from "framer-motion";

const suggestions = [
  "Resume Summary",
  "Tech Stack",
  "Project Highlights",
  "Why Hire Him?",
  "Contact Info",
];

interface SuggestionChipsProps {
  onSelect: (suggestion: string) => void;
}

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2 px-2">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={suggestion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          onClick={() => onSelect(suggestion)}
          className="rounded-full border border-zinc-700/50 bg-zinc-800/30 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300"
        >
          {suggestion}
        </motion.button>
      ))}
    </div>
  );
}
