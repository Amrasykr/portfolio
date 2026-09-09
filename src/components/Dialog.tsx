"use client";

import { animate } from "animejs";
import { useEffect, useRef, type ReactNode } from "react";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";

type Props = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
};

/**
 * Modal berbasis <dialog>: ::backdrop mengaburkan halaman, panelnya kaca cair. Tutup lewat
 * tombol ×, Esc, atau klik di luar panel. Gulir halaman dikunci selama terbuka.
 */
export function Dialog({ open, onClose, labelledBy, children }: Props) {
  const { t } = useLang();
  const ref = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Event `close` native (Esc, tombol ×, klik backdrop → d.close()) dipasang langsung pada
  // elemen: prop onClose React tidak selalu menerimanya, sehingga state induk bisa tertinggal.
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handle = () => {
      document.documentElement.style.overflow = "";
      onCloseRef.current();
    };
    d.addEventListener("close", handle);
    return () => d.removeEventListener("close", handle);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
      const panel = panelRef.current;
      if (panel && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animate(panel, { opacity: [0, 1], scale: [0.96, 1], y: [14, 0], duration: 380, ease: "outCubic" });
      }
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby={labelledBy}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close(); // klik pada backdrop
      }}
    >
      {open && (
        <div ref={panelRef} className="glass card dialog__panel">
          <button type="button" className="dialog__close" aria-label={t(ui.close)} onClick={() => ref.current?.close()}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            </svg>
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
