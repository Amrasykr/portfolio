import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data/content";
import { ui } from "@/data/ui";
import { LangProvider } from "@/lib/lang";
import { Background } from "@/components/Background";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

/* URL situs untuk og:url dan URL absolut gambar OG (WhatsApp/LinkedIn menuntut absolut).
   Atur NEXT_PUBLIC_SITE_URL di Vercel bila memakai domain sendiri; kalau tidak, URL produksi Vercel. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: ui.pageTitle,
  description: ui.metaDescription[ui.defaultLang],
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: ui.pageTitle,
    description: ui.metaDescription[ui.defaultLang],
    locale: ui.defaultLang === "en" ? "en_US" : "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: ui.pageTitle,
    description: ui.metaDescription[ui.defaultLang],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={ui.defaultLang} className={jakarta.variable}>
      <body>
        <Background />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
