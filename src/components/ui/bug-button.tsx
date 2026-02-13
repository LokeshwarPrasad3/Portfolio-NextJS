"use client";

import { Bug } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const BugButton = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/contact" passHref>
              <Button
                size="icon"
                className="h-12 w-12 rounded-full border border-red-500/30 bg-linear-to-r from-red-500/20 to-orange-500/20 text-red-500 shadow-lg shadow-red-500/10 transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-red-500 hover:to-orange-500 hover:text-white hover:shadow-red-500/40"
              >
                <Bug className="h-6 w-6 animate-pulse" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="border-neutral-800 bg-neutral-900 text-neutral-300"
          >
            <p className="flex items-center gap-2">
              <span className="text-red-400">🐛</span> Found a bug? Let me know!
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
