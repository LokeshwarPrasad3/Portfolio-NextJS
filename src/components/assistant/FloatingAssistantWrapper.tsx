"use client";

import { useState } from "react";
import { FloatingAssistantButton } from "./FloatingAssistantButton";
import { AssistantPanel } from "./AssistantPanel";

export default function FloatingAssistantWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingAssistantButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <AssistantPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
