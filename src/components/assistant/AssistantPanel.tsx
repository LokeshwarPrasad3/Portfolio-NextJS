"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ChatInterface } from "./ChatInterface";
import { ShineBorder } from "../ui/shine-border";

interface AssistantPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AssistantPanel({ isOpen, onClose }: AssistantPanelProps) {
  // Prevent background scrolling when the panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0, y: 40, filter: "blur(8px)" }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 25,
            mass: 0.8,
          }}
          className="fixed bottom-0 left-1/2 z-50 flex h-[85dvh] w-[95vw] origin-bottom -translate-x-1/2 flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-zinc-950/80 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:right-6 sm:bottom-6 sm:left-auto sm:h-[80vh] sm:max-h-[80vh] sm:min-h-[500px] sm:w-[clamp(380px,28vw,480px)] sm:origin-bottom-right sm:translate-x-0 sm:rounded-3xl 2xl:h-[90vh] 2xl:max-h-[90vh]"
        >
          <ShineBorder
            className="inset-0 z-10 p-px"
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            duration={10}
            borderWidth={1.5}
          />

          {/* Header */}
          <div className="relative flex items-center justify-between bg-zinc-900/50 px-6 py-5 backdrop-blur-md">
            {/* Subtle gradient bottom border */}
            <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <h3 className="font-bree text-lg font-semibold tracking-wide text-zinc-100">
                  Lokeshwar AI
                </h3>
              </div>
              <p className="ml-4 text-xs text-zinc-400">Pre-Interview Assistant</p>
            </div>
            <button
              onClick={onClose}
              className="group rounded-full p-2 transition-colors hover:bg-white/10"
              aria-label="Close panel"
            >
              <X className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-zinc-100" />
            </button>
          </div>

          {/* Chat Interface Container */}
          <div className="flex-1 overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
