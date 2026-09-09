"use client";

import { Icon } from "@iconify/react";
import { animate } from "animejs";
import { useEffect, useRef } from "react";
import type { Section } from "@/data/content";
import { ui } from "@/data/ui";
import { BRANDS } from "@/lib/brands";
import { useLang } from "@/lib/lang";
import { useRevealOnScroll } from "@/lib/reveal";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Semua pill dari seluruh item section Keterampilan digabung jadi satu kisi logo merek. */
export function Skills({ section }: { section: Section }) {
  const { t } = useLang();
  const listRef = useRef<HTMLUListElement>(null);
  const pills = section.items.flatMap((item) => item.pills ?? []);

  // Tiap ubin muncul saat dirinya masuk viewport (aturan bersama di lib/reveal).
  useRevealOnScroll(listRef, ".skill", { scale: 0.92, step: 40 });

  // Logo memantul saat hover/fokus.
  const bounce = (el: HTMLElement) => {
    if (reduced()) return;
    const svg = el.querySelector("svg");
    if (svg) animate(svg, { scale: [{ to: 1.22, duration: 180, ease: "outQuad" }, { to: 1, duration: 380, ease: "outBack(3)" }] });
  };

  return (
    <ul ref={listRef} className="skills" aria-label={t(ui.a11y.skills)}>
      {pills.map((pill) => {
        const brand = BRANDS[pill.label];
        return (
          <li
            key={pill.label}
            className="skill"
            title={t(pill.note)}
            tabIndex={0}
            onMouseEnter={(e) => bounce(e.currentTarget)}
            onFocus={(e) => bounce(e.currentTarget)}
          >
            {brand && (
              <Icon icon={brand.icon} width={30} height={30} style={{ color: brand.color }} aria-hidden="true" ssr />
            )}
            <span className="t-meta">{pill.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
