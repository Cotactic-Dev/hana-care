"use client";

import Icon from "@/components/ui/Icon";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import PrivacyModal from "./PrivacyModal";

type ToastType = "success" | "info";
type Toast = { id: number; message: string; type: ToastType; leaving?: boolean };

type Ctx = {
  showToast: (message: string, type?: ToastType) => void;
  openPrivacy: () => void;
};

const UIContext = createContext<Ctx>({ showToast: () => {}, openPrivacy: () => {} });

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const idRef = useRef(0);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.map((x) => (x.id === id ? { ...x, leaving: true } : x))), 4000);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4300);
  }, []);

  const openPrivacy = useCallback(() => setPrivacyOpen(true), []);

  // Delegated handler for server-rendered links marked data-action="open-privacy"
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-action="open-privacy"]');
      if (!el) return;
      e.preventDefault();
      setPrivacyOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <UIContext.Provider value={{ showToast, openPrivacy }}>
      {children}
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      {toasts.length > 0 && (
        <div className="toast-container" aria-live="polite">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`toast toast-${t.type}`}
              style={t.leaving ? { opacity: 0, transform: "translateX(100%)", transition: "all 0.3s ease" } : undefined}
            >
              <span><Icon name={t.type === "success" ? "check-circle" : "info"} /></span>
              <div>{t.message}</div>
            </div>
          ))}
        </div>
      )}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
