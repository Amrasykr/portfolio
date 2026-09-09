"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/content";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";
import { Dialog } from "./Dialog";

type Props = { open: boolean; onClose: () => void };

/* Formulir sederhana: nama, email, pesan → membuka aplikasi email dengan isi terisi. */
export function ContactDialog({ open, onClose }: Props) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `${t(ui.contact.subject)} ${name}`.trim();
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} labelledBy="contact-title">
      <h3 id="contact-title" className="t-card">
        {t(ui.workWithMe)}
      </h3>
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label htmlFor="contact-name" className="t-fine">
            {t(ui.contact.name)}
          </label>
          <input id="contact-name" className="input t-body" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="contact-email" className="t-fine">
            {t(ui.contact.email)}
          </label>
          <input id="contact-email" className="input t-body" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="contact-message" className="t-fine">
            {t(ui.contact.message)}
          </label>
          <textarea id="contact-message" className="input t-body" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <p className="t-meta text-txt3">{t(ui.contact.hint)}</p>
        <button type="submit" className="btn-accent t-side">
          {t(ui.contact.send)}
        </button>
      </form>
    </Dialog>
  );
}
