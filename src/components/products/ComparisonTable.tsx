"use client";

import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { formatTHB, products } from "@/data/products";
import SampleBadge from "@/components/ui/SampleBadge";

const check = (label?: string) => (
  <>
    <span className="table-check"><Icon name="check" /></span>
    {label ? ` ${label}` : null}
  </>
);
const dash = (label?: string) => (
  <>
    <span className="table-dash">—</span>
    {label ? ` ${label}` : null}
  </>
);

const ROWS: { label: React.ReactNode; cells: React.ReactNode[] }[] = [
  { label: "ระดับ", cells: products.map((p) => p.tier) },
  { label: "จุดเด่น", cells: ["โครงสร้าง 8 ชิ้นส่วน ขนย้ายง่าย", "ขนาด Semi-double กรอบไม้", "ปรับ 4 ท่า นอน เอน นั่ง ยืน"] },
  { label: "เหมาะกับพื้นที่จำกัด", cells: [check("เหมาะมาก"), dash("ต้องการพื้นที่มากขึ้น"), check("เหมาะ")] },
  { label: "ดีไซน์เหมือนเฟอร์นิเจอร์บ้าน", cells: [dash(), check("กรอบไม้"), dash()] },
  { label: "ช่วยพยุงลุกนั่ง-ยืน", cells: [dash(), dash(), check("ท่านั่งและยืน")] },
  { label: "ผู้ใช้งานที่เหมาะสม", cells: ["ผู้สูงอายุที่ยังช่วยเหลือตัวเองได้", "ผู้พักฟื้นระยะยาว", "ผู้ป่วยที่ต้องการการดูแลสูง"] },
  { label: "ผลิตโดย France Bed / ขึ้นทะเบียน อย.", cells: [check(), check(), check()] },
  {
    label: (
      <>
        เช่าระยะสั้น / เดือน <SampleBadge />
      </>
    ),
    cells: products.map((p) => <strong key={p.slug}>{formatTHB(p.monthly.short)}</strong>),
  },
  {
    label: (
      <>
        ลีสซิ่งระยะยาว / เดือน <SampleBadge />
      </>
    ),
    cells: products.map((p) => formatTHB(p.monthly.lease)),
  },
  {
    label: (
      <>
        เช่าเพื่อเป็นเจ้าของ / เดือน <SampleBadge />
      </>
    ),
    cells: products.map((p) => formatTHB(p.monthly.rto)),
  },
  {
    label: "",
    cells: products.map((p, i) => (
      <Link key={p.slug} href={`/patient-beds/${p.slug}/`} className={`btn ${i === 1 ? "btn-primary" : "btn-secondary"} btn-sm w-full`}>
        ดูรุ่นนี้
      </Link>
    )),
  },
];

export default function ComparisonTable() {
  const [col, setCol] = useState(2);
  const hl = (i: number) => (i === col ? "col-highlight" : undefined);

  const select = (i: number) => {
    setCol(i);
    trackEvent("view_product_comparison", { highlighted_column: i, model: products[i - 1]?.slug });
  };

  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>คุณสมบัติ / รุ่น</th>
            {products.map((p, i) => (
              <th key={p.slug} className={hl(i + 1)} style={{ cursor: "pointer" }} onClick={() => select(i + 1)} scope="col">
                {p.modelName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, ri) => (
            <tr key={ri}>
              <td>{r.label}</td>
              {r.cells.map((c, i) => (
                <td key={i} className={hl(i + 1)}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
