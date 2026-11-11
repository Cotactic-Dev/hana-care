import LeadForm from "./LeadForm";
import { products, rentalPlans, type PlanId, type ProductSlug } from "@/data/products";

/**
 * Phase 1 lead form: "ขอเช่าเตียง — ให้แอดมินติดต่อกลับ".
 * No checkout / payment (that is Phase 2 e-commerce).
 * Prefills from ?model=<slug>&plan=<id>&type=business (handled in LeadForm).
 */
export default function RentalLeadForm({
  defaultModel,
  defaultPlan = "short",
  submitLabel = "ส่งข้อมูล ให้แอดมินติดต่อกลับ →",
}: {
  defaultModel?: ProductSlug;
  defaultPlan?: PlanId;
  submitLabel?: string;
}) {
  return (
    <LeadForm>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="preferredModel">
            รุ่นเตียงที่สนใจ
          </label>
          <select id="preferredModel" name="preferredModel" className="form-control" defaultValue={defaultModel ?? "unsure"}>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.modelName} — {p.tier}
              </option>
            ))}
            <option value="unsure">ยังไม่แน่ใจ ขอคำแนะนำจากเจ้าหน้าที่</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="interestType">
            รูปแบบบริการ
          </label>
          <select id="interestType" name="interestType" className="form-control" defaultValue={defaultPlan}>
            {rentalPlans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.term})
              </option>
            ))}
            <option value="consult">ยังไม่แน่ใจ ขอคำปรึกษา</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            ชื่อ - นามสกุล *
          </label>
          <input type="text" id="fullName" name="fullName" className="form-control" placeholder="เช่น คุณวิภา สุขสมบูรณ์" autoComplete="name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            เบอร์โทรศัพท์ติดต่อกลับ *
          </label>
          <input type="tel" id="phone" name="phone" className="form-control" placeholder="เช่น 081-234-5678" autoComplete="tel" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="customerType">
            ประเภทผู้ติดต่อ
          </label>
          <select id="customerType" name="customerType" className="form-control" defaultValue="family">
            <option value="family">ครอบครัว / ผู้ดูแลผู้ป่วย</option>
            <option value="business">องค์กร / สถานพยาบาล / ศูนย์ดูแลผู้สูงอายุ</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="startDate">
            ต้องการใช้งานประมาณวันที่
          </label>
          <input type="date" id="startDate" name="startDate" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="province">
            จังหวัด / พื้นที่จัดส่ง
          </label>
          <input type="text" id="province" name="province" className="form-control" placeholder="เช่น กรุงเทพฯ, นนทบุรี" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lineId">
            LINE ID (ถ้ามี)
          </label>
          <input type="text" id="lineId" name="lineId" className="form-control" placeholder="สำหรับส่งเอกสารและรูปภาพ" />
        </div>
        <div className="form-group form-col-full">
          <label className="form-label" htmlFor="notes">
            อาการของผู้ใช้งาน / ข้อมูลเพิ่มเติม
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className="form-control"
            placeholder="เช่น ผู้สูงอายุ 80 ปี พักฟื้นหลังผ่าตัดสะโพก ห้องนอนอยู่ชั้น 2"
          />
        </div>
        <div className="form-group form-col-full">
          <label className="form-checkbox-label">
            <input type="checkbox" name="pdpaConsent" defaultChecked required />
            <span>
              ข้าพเจ้ายินยอมให้ Hana Care จัดเก็บและใช้ข้อมูลเพื่อการติดต่อกลับตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA){" "}
              <a href="#" data-action="open-privacy" className="underline">
                อ่านนโยบาย
              </a>
            </span>
          </label>
        </div>
        <div className="form-group form-col-full">
          <button type="submit" className="btn btn-primary btn-lg w-full">
            {submitLabel}
          </button>
          <p className="mt-3 text-center text-xs text-ink-light">
            ยังไม่มีการชำระเงินในขั้นตอนนี้ แอดมินจะติดต่อกลับเพื่อแนะนำรุ่นและส่งใบเสนอราคาให้ภายใน 30 นาที (ในเวลาทำการ)
          </p>
        </div>
      </div>
    </LeadForm>
  );
}
