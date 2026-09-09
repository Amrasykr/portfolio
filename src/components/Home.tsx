"use client";

import type { CSSProperties } from "react";
import { profile, sections } from "@/data/content";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";
import { CountUp } from "./CountUp";
import { Media } from "./Media";

/* Urutan animasi masuk: --i dipakai CSS sebagai pengali jeda. */
const order = (i: number) => ({ "--i": i }) as CSSProperties;

type Line = { words: string[]; accent?: boolean };

/* Judul hero tiga baris: sapaan / nama (aksen) / peran; tiap kata muncul bergiliran. */
function heroLines(greeting: string, name: string, role: string): Line[] {
  const words = (v: string) => v.split(/\s+/).filter(Boolean);
  return [{ words: words(greeting) }, { words: words(name), accent: true }, { words: words(role) }];
}

/* Sampul (gambar pertama galeri) tiap proyek untuk tumpukan di kartu Introduce. */
const COVERS = (sections.find((s) => s.key === "proyek")?.items ?? [])
  .map((item) => item.gallery?.[0])
  .filter((m): m is NonNullable<typeof m> => Boolean(m))
  .slice(0, 4);

export function Home({ onProjects }: { onProjects: () => void }) {
  const covers = COVERS;
  const { t } = useLang();
  const lines = heroLines(t(ui.greeting), profile.name, t(profile.role));
  let seq = 0; // penghitung urutan lintas elemen di kartu

  return (
    /* Kartu panel awal; pil judul "Introduce" berada di luar (lihat Shell). */
    <div className="glass card home">
      {/* Tumpukan sampul proyek (kanan atas): merekah saat hover, klik → menu Projects. */}
      <button type="button" className="covers" onClick={onProjects} aria-label={t(ui.menuTitles.proyek)}>
        {covers.map((m, i) => (
          <span key={m.src} className="covers__item" style={{ "--n": i } as CSSProperties}>
            <Media src={m.src} alt="" ratio="16/10" radius="row" />
          </span>
        ))}
      </button>
      <p id="intro-title" className="t-hero">
        {lines.map((line, li) => (
          <span key={li} className={`line${line.accent ? " text-accent" : ""}`}>
            {line.words.map((w, wi) => (
              <span key={wi} className="w reveal" style={order(seq++)}>
                {wi === 0 ? w : ` ${w}`}
              </span>
            ))}
          </span>
        ))}
      </p>

      <div className="home__about hairline">
        <p className="t-lede reveal" style={order(seq++)}>
          {t(profile.summary)}
        </p>
        <dl className="stats">
          {ui.stats.map((stat, i) => {
            const idx = seq++;
            return (
              <div key={i} className="stat reveal" style={order(idx)}>
                {/* Angka mulai menghitung saat ubinnya mulai muncul (jeda reveal = idx × 70ms). */}
                <dt className="t-stat">
                  <CountUp value={stat.value} suffix={stat.suffix} delayMs={idx * 70} />
                </dt>
                <dd className="t-fine">{t(stat.label)}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
