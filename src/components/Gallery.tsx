"use client";

import type { Media as MediaT } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Media } from "./Media";

type Props = { media: MediaT[]; label: string };

/* Kisi statis: 2 gambar → 2 kolom, 3 gambar → 3 kolom. (Versi beranimasi ditunda.) */
export function Gallery({ media, label }: Props) {
  const { t } = useLang();
  return (
    <ul className={`gal gal--${Math.min(media.length, 3)}`} aria-label={label}>
      {media.map((m) => (
        <li key={m.src}>
          <Media src={m.src} alt={t(m.alt)} ratio="16/10" radius="row" />
        </li>
      ))}
    </ul>
  );
}
