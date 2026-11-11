import Icon from "@/components/ui/Icon";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import RentalLeadForm from "@/components/forms/RentalLeadForm";

export const metadata: Metadata = {
  "title": {
    "absolute": "ติดต่อเรา - ขอคำปรึกษาเลือกเตียงผู้ป่วย | Hana Care"
  },
  "description": "ติดต่อทีมผู้เชี่ยวชาญเพื่อรับคำแนะนำในการเลือกเตียงผู้ป่วยที่เหมาะสมกับคนในครอบครัว โทร. 02-290-7575 หรือแอด LINE: @hanacare พร้อมรับใบเสนอราคาพิเศษ",
  "alternates": {
    "canonical": "/contact-us/"
  }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "ติดต่อ Hana Care",
        "description": "ขอเช่าเตียงปรับระดับ France Bed และรับคำปรึกษาจากแอดมิน Hana Care",
        "mainEntity": {
          "@type": "Organization",
          "name": "Hana Care",
          "telephone": "+66-2-290-7575",
          "email": "care@phatra-leasing.com"
        }
      }} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link href="/">หน้าแรก</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li>ติดต่อเรา (Contact Us)</li>
          </ul>
        </div>
      </div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">GET IN TOUCH WITH SPECIALISTS</span>
          <h1 className="page-hero-title">ขอเช่าเตียง / ติดต่อแอดมิน</h1>
          <p className="page-hero-desc">กรอกฟอร์มขอเช่าเตียง หรือสอบถามรุ่นที่เหมาะกับอาการของผู้ใช้งาน แอดมินจะติดต่อกลับเพื่อแนะนำแพ็กเกจ ส่งใบเสนอราคา และนัดวันจัดส่งติดตั้ง ทั้งลูกค้าครอบครัวและองค์กร</p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="rental-form" className="section">
        <div className="container">
          <div className="form-section-wrapper">
            <div className="form-info-pane">
              <div>
                <span className="section-tag" style={{"background":"rgba(255,255,255,0.2)","color":"#fff"}}>DIRECT CHANNELS</span>
                <h3>ช่องทางการติดต่อ</h3>
                <p>ทีมงานติดต่อกลับอย่างรวดเร็วภายใน 30 นาที ในวันและเวลาทำการ</p>
                <div className="form-direct-contacts">
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon"><Icon name="phone" /></div>
                    <div>
                      <div style={{"fontSize":"0.8rem","opacity":"0.8"}}>Call Center:</div>
                      <strong>02-290-7575</strong>
                    </div>
                  </div>
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon"><Icon name="chat" /></div>
                    <div>
                      <div style={{"fontSize":"0.8rem","opacity":"0.8"}}>LINE Official Account:</div>
                      <strong>@hanacare</strong>
                    </div>
                  </div>
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon"><Icon name="mail" /></div>
                    <div>
                      <div style={{"fontSize":"0.8rem","opacity":"0.8"}}>Email:</div>
                      <strong>care@phatra-leasing.com</strong>
                    </div>
                  </div>
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon">⏰</div>
                    <div>
                      <div style={{"fontSize":"0.8rem","opacity":"0.8"}}>เวลาทำการ:</div>
                      <strong>จันทร์ - เสาร์ (08:30 - 18:00 น.)</strong>
                    </div>
                  </div>
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon"><Icon name="pin" /></div>
                    <div>
                      <div style={{"fontSize":"0.8rem","opacity":"0.8"}}>ที่ตั้งสำนักงาน:</div>
                      <strong>บมจ. ภัทรลิสซิ่ง อาคารรัชดา พลัส ถ.รัชดาภิเษก กรุงเทพฯ</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"fontSize":"0.75rem","opacity":"0.75","marginTop":"32px"}}>* ข้อมูลของท่านจะได้รับการคุ้มครองตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)</div>
            </div>
            <div className="form-inputs-pane">
              <RentalLeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
