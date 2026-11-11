"use client";

import { useEffect } from "react";

export default function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`modal-overlay${open ? " active" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-hidden={!open}
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 id="privacy-title" style={{ fontSize: "1.5rem", color: "var(--primary-dark)" }}>
            นโยบายความเป็นส่วนตัว (PDPA)
          </h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="ปิด">
            &times;
          </button>
        </div>
        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
          <p style={{ marginBottom: 14 }}>
            บริษัท ภัทรลิสซิ่ง จำกัด (มหาชน) (&quot;บริษัท&quot;) ให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลของท่าน
            ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
          </p>
          <p style={{ marginBottom: 14 }}>
            <strong>1. วัตถุประสงค์ในการเก็บรวบรวมข้อมูล:</strong> เราเก็บรวบรวมข้อมูลชื่อ เบอร์โทรศัพท์ LINE ID
            และข้อมูลที่ท่านระบุเพื่อการติดต่อกลับ ให้คำปรึกษา จัดทำใบเสนอราคา ประสานงานจัดส่ง และให้บริการหลังการขายเท่านั้น
          </p>
          <p>ท่านสามารถติดต่อขอใช้สิทธิ์ในการเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลได้ที่ Call Center 02-290-7575</p>
        </div>
      </div>
    </div>
  );
}
