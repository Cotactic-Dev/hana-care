// GA4 / GTM dataLayer helper (replaces trackGA4Event from assets/js/app.js)

export type AnalyticsEvent = {
  event: string;
  timestamp: string;
  page: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type Listener = (e: AnalyticsEvent) => void;
const listeners = new Set<Listener>();

export function onAnalyticsEvent(fn: Listener) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload: AnalyticsEvent = {
    event: eventName,
    timestamp: new Date().toLocaleTimeString(),
    page: window.location.pathname,
    ...params,
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  listeners.forEach((fn) => fn(payload));
}

/** Events that show a debug toast when NEXT_PUBLIC_GA4_DEBUG=true */
export const KEY_EVENTS = ["generate_lead", "click_line", "click_call", "select_item", "view_item"];
