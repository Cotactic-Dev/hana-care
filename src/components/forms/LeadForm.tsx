"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { useUI } from "@/components/ui/UIProvider";

type Props = React.FormHTMLAttributes<HTMLFormElement> & { children: React.ReactNode };

/**
 * Consultation / quote form (replaces handleConsultationForm in app.js).
 * Markup stays in the page; this wrapper handles validation, GA4 generate_lead and redirect.
 * Expected field names: fullName, phone, preferredModel, interestType, province?, lineId?, pdpaConsent.
 *
 * TODO(backend): POST to CRM / email (e.g. a Route Handler at /api/leads) before redirect.
 */
export default function LeadForm({ children, ...rest }: Props) {
  const router = useRouter();
  const { showToast } = useUI();
  const ref = useRef<HTMLFormElement>(null);

  // Prefill selects from the URL: ?model=<slug>&plan=<id>&type=business
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const pick = (name: string, value: string | null) => {
      const select = ref.current?.querySelector<HTMLSelectElement>(`select[name=${name}]`);
      if (!value || !select) return;
      const v = value.toLowerCase();
      const idx = Array.from(select.options).findIndex((o) => o.value === v || o.text.toLowerCase().includes(v));
      if (idx >= 0) select.selectedIndex = idx;
    };
    pick("preferredModel", qs.get("model"));
    pick("interestType", qs.get("plan"));
    pick("customerType", qs.get("type"));
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (...keys: string[]) => String(keys.map((k) => fd.get(k)).find((v) => v != null) ?? "").trim();
    const name = get("fullName", "name");
    const phone = get("phone");
    const form = e.currentTarget;
    const label = (n: string) => form.querySelector<HTMLSelectElement>(`select[name=${n}]`)?.selectedOptions[0]?.text ?? "";
    const model = get("preferredModel");
    const interest = get("interestType", "interest_type");
    const customerType = get("customerType") || "family";
    const province = get("province");

    if (!name || !phone) {
      showToast("กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับติดต่อกลับครับ", "info");
      return;
    }
    if (!fd.get("pdpaConsent") && !fd.get("pdpa")) {
      showToast("กรุณากดยินยอมการประมวลผลข้อมูลส่วนบุคคล (PDPA) ครับ", "info");
      return;
    }

    trackEvent("generate_lead", {
      lead_type: "rental_request",
      customer_type: customerType,
      preferred_model: model,
      interest_type: interest,
      province: province || "Bangkok",
    });

    // PDPA: keep name/phone out of the URL (URLs end up in GA page_location, logs, referrers)
    try {
      sessionStorage.setItem("phatra_lead", JSON.stringify({ name, phone, model: label("preferredModel") || model, plan: label("interestType") }));
    } catch {}
    router.push("/thank-you/");
  }

  return (
    <form ref={ref} onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
}
