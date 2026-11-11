import Icon from "@/components/ui/Icon";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  "title": {
    "absolute": "เกี่ยวกับเรา | Hana Care by Phatra Leasing"
  },
  "description": "มั่นใจในการดูแลคนที่คุณรัก ด้วยมาตรฐานบริการและประสบการณ์ความเชี่ยวชาญด้านสินเชื่อและอุปกรณ์จากกลุ่ม ภัทรลิสซิ่ง (Phatra Leasing Public Company Limited)",
  "alternates": {
    "canonical": "/about-us/"
  }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "หน้าแรก",
            "item": "https://phatracare.phatra-leasing.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "เกี่ยวกับเรา",
            "item": "https://phatracare.phatra-leasing.com/about-us/"
          }
        ]
      }} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link href="/">หน้าแรก</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li>เกี่ยวกับเรา (About Us)</li>
          </ul>
        </div>
      </div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">OUR HERITAGE & MISSION</span>
          <h1 className="page-hero-title">ความมั่นคงและความเชี่ยวชาญจาก ภัทรลิสซิ่ง</h1>
          <p className="page-hero-desc">Hana Care ก่อตั้งขึ้นด้วยเจตนารมณ์ในการยกระดับคุณภาพชีวิตของผู้ป่วยพักฟื้นและผู้สูงอายุในประเทศไทย โดยผสานมาตรฐานการบริหารจัดการอุปกรณ์ระดับสากลของ บมจ. ภัทรลิสซิ่ง เข้ากับความใส่ใจเพื่อส่งมอบความสุขและความอบอุ่นในบ้าน</p>
        </div>
      </section>
      {/* Story & Vision */}
      <section className="section">
        <div className="container">
          <div style={{"display":"grid","gridTemplateColumns":"1.2fr 1fr","gap":"48px","alignItems":"center"}}>
            <div>
              <span className="section-tag">BRAND STORY</span>
              <h2 className="section-title">"Healthcare quality with the comfort of home"</h2>
              <p style={{"color":"var(--text-muted)","lineHeight":"1.7","marginBottom":"18px"}}>เมื่อคนที่เรารักต้องการการพักฟื้น หรือก้าวเข้าสู่วัยสูงอายุ บ้านคือสถานที่ที่ดีที่สุดในการเยียวยาทั้งร่างกายและจิตใจ แต่บ่อยครั้งที่การดูแลผู้ป่วยที่บ้านสร้างภาระหนักหน่วงให้กับลูกหลานและผู้ดูแล ทั้งอาการปวดหลัง ความกังวลเรื่องความปลอดภัย และความยุ่งยากในการใช้งานอุปกรณ์</p>
              <p style={{"color":"var(--text-muted)","lineHeight":"1.7","marginBottom":"24px"}}><strong>Hana Care</strong>{" "}จึงคัดสรรเตียงปรับระดับจาก France Bed ประเทศญี่ปุ่น ที่ขึ้นทะเบียน อย. และมีมาตรฐานความปลอดภัยระดับการแพทย์ แต่คงไว้ซึ่งดีไซน์ที่อบอุ่นเหมือนเฟอร์นิเจอร์ชิ้นเอกในบ้าน พร้อมบริการส่ง ประกอบ สอนการใช้งาน และดูแลตลอดอายุสัญญา เพื่อให้ทุกครอบครัวอุ่นใจในทุกวินาทีของการดูแล</p>
              <div style={{"display":"flex","gap":"16px","flexWrap":"wrap"}}><Link href="/patient-beds/" className="btn btn-primary">ชมเตียงปรับระดับทั้ง 3 รุ่น →</Link>{" "}<Link href="/contact-us/#rental-form" className="btn btn-secondary">ขอเช่าเตียง</Link></div>
            </div>
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">ปีแห่งความมั่นคงและการบริการ</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">มาตรฐานความปลอดภัยระดับสากล</div>
              </div>
              <div className="stat-card">
                <div className="stat-number"><Icon name="award" /></div>
                <div className="stat-label">เตียง France Bed ขึ้นทะเบียน อย.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">White-Glove</div>
                <div className="stat-label">บริการส่งประกอบถึงห้องนอน</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
