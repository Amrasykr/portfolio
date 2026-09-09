"use client";

import { Icon, type IconifyIcon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  icon: IconifyIcon;
  /** Naikkan nilai ini untuk memutar ulang animasi (mis. saat item jadi aktif). */
  replayKey?: number;
  size?: number;
  className?: string;
};

/**
 * Ikon line-md beranimasi lewat SMIL bawaan SVG (menggambar garis saat dipasang).
 * Diputar ulang dengan memasang ulang elemen setiap replayKey berubah (hover/fokus/aktif
 * dikelola pemanggil, mis. tombol induknya). Pada prefers-reduced-motion, lompat ke
 * frame akhir dan jeda supaya ikon tampil statis.
 */
export function AnimatedIcon({ icon, replayKey = 0, size = 26, className }: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [play, setPlay] = useState(0);

  useEffect(() => {
    setPlay((n) => n + 1);
  }, [replayKey]);

  useEffect(() => {
    const svg = wrapRef.current?.querySelector("svg");
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      svg.pauseAnimations();
      svg.setCurrentTime(10);
    }
  }, [play]);

  return (
    <span ref={wrapRef} className={className} style={{ display: "inline-flex", width: size, height: size }}>
      <Icon key={play} icon={icon} width={size} height={size} aria-hidden="true" ssr />
    </span>
  );
}
