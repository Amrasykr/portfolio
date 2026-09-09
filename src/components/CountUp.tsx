"use client";

import { useEffect, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  /** Jeda sebelum mulai (ms), disamakan dengan animasi reveal induknya. */
  delayMs?: number;
  durationMs?: number;
};

const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

/** Angka menghitung naik dari 0 ke value; langsung ke nilai akhir pada prefers-reduced-motion. */
export function CountUp({ value, suffix = "", delayMs = 0, durationMs = 1200 }: Props) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / durationMs);
      setShown(Math.round(easeOutCubic(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [value, delayMs, durationMs]);

  return (
    <span aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {shown}
        {suffix}
      </span>
    </span>
  );
}
