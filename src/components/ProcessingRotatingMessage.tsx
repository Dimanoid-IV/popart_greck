"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ROTATE_INTERVAL_MS = 4500;

type ProcessingRotatingMessageProps = {
  messages: readonly string[];
  className?: string;
};

export default function ProcessingRotatingMessage({
  messages,
  className,
}: ProcessingRotatingMessageProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [messages.length]);

  return (
    <p
      key={index}
      className={cn(
        "mx-auto flex min-h-[4.5rem] max-w-lg animate-in fade-in duration-700 items-center justify-center px-4 text-base leading-relaxed text-muted-foreground",
        className
      )}
      aria-live="polite"
    >
      {messages[index]}
    </p>
  );
}
