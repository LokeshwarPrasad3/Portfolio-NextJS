"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

type TypedWord = { text: string; gradient: string };

const TYPED_WORDS: TypedWord[] = [
  { text: "Scalable Systems", gradient: "from-pink-500 to-orange-400" },
  { text: "Web Apps", gradient: "from-violet-500 to-pink-500" },
  { text: "Modern Interfaces", gradient: "from-cyan-400 to-blue-500" },
];

export const TypedHeading = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const [gradientClass, setGradientClass] = useState(TYPED_WORDS[0].gradient);

  useEffect(() => {
    typed.current = new Typed(typedEl.current, {
      strings: TYPED_WORDS.map((w) => w.text),
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      preStringTyped: (arrayPos: number) => {
        setGradientClass(TYPED_WORDS[arrayPos]?.gradient ?? TYPED_WORDS[0].gradient);
      },
    });

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-3"
      aria-label="I build Scalable Systems, Web Apps, and Modern Interfaces"
    >
      <p className="text-muted-foreground text-sm font-semibold tracking-[0.12em]">
        Full Stack Engineer
      </p>
      <h1 className="min-h-[1.25em] text-[1.7rem] leading-tight font-bold lg:text-[3rem]">
        <span className="text-foreground/70">I build </span>
        <span
          ref={typedEl}
          className={`bg-linear-to-r bg-clip-text text-transparent ${gradientClass}`}
        />
      </h1>
    </div>
  );
};
