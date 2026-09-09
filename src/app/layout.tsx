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

export const metadata: Metadata = {
  title: ui.pageTitle,
  description: profile.summary[ui.defaultLang],
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
