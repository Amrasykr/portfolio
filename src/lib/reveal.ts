"use client";

import { animate, utils } from "animejs";
import { useEffect, type RefObject } from "react";

type Opts = { y?: number; scale?: number; duration?: number; step?: number };

/**
 * Memunculkan tiap elemen `selector` di dalam `ref` saat elemen ITU sendiri masuk viewport
 * (bukan saat kontainernya), sekali. Batas bawah -12% supaya tidak terpicu di tepi layar;
 * elemen yang masuk bersamaan diberi jeda bertingkat. Dilewati pada prefers-reduced-motion.
 */
export function useRevealOnScroll(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  { y = 14, scale, duration = 550, step = 70 }: Opts = {},
) {
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!targets.length) return;

    utils.set(targets, { opacity: 0, y, ...(scale ? { scale } : {}) });
    const io = new IntersectionObserver(
      (entries) => {
        const hits = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => targets.indexOf(a) - targets.indexOf(b));
        hits.forEach((el, i) => {
          animate(el, { opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}), duration, ease: "outCubic", delay: i * step });
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [ref, selector, y, scale, duration, step]);
}
