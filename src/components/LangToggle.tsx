"use client";

import { animate, utils } from "animejs";
import { useEffect, useRef } from "react";
import type { Lang } from "@/data/content";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";

const LANGS: Lang[] = ["id", "en"];

/* Saklar bahasa: sorotan ("jempol") meluncur ke tombol aktif (anime.js). */
export function LangToggle() {
  const { lang, setLang, t } = useLang();
  const groupRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    const group = groupRef.current;
    const thumb = thumbRef.current;
    const active = group?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!group || !thumb || !active) return;
    const target = { x: active.offsetLeft, width: active.offsetWidth };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (firstRun.current || reduced) {
      utils.set(thumb, target); // posisi awal tanpa animasi
      firstRun.current = false;
    } else {
      animate(thumb, { ...target, duration: 320, ease: "outCubic" });
    }
    group.dataset.ready = "";
  }, [lang]);

  return (
    <div ref={groupRef} className="lang pill" role="group" aria-label={t(ui.a11y.switchLang)}>
      <span ref={thumbRef} className="lang__thumb" aria-hidden="true" />
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className="langbtn t-meta"
          aria-pressed={lang === code}
          aria-label={t(ui.a11y.langName[code])}
          onClick={() => setLang(code)}
        >
          {ui.langCode[code]}
        </button>
      ))}
    </div>
  );
}
