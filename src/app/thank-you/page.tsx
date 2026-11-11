import Icon from "@/components/ui/Icon";
import Link from "next/link";
import type { Metadata } from "next";
import { contact } from "@/data/site";
import LeadSummary from "@/components/forms/LeadSummary";

export const metadata: Metadata = {
  "robots": { "index": false, "follow": false },
  "title": {
    "absolute": "ขอบพระคุณที่ไว้วางใจ | Hana Care by Phatra Leasing"
  }
};

export default function ThankYouPage() {
  return (
    <>

      {/* Thank You Content */}
      <section className="section" style={{"minHeight":"70vh","display":"flex","alignItems":"center"}}>
        <div className="container container-narrow" style={{"textAlign":"center"}}>
          <div style={{"width":"80px","height":"80px","background":"var(--primary-subtle)","color":"var(--primary)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"2.5rem","margin":"0 auto 24px auto","boxShadow":"var(--shadow-md)"}}><Icon name="check" /></div>
          <span className="section-tag">LEAD SUBMISSION CONFIRMED</span>
          <h1 className="section-title" style={{"fontSize":"2.4rem","marginBottom":"16px"}}>ขอบพระคุณที่ไว้วางใจ Hana Care</h1>
          <p className="section-desc" style={{"marginBottom":"32px","fontSize":"1.1rem"}}>
ทีมผู้เชี่ยวชาญได้รับข้อมูลความต้องการของท่านเรียบร้อยแล้ว
            <br />
เจ้าหน้าที่จะติดต่อกลับเพื่อให้คำปรึกษาและส่งมอบเอกสารใบเสนอราคา{" "}
            <strong>ภายใน 30 นาที</strong>
{" "}ในช่วงเวลาทำการครับ
          </p>
          <div style={{"background":"#FFFFFF","borderRadius":"var(--radius-md)","border":"1px solid var(--warm-border)","padding":"28px","maxWidth":"520px","margin":"0 auto 36px auto","boxShadow":"var(--shadow-sm)","textAlign":"left"}}>
            <h4 style={{"color":"var(--primary-dark)","marginBottom":"12px","fontSize":"1.05rem"}}><Icon name="clipboard" className="inline-icon" /> สรุปข้อมูลการติดต่อ:</h4>
            <LeadSummary />
          </div>
          <div style={{"display":"flex","justifyContent":"center","gap":"16px","flexWrap":"wrap"}}><a href={contact.lineUrl} target="_blank" className="btn btn-line btn-lg" data-track="click_line" data-track-params='{"placement":"thankyou_page"}' rel="noopener noreferrer"><Icon name="chat" className="inline-icon" /> แอด LINE เพื่อรับแคตตาล็อกทันที</a>{" "}<Link href="/patient-beds/" className="btn btn-secondary btn-lg">ชมเตียงรุ่นอื่นเพิ่มเติม</Link></div>
        </div>
      </section>
    </>
  );
}
