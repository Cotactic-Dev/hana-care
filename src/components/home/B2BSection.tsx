import Icon from "@/components/ui/Icon";
import Link from "next/link";

const SEGMENTS = [
  { icon: "house" as const, title: "ศูนย์ดูแลผู้สูงอายุ", text: "เตียงมาตรฐานญี่ปุ่นจำนวนมาก พร้อมแผนลีสซิ่งระยะยาวที่ช่วยบริหารกระแสเงินสด" },
  { icon: "hospital" as const, title: "โรงพยาบาลและคลินิก", text: "เสริมเตียงสำหรับหอผู้ป่วยหรือโปรแกรม Home Care หลังจำหน่ายผู้ป่วยกลับบ้าน" },
  { icon: "handshake" as const, title: "ผู้ให้บริการ Home Care", text: "เป็นพันธมิตรจัดหาเตียงให้ลูกค้าของคุณ พร้อมบริการส่ง ติดตั้ง และซ่อมบำรุง" },
];

export default function B2BSection() {
  return (
    <section id="for-business" className="section bg-hana-gradient-soft">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="section-tag">FOR BUSINESS</span>
            <h2 className="section-title mt-2 text-left!">สำหรับองค์กรและสถานพยาบาล</h2>
            <p className="mb-6 text-ink-muted">
              Hana Care ดูแลลูกค้าองค์กรด้วยสัญญาลีสซิ่งระยะยาว ราคาพิเศษตามจำนวน
              และทีมดูแลเฉพาะ ภายใต้ความมั่นคงของ บมจ. ภัทรลิสซิ่ง ผู้เชี่ยวชาญด้านลีสซิ่งมากว่า 35 ปี
            </p>
            <ul className="mb-8 space-y-2 text-sm">
              {["ใบเสนอราคาสำหรับองค์กร / ตามจำนวนเตียง", "สัญญาลีสซิ่งระยะยาว ยืดหยุ่นตามงบประมาณ", "บริการติดตั้งและซ่อมบำรุงตามรอบ"].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-hana-purple"><Icon name="check" /></span> {t}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us/?type=business#rental-form"
              className="btn btn-primary"
              data-track="click_b2b_cta"
            >
              ขอใบเสนอราคาสำหรับองค์กร →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="rounded-[var(--radius-md)] bg-white p-6 shadow-card">
                <div className="mb-3 text-3xl text-hana-purple"><Icon name={s.icon} /></div>
                <h3 className="mb-2 font-semibold text-hana-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
