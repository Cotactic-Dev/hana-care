"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { dictionary, type DictKey, type Lang } from "./dictionary";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string };

const LanguageContext = createContext<Ctx>({
  lang: "th",
  setLang: () => {},
  t: (k) => dictionary.th[k],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");

  useEffect(() => {
    document.body.classList.toggle("lang-en", lang === "en");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    trackEvent("language_change", { language: l });
  }, []);

  const t = useCallback((k: DictKey) => dictionary[lang][k] ?? dictionary.th[k], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
