"use client";

import { animate, utils } from "animejs";
import { useEffect, type RefObject } from "react";

type Opts = { y?: number; scale?: number; duration?: number; step?: number };

/**
 * Memunculkan tiap elemen `selector` di dalam `ref` saat elemen ITU sendiri masuk viewport
 * (bukan saat kontainernya), sekali. Batas bawah -8% supaya tidak terpicu di tepi layar;
 * elemen yang masuk bersamaan diberi jeda bertingkat. Dilewati pada prefers-reduced-motion.
 *
 * Pengaman: elemen di dasar halaman bisa tak pernah mencapai ambang bila viewport tinggi
 * (halaman mentok). Saat gulir mencapai dasar — atau halaman tak bisa digulir — semua
 * target yang tersisa dimunculkan.
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

    const pending = new Set(targets);
    utils.set(targets, { opacity: 0, y, ...(scale ? { scale } : {}) });

    const show = (els: HTMLElement[]) => {
      els.forEach((el, i) => {
        if (!pending.has(el)) return;
        pending.delete(el);
        io.unobserve(el);
        animate(el, { opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}), duration, ease: "outCubic", delay: i * step });
      });
      if (!pending.size) cleanup();
    };

    const io = new IntersectionObserver(
      (entries) => {
        const hits = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => targets.indexOf(a) - targets.indexOf(b));
        show(hits);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    targets.forEach((t) => io.observe(t));

    // Dasar halaman / halaman pendek: munculkan sisa yang masih berada di viewport.
    const atBottom = () => {
      const doc = document.documentElement;
      const stuck = window.innerHeight + window.scrollY >= doc.scrollHeight - 2 || doc.scrollHeight <= window.innerHeight;
      if (!stuck) return;
      show([...pending].filter((el) => el.getBoundingClientRect().top < window.innerHeight));
    };
    window.addEventListener("scroll", atBottom, { passive: true });
    window.addEventListener("resize", atBottom);
    atBottom();

    function cleanup() {
      io.disconnect();
      window.removeEventListener("scroll", atBottom);
      window.removeEventListener("resize", atBottom);
    }
    return cleanup;
  }, [ref, selector, y, scale, duration, step]);
}
