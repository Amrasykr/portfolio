import { ImageResponse } from "next/og";
import { profile } from "@/data/content";
import { ui } from "@/data/ui";

export const alt = ui.pageTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: "#141416",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: 40,
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 20,
            background: "rgba(255,255,255,0.055)",
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{profile.name}</div>
          <div style={{ fontSize: 32, color: "#a8adb5" }}>
            {`${profile.role[ui.defaultLang]} · ${profile.location[ui.defaultLang]}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
