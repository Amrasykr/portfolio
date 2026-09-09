"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang, T, TL } from "@/data/content";
import { ui } from "@/data/ui";

// Kunci diberi versi: nilai "id" yang tersimpan dari masa bawaan lama harus diabaikan
// agar bawaan baru (Inggris) benar-benar berlaku bagi pengunjung yang pernah datang.
const STORAGE_KEY = "lang.v2";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: T) => string;
  tl: (value: TL) => string[];
};

const LangContext = createContext<LangContextValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === "id" || value === "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(ui.defaultLang);
  const [hydrated, setHydrated] = useState(false);

  // Baca pilihan tersimpan setelah mount supaya render awal tetap bahasa awal.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      /* localStorage tidak tersedia */
    }
    setHydrated(true);
  }, []);

  // Simpan pilihan dan sinkronkan <html lang>.
  useEffect(() => {
    document.documentElement.lang = lang;
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* abaikan */
    }
  }, [lang, hydrated]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const t = useCallback((value: T) => value[lang], [lang]);
  const tl = useCallback((value: TL) => value[lang], [lang]);

  const ctx = useMemo(() => ({ lang, setLang, t, tl }), [lang, setLang, t, tl]);

  return <LangContext.Provider value={ctx}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang harus dipakai di dalam <LangProvider>");
  return ctx;
}
