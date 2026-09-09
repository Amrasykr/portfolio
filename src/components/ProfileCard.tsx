"use client";

import { profile } from "@/data/content";
import { ui } from "@/data/ui";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { ContactDialog } from "./ContactDialog";
import { LangToggle } from "./LangToggle";
import { Media } from "./Media";
import { SocialLinks } from "./SocialLinks";

export function ProfileCard() {
  const { t, lang } = useLang();
  const cvHref = ui.cvByLang[lang] ?? profile.links.cv; // CV mengikuti bahasa aktif
  const [contactOpen, setContactOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <aside className="col-sticky">
      <section className="glass profilecard" aria-labelledby="profile-name">
        <header className="profilecard__top">
          <h1 id="profile-name" className="t-brand">
            {profile.name}
          </h1>
          <p className="profilecard__role t-meta">{t(profile.role)}</p>
        </header>

        {/* Foto persegi berujung bulat, bukan lingkaran (sesuai referensi). */}
        <div className="profilecard__photo">
          <Media src={profile.avatar} alt={profile.name} ratio="1/1" radius="row" />
        </div>

        <div className="profilecard__meta">
          <a className="profilecard__email t-meta" href={`mailto:${profile.links.email}`}>
            {profile.links.email}
          </a>
          <p className="t-side">{t(profile.location)}</p>
        </div>

        <SocialLinks />

        <button type="button" className="btn-accent t-side profilecard__cta" onClick={() => setContactOpen(true)}>
          {t(ui.workWithMe)}
        </button>
        <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />

        <div className="profilecard__actions">
          <a className="cvbtn dashed t-side" href={cvHref} download>
            {t(profile.downloadCv)}
          </a>
          <LangToggle />
        </div>

        <p className="rights t-fine">
          © {year} {profile.name}. {ui.rights}
        </p>
      </section>
    </aside>
  );
}
