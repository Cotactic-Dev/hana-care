"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { KEY_EVENTS, onAnalyticsEvent, trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { useUI } from "@/components/ui/UIProvider";

const DEBUG = process.env.NEXT_PUBLIC_GA4_DEBUG === "true";

/**
 * - Fires page_view on every client-side route change (DOMContentLoaded only fires once in Next).
 * - Delegated click tracking for server-rendered elements: data-track="event" data-track-params='{"k":"v"}'
 * - Optional GA4 debug inspector (NEXT_PUBLIC_GA4_DEBUG=true).
 */
export default function AnalyticsProvider() {
  const pathname = usePathname();
  const { showToast } = useUI();
  const [logs, setLogs] = useState<AnalyticsEvent[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    trackEvent("page_view", { page_title: document.title, page_location: window.location.href });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      let params: Record<string, unknown> = {};
      try {
        params = el.dataset.trackParams ? JSON.parse(el.dataset.trackParams) : {};
      } catch {}
      trackEvent(el.dataset.track!, params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!DEBUG) return;
    return onAnalyticsEvent((e) => {
      console.log(`%c[GA4 / GTM Event] %c${e.event}`, "color:#10B981;font-weight:bold", "font-weight:bold", e);
      setLogs((l) => [e, ...l].slice(0, 30));
      if (KEY_EVENTS.includes(e.event)) showToast(`📊 Event Tracked: ${e.event}`, "info");
    });
  }, [showToast]);

  if (!DEBUG) return null;

  return (
    <>
      <div
        className="ga4-inspector-badge"
        onClick={() => setPanelOpen((o) => !o)}
        title="คลิกเพื่อดู Event ที่ถูกส่งไปยัง Google Analytics 4 / GTM"
      >
        <div className="ga4-pulse-dot"></div>
        <span>GA4 Live Events Tracker</span>
      </div>
      <div className="ga4-modal" style={{ display: panelOpen ? "block" : "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
            borderBottom: "1px solid #374151",
            paddingBottom: 8,
          }}
        >
          <h4 style={{ color: "#10B981", margin: 0, fontSize: "1rem" }}>📊 GA4 / GTM DataLayer Stream</h4>
          <button onClick={() => setPanelOpen(false)} style={{ color: "#9CA3AF", fontSize: "1.2rem", cursor: "pointer" }}>
            &times;
          </button>
        </div>
        <div>
          {logs.length === 0 ? (
            <p style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>ยังไม่มี Event ที่ถูกทริกเกอร์</p>
          ) : (
            logs.map((log, i) => (
              <div className="ga4-log-entry" key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <strong style={{ color: "#10B981" }}>{log.event}</strong>
                  <span style={{ color: "#9CA3AF", fontSize: "0.75rem" }}>{log.timestamp}</span>
                </div>
                <pre style={{ margin: 0, fontSize: "0.72rem", color: "#E5E7EB", whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(log, null, 2)}
                </pre>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
