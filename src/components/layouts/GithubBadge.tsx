"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star, MapPin, Users, GitFork } from "lucide-react";
import Image from "next/image";
import { useGithubUser } from "@/hooks/useGithubUser";

export const GithubBadge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user, isLoading } = useGithubUser("LokeshwarPrasad3");

  const handleHover = (state: boolean) => {
    setIsOpen(state);
  };

  if (isLoading || !user) {
    return (
      <a
        href="https://github.com/LokeshwarPrasad3"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200"
      >
        <span>Public Repos</span>
        <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5 text-xs font-semibold">
          <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
          ...
        </span>
      </a>
    );
  }

  return (
    <div
      className="relative z-50 w-fit"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Link
          href={user.html_url}
          target="_blank"
          className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200"
        >
          <span>Public Repos</span>
          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5 text-xs font-semibold">
            <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
            {user.public_repos}
          </span>
        </Link>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[120%] right-0 z-50 w-[320px] origin-top-right pt-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-3xl">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-pink-500/10 via-purple-500/5 to-cyan-500/10 opacity-50" />

              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/20 shadow-lg">
                    <Image
                      src={user.avatar_url}
                      alt={user.name || user.login}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg leading-tight font-bold text-white">{user.name}</h3>
                    <p className="text-xs text-slate-400">@{user.login}</p>
                  </div>
                </div>

                {/* Bio */}
                {user.bio && (
                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-300/90">
                    {user.bio}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-2 rounded-xl bg-white/5 p-3 pb-2">
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                      Repos
                    </span>
                    <span className="text-lg font-bold text-white">{user.public_repos}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                      Followers
                    </span>
                    <span className="text-lg font-bold text-white">{user.followers}</span>
                  </div>
                </div>

                {user.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={12} />
                    <span>{user.location}</span>
                  </div>
                )}

                <Link
                  href={user.html_url}
                  target="_blank"
                  className="group/cta mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20"
                >
                  <Star size={14} className="fill-white text-white" />
                  <span>Follow on GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
