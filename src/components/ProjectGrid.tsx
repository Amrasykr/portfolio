"use client";

import { useState } from "react";
import type { Item } from "@/data/content";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";
import { liveOf, orderItems } from "@/lib/items";
import { Dialog } from "./Dialog";
import { Gallery } from "./Gallery";
import { Media } from "./Media";
import { StatusPill } from "./StatusPill";
import { TechStack } from "./TechStack";

/* Ubin proyek: satu gambar sampul + judul; klik → dialog detail lengkap. */
export function ProjectGrid({ items }: { items: Item[] }) {
  const { t, tl } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);
  const sorted = orderItems(items, "proyek");
  const open = sorted.find((i) => i.id === openId) ?? null;

  return (
    <>
      <ul className="pgrid">
        {sorted.map((item) => {
          const live = liveOf(item);
          const cover = item.gallery?.[0];
          return (
            <li key={item.id} className="ptile">
              {cover && <Media src={cover.src} alt={t(cover.alt)} ratio="16/10" radius="row" />}
              <div className="ptile__text">
                <div className="tl__title">
                  <h3 id={`${item.id}-title`} className="t-card">
                    {item.title}
                  </h3>
                  {live && <StatusPill text={t(live)} />}
                </div>
                <p className="tl__sub t-meta">{t(item.subtitle)}</p>
                <span className="tl__period t-fine">{t(item.period)}</span>
                {item.tags && <TechStack tags={item.tags} />}
              </div>
              <button
                type="button"
                className="ptile__hit"
                aria-label={`${t(ui.viewDetails)}: ${item.title}`}
                onClick={() => setOpenId(item.id)}
              />
            </li>
          );
        })}
      </ul>

      <Dialog open={open !== null} onClose={() => setOpenId(null)} labelledBy={open ? `${open.id}-dialog-title` : ""}>
        {open && (
          <>
            <header className="card__top">
              <span className="card__logo">
                <Media src={open.logo} alt="" ratio="1/1" radius="icon" />
              </span>
              <div className="card__head">
                <h3 id={`${open.id}-dialog-title`} className="t-card">
                  {open.title}
                </h3>
                <p className="card__sub t-meta">
                  <span>{t(open.subtitle)}</span>
                  <span className="dot">{t(open.period)}</span>
                  <span className="dot">{t(open.place)}</span>
                </p>
              </div>
              {liveOf(open) && <StatusPill text={t(liveOf(open)!)} />}
            </header>

            <p className="t-body">{t(open.desc)}</p>

            {open.bullets && (
              <ul className="bullets t-body">
                {tl(open.bullets).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}

            {open.tags && <TechStack tags={open.tags} size={24} />}

            {/* Saat ini tiap proyek punya satu foto: tampilkan sampulnya saja, penuh lebar. */}
            {open.gallery?.[0] && <Gallery media={[open.gallery[0]]} label={t(ui.a11y.gallery)} />}

            {open.side.rows.length > 0 && (
              <div className="facts">
                <span className="facts__title t-fine">{t(open.side.title)}</span>
                <dl className="facts__rows">
                  {open.side.rows.map((row, i) => (
                    <div key={i} className="fact row">
                      <dt className="t-side">{t(row.k)}</dt>
                      <dd className="t-meta">{t(row.v)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </>
        )}
      </Dialog>
    </>
  );
}
