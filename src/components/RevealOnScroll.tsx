"use client";

import { useRef, type ReactNode } from "react";
import { useRevealOnScroll } from "@/lib/reveal";

type Props = { selector: string; className?: string; children: ReactNode };

/* Kontainer yang memunculkan elemen `selector` di dalamnya satu per satu saat masing-masing masuk viewport. */
export function RevealOnScroll({ selector, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnScroll(ref, selector);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
