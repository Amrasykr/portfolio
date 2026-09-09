"use client";

import type { IconifyIcon } from "@iconify/react";
import briefcase from "@iconify-icons/line-md/briefcase";
import cog from "@iconify-icons/line-md/cog";
import folder from "@iconify-icons/line-md/folder";
import home from "@iconify-icons/line-md/home";
import lightbulb from "@iconify-icons/line-md/lightbulb";
import star from "@iconify-icons/line-md/star";
import { nav, sections } from "@/data/content";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";
import { useState } from "react";
import { AnimatedIcon } from "./AnimatedIcon";

export const HOME_KEY = "home";

/* Padanan ikon per section (line-md tidak punya ikon sekolah/sertifikat). */
const ICONS: Record<string, IconifyIcon> = {
  [HOME_KEY]: home,
  pendidikan: lightbulb,
  pengalaman: briefcase,
  proyek: folder,
  keterampilan: cog,
  pelatihan: star,
};

type Props = {
  activeKey: string;
  onSelect: (key: string) => void;
};

export function NavRail({ activeKey, onSelect }: Props) {
  const { t } = useLang();
  // Penghitung per tombol: naik saat hover supaya animasi ikon diputar ulang.
  // (Tidak saat fokus: fokus terjadi pada mousedown, dan memasang ulang ikon di antara
  // mousedown–mouseup bisa membuat click tidak terkirim.)
  const [pulse, setPulse] = useState<Record<string, number>>({});
  const bump = (key: string) => setPulse((p) => ({ ...p, [key]: (p[key] ?? 0) + 1 }));
  // Label rail = judul menu (ui.menuTitles), sama dengan pil di atas tiap kartu.
  const items = [
    { key: HOME_KEY, label: t(ui.menuTitles[HOME_KEY] ?? nav[0].label) },
    ...sections.map((s) => ({ key: s.key, label: t(ui.menuTitles[s.key] ?? s.label) })),
  ];

  return (
    <nav className="glass pill rail" aria-label={t(ui.a11y.sectionNav)}>
      <ul className="rail__list">
        {items.map(({ key, label }) => {
          const active = key === activeKey;
          return (
            <li key={key}>
              <button
                type="button"
                className="railbtn"
                aria-current={active ? "true" : undefined}
                aria-label={label}
                title={label}
                onClick={() => onSelect(key)}
                onMouseEnter={() => bump(key)}
              >
                {/* replayKey berubah saat hover/fokus atau saat item menjadi aktif → diputar ulang. */}
                <AnimatedIcon icon={ICONS[key] ?? home} replayKey={(active ? 1000 : 0) + (pulse[key] ?? 0)} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
