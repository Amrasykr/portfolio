"use client";

import { useEffect, useRef, useState } from "react";
import { nav, sections } from "@/data/content";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";
import { Home } from "./Home";
import { ProjectGrid } from "./ProjectGrid";
import { RevealOnScroll } from "./RevealOnScroll";
import { HOME_KEY, NavRail } from "./NavRail";
import { ProfileCard } from "./ProfileCard";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Timeline } from "./Timeline";

/* Urutan section di halaman = urutan ikon di rail. */
const KEYS = [HOME_KEY, ...sections.map((s) => s.key)];

/* Garis acuan: section yang tepinya sudah melewati 35% tinggi viewport dianggap aktif. */
const SPY_LINE = 0.35;

export function Shell() {
  const { t } = useLang();
  const [active, setActive] = useState<string>(HOME_KEY);
  // Saat menggulir lewat klik rail, tahan scroll-spy sampai section tujuan tercapai
  // supaya ikon tidak berkedip melewati section di antaranya.
  const lockRef = useRef<string | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * SPY_LINE;
      let current = KEYS[0];
      for (const key of KEYS) {
        const el = document.getElementById(key);
        if (el && el.getBoundingClientRect().top <= line) current = key;
      }
      // Di dasar halaman, section terakhir dianggap aktif walau tidak mencapai garis acuan.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = KEYS[KEYS.length - 1];

      if (lockRef.current) {
        if (lockRef.current !== current) return;
        lockRef.current = null;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const jump = (key: string) => {
    lockRef.current = key;
    setActive(key);
    // Kelancaran gulir mengikuti `scroll-behavior` di CSS (dimatikan pada reduced-motion).
    document.getElementById(key)?.scrollIntoView({ block: "start" });
    window.setTimeout(() => {
      lockRef.current = null;
    }, 1500);
  };

  return (
    <div className="page">
      <div className="layout">
        <ProfileCard />

        {/* Satu aliran: tiap menu = pil judul di luar + SATU kartu berisi semua entrinya. */}
        <main className="stack">
          <section id={HOME_KEY} className="menu" aria-labelledby={`menu-${HOME_KEY}`}>
            <h2 id={`menu-${HOME_KEY}`} className="chiplabel t-fine">
              {t(ui.menuTitles[HOME_KEY] ?? nav[0].label)}
            </h2>
            <Home onProjects={() => jump("proyek")} />
          </section>
          {sections.map((section) => (
            <section key={section.key} id={section.key} className="menu" aria-labelledby={`menu-${section.key}`}>
              <h2 id={`menu-${section.key}`} className="chiplabel t-fine">
                {t(ui.menuTitles[section.key] ?? section.label)}
              </h2>
              <RevealOnScroll className="glass card" selector=".tl, .ptile, .service">
                {section.key === "keterampilan" ? (
                  <>
                    <Skills section={section} />
                    <Services />
                  </>
                ) : section.key === "proyek" ? (
                  <ProjectGrid items={section.items} />
                ) : (
                  <Timeline items={section.items} sectionKey={section.key} line={section.key !== "pelatihan"} />
                )}
              </RevealOnScroll>
            </section>
          ))}
        </main>
      </div>

      <NavRail activeKey={active} onSelect={jump} />
    </div>
  );
}
