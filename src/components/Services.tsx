"use client";

import type { IconifyIcon } from "@iconify/react";
import account from "@iconify-icons/line-md/account";
import documentCode from "@iconify-icons/line-md/document-code";
import pencil from "@iconify-icons/line-md/pencil";
import { useState } from "react";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";
import { AnimatedIcon } from "./AnimatedIcon";

/* Ikon per spesialisasi, dikunci ke judul Inggrisnya. */
const ICONS: Record<string, IconifyIcon> = {
  Design: pencil,
  Development: documentCode,
  Teaching: account,
};

/* Spesialisasi di bawah kisi Skills, dalam kartu yang sama, dipisah garis. */
export function Services() {
  const { t } = useLang();
  // Penghitung per item: naik saat hover/fokus supaya animasi ikon diputar ulang.
  const [pulse, setPulse] = useState<Record<number, number>>({});
  const bump = (i: number) => setPulse((p) => ({ ...p, [i]: (p[i] ?? 0) + 1 }));

  return (
    <ul className="services hairline">
      {ui.services.map((s, i) => (
        <li key={i} className="service" tabIndex={0} onMouseEnter={() => bump(i)} onFocus={() => bump(i)}>
          <span className="service__icon" aria-hidden="true">
            <AnimatedIcon icon={ICONS[s.title.en] ?? pencil} size={26} replayKey={pulse[i] ?? 0} />
          </span>
          <h3 className="t-card">{t(s.title)}</h3>
          <p className="t-meta">{t(s.desc)}</p>
        </li>
      ))}
    </ul>
  );
}
