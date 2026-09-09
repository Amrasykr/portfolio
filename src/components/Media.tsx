"use client";

import { useEffect, useRef, useState } from "react";
import { ui } from "@/data/ui";
import { useLang } from "@/lib/lang";

export type Ratio = "16/10" | "4/3" | "1/1";
type Radius = "row" | "icon" | "pill";

type Props = {
  /** Path relatif terhadap public/img/, persis seperti di content.ts. */
  src: string;
  /** Kosongkan ("") untuk gambar dekoratif yang labelnya sudah ada di sebelahnya. */
  alt: string;
  ratio: Ratio;
  radius?: Radius;
  className?: string;
};

/**
 * Semua gambar lewat sini. Kalau berkas tidak ada atau gagal dimuat,
 * tampil kotak placeholder berisi path berkas yang diharapkan.
 */
export function Media({ src, alt, ratio, radius = "row", className = "" }: Props) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  // Path lokal, atau URL contoh sementara bila dipetakan di ui.sampleImages.
  const external = ui.sampleImages[src];
  const path = external ?? `img/${src}`;
  const url = external ?? `/${path}`;

  // Deteksi muat/gagal lewat event asli (juga menangkap kegagalan sebelum hidrasi lewat
  // pemeriksaan `complete`). JANGAN memanggil decode() pada gambar lazy yang belum mulai
  // dimuat: decode() menolak dan gambar sehat akan dianggap gagal.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let alive = true;
    const fail = () => {
      if (alive) setFailed(true);
    };
    const ok = () => {
      if (alive) setLoaded(true);
    };
    if (img.complete) {
      if (img.naturalWidth === 0) fail();
      else img.decode().then(ok).catch(ok); // sudah termuat; decode hanya mempercepat paint
    }
    img.addEventListener("load", ok);
    img.addEventListener("error", fail);
    return () => {
      alive = false;
      img.removeEventListener("load", ok);
      img.removeEventListener("error", fail);
    };
  }, [src]);

  const decorative = alt === "";
  // Ikon, logo, dan avatar kecil dimuat langsung; galeri dan sorotan malas.
  const loading = ratio === "1/1" ? "eager" : "lazy";

  return (
    <figure
      className={`media media--${radius} ${className}`.trim()}
      data-loaded={loaded && !failed ? "" : undefined}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      {failed ? (
        <div
          className="ph t-meta"
          title={path}
          {...(decorative
            ? { "aria-hidden": true }
            : { role: "img", "aria-label": `${t(ui.a11y.missingImage)}: ${alt}` })}
        >
          <span>{path}</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={url}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
}
