"use client";

import { createContext, useContext, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const FILTERS = [
  { value: "all", label: "ทั้งหมด (6)" },
  { value: "guide", label: "คู่มือการเลือกเตียง" },
  { value: "care", label: "การดูแลผู้ป่วยติดเตียง" },
  { value: "elderly", label: "สุขภาพผู้สูงอายุ" },
  { value: "rental", label: "สิทธิประโยชน์ & การเช่า" },
];

const FilterCtx = createContext<{ filter: string; setFilter: (f: string) => void }>({
  filter: "all",
  setFilter: () => {},
});

/** Wrap the page; hiding is pure CSS via [data-article-filter] (see globals.css). */
export function ArticleFilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState("all");
  return (
    <FilterCtx.Provider value={{ filter, setFilter }}>
      <div data-article-filter={filter}>{children}</div>
    </FilterCtx.Provider>
  );
}

export function ArticleFilterButtons() {
  const { filter, setFilter } = useContext(FilterCtx);
  return (
    <div className="articles-filter-container">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          className={`filter-btn${filter === f.value ? " active" : ""}`}
          aria-pressed={filter === f.value}
          onClick={() => {
            setFilter(f.value);
            trackEvent("filter_articles", { category: f.value });
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
