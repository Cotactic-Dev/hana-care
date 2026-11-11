import Icon from "@/components/ui/Icon";
// Public, customer-facing journey (6 steps). Internal ops steps (MIC, PL, reconciliation) are intentionally omitted.
const STEPS = [
  { icon: "phone" as const, title: "ติดต่อและประเมินความต้องการ", text: "กรอกฟอร์ม โทร หรือแอด LINE เล่าอาการและสภาพห้องของผู้ใช้งาน ทีมงานช่วยประเมินรุ่นที่เหมาะสม" },
  { icon: "bed" as const, title: "เลือกรุ่นและแพ็กเกจ", text: "แนะนำรุ่นเตียงและรูปแบบสัญญา เช่าระยะสั้น ลีสซิ่ง หรือเช่าเพื่อเป็นเจ้าของ พร้อมใบเสนอราคา" },
  { icon: "pen" as const, title: "ทำสัญญาและชำระงวดแรก", text: "ลงนามสัญญาที่ชัดเจน โปร่งใส และชำระเงินงวดแรกสะดวกผ่าน QR Code" },
  { icon: "truck" as const, title: "จัดส่ง ติดตั้ง และสาธิต", text: "ทีมผู้เชี่ยวชาญส่งและติดตั้งถึงห้องนอน พร้อมสอนการใช้งานอย่างปลอดภัยให้ผู้ดูแล" },
  { icon: "wrench" as const, title: "ดูแลตลอดการใช้งาน", text: "แจ้งปัญหาได้ทางโทรศัพท์หรือ LINE ทีมงานช่วยแก้ไขทางไกลหรือส่งช่างเข้าไปดูแลถึงบ้าน" },
  { icon: "refresh" as const, title: "ต่อสัญญา หรือคืนเตียง", text: "แจ้งเตือนก่อนครบสัญญา เลือกต่ออายุได้ หรือนัดเก็บเตียงคืนถึงบ้านอย่างสะดวก" },
];

export default function ServiceJourney() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">HOW IT WORKS</span>
          <h2 className="section-title">เช่าเตียงกับ Hana Care ง่ายใน 6 ขั้นตอน</h2>
          <p className="section-desc">ตั้งแต่วันแรกที่ติดต่อจนถึงวันที่ผู้ป่วยหายดี เราดูแลครบทุกขั้นตอน ครอบครัวโฟกัสกับการดูแลคนที่รักได้เต็มที่</p>
        </div>

        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-[var(--radius-md)] border border-warm-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-hover"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-hana-gradient text-base font-bold text-white shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl"><Icon name={s.icon} /></span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-hana-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a href="#rental-form" className="btn btn-primary btn-lg" data-track="click_journey_cta">
            เริ่มต้นขั้นตอนที่ 1 — ให้แอดมินติดต่อกลับ
          </a>
        </div>
      </div>
    </section>
  );
}
