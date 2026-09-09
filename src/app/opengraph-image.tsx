import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/content";
import { ui } from "@/data/ui";

export const alt = ui.pageTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Kartu pratinjau tautan: foto profil + nama + peran, warna merek (navy/biru muda favicon). */
export default async function OpenGraphImage() {
  const lang = ui.defaultLang;
  let photo: string | null = null;
  try {
    const buf = await readFile(path.join(process.cwd(), "public", "img", profile.avatar));
    photo = `data:image/jpeg;base64,${buf.toString("base64")}`;
  } catch {
    photo = null; // tanpa foto bila berkas belum ada
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 88px",
          background: "#05283A", /* polos: PNG lebih kecil (WhatsApp membatasi ±300 KB) */
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {photo && (
          <img
            src={photo}
            width={320}
            height={320}
            alt=""
            style={{ width: 320, height: 320, objectFit: "cover", borderRadius: 48, border: "6px solid rgba(144,210,245,0.45)" }}
          />
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#90D2F5", fontWeight: 700 }}>PORTFOLIO</div>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 42, fontWeight: 600, color: "#90D2F5" }}>{profile.role[lang]}</div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)", marginTop: 10 }}>{profile.location[lang]}</div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.9)" }}>{profile.links.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
