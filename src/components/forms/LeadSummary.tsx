"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Lead = { name?: string; phone?: string; model?: string; plan?: string };

/** Thank-you page summary. Reads the lead stored by LeadForm (never from the URL). */
export default function LeadSummary() {
  const [lead, setLead] = useState<Lead>({});
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    let data: Lead = {};
    try {
      data = JSON.parse(sessionStorage.getItem("phatra_lead") || "{}");
    } catch {}
    setLead(data);
    // No PII in analytics payloads
    trackEvent("lead_submission_success", { model_requested: data.model || "unspecified" });
  }, []);

  return (
    <div style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
      <div>
        • <strong>ผู้ติดต่อ:</strong> <span>{lead.name || "คุณลูกค้า"}</span>
      </div>
      <div>
        • <strong>เบอร์โทรศัพท์:</strong> <span>{lead.phone || "ได้รับข้อมูลแล้ว"}</span>
      </div>
      <div>
        • <strong>รุ่นที่สนใจ:</strong> <span>{lead.model || "เตียงปรับระดับ Hana Care"}</span>
      </div>
      {lead.plan && (
        <div>
          • <strong>รูปแบบบริการ:</strong> <span>{lead.plan}</span>
        </div>
      )}
      <div>
        • <strong>สถานะการประสานงาน:</strong>{" "}
        <span style={{ color: "var(--success)", fontWeight: 600 }}>กำลังส่งต่อทีมผู้เชี่ยวชาญ</span>
      </div>
    </div>
  );
}
