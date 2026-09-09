"use client";

import type { Item } from "@/data/content";
import { useLang } from "@/lib/lang";
import { liveOf, orderItems } from "@/lib/items";
import { Media } from "./Media";
import { StatusPill } from "./StatusPill";

type Props = { items: Item[]; sectionKey: string; /** false = tanpa garis penghubung */ line?: boolean };

/**
 * Linimasa vertikal: logo menjadi simpul pada garis. Urutan: judul + pil status, subjudul,
 * lalu periode · tempat di baris kecil; Academic + baris IPK (side.rows[0]). Tanpa deskripsi pekerjaan.
 */
export function Timeline({ items, sectionKey, line = true }: Props) {
  const { t } = useLang();

  return (
    <ol className={line ? "timeline" : "timeline timeline--plain"}>
      {orderItems(items, sectionKey).map((item) => {
        const live = liveOf(item);
        const place = t(item.place);
        const showPlace = place.trim() !== "—";
        const gpa = sectionKey === "pendidikan" ? item.side.rows[0] : undefined;
        const titleId = `${item.id}-title`;

        return (
          <li key={item.id} className="tl" aria-labelledby={titleId}>
            <span className="tl__node card__logo">
              <Media src={item.logo} alt="" ratio="1/1" radius="icon" />
            </span>
            <div className="tl__body">
              <div className="tl__title">
                <h3 id={titleId} className="t-card">
                  {item.title}
                </h3>
                {live && <StatusPill text={t(live)} />}
              </div>
              <p className="tl__sub t-meta">{t(item.subtitle)}</p>
              <span className="tl__period t-fine">
                {t(item.period)}
                {showPlace && <span className="dot">{place}</span>}
              </span>
              {gpa && (
                <p className="tl__gpa t-meta">
                  <span className="text-txt font-semibold">{t(gpa.k)}</span>
                  <span className="dot">{t(gpa.v)}</span>
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
