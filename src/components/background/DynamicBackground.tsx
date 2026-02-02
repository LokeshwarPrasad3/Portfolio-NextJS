"use client";

import dynamic from "next/dynamic";

const LightRaysCanvas = dynamic(
  () => import("./LightRaysCanvas").then((mod) => mod.LightRaysCanvas),
  { ssr: false }
);

export default function DynamicBackground() {
  return <LightRaysCanvas />;
}
