"use client";

import { dictionary } from "./dictionary";
import { useLanguage } from "./LanguageProvider";

/**
 * Translatable text. Renders children (Thai source copy) unless the active
 * language has a dictionary entry for `k`.
 */
export default function T({ k, children }: { k: string; children?: React.ReactNode }) {
  const { lang } = useLanguage();
  if (lang === "th") return <>{children}</>;
  const value = (dictionary[lang] as Record<string, string>)[k];
  return <>{value ?? children}</>;
}
