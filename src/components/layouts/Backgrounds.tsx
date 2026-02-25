"use client";

import dynamic from "next/dynamic";

const DynamicBackground = dynamic(() => import("@/components/background/DynamicBackground"), {
  ssr: false,
});

const Meteors = dynamic(() => import("@/components/ui/meteors").then((mod) => mod.Meteors), {
  ssr: false,
});

import { useEffect, useState } from "react";

export default function Backgrounds() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Only listen to resize if we want to toggle dynamically, but usually a single check is fine for performance.
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return null; // Return nothing on mobile to save CPU and GPU
  }

  return (
    <>
      <DynamicBackground />
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      <Meteors number={20} />
    </>
  );
}
