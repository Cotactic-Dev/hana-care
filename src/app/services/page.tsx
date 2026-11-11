import Icon from "@/components/ui/Icon";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  "title": {
    "absolute": "บริการจัดส่ง ติดตั้ง และรับประกันเตียงผู้ป่วย | Hana Care"
  },
  "description": "บริการ White-Glove Delivery จัดส่งและติดตั้งฟรีใน กทม. และปริมณฑล พร้อมสาธิตการใช้งาน บริการหลังการขายและทีมช่าง On-site Service 24-48 ชม. โดยภัทรลิสซิ่ง",
  "alternates": {
    "canonical": "/services/"
  }
};

export default function ServicesPage() {
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
            "name": "บริการ White-Glove",
            "item": "https://phatracare.phatra-leasing.com/services/"
          }
        ]
      }} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link href="/">หน้าแรก</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li>บริการ White-Glove & After-Sales Service</li>
          </ul>
        </div>
      </div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">WHITE-GLOVE SERVICE & WARRANTY</span>
          <h1 className="page-hero-title">บริการครบวงจร มาตรฐานภัทรลิสซิ่ง</h1>
          <p className="page-hero-desc">สำหรับสินค้าเพื่อการดูแลสุขภาพ การบริการหลังการขายและความต่อเนื่องในการใช้งานคือสิ่งสำคัญที่สุด เราจึงมุ่งมั่นดูแลคุณและครอบครัวด้วยมาตรฐานบริการระดับพรีเมียมตั้งแต่ก้าวแรก</p>
        </div>
      </section>
      {/* Service Pillars Showcase */}
      <section className="section">
        <div className="container">
          <div className="service-showcase-grid" style={{"marginBottom":"64px"}}>
            <div className="service-image-box"><Image src="/assets/images/service-delivery.jpg" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" alt="White-Glove Delivery & Installation Hana Care" /></div>
            <div className="service-content-box">
              <span className="section-tag">STEP-BY-STEP SERVICE</span>
              <h2 className="section-title">4 เสาหลักแห่งความอุ่นใจ</h2>
              <p className="section-desc" style={{"marginBottom":"28px"}}>เราไม่ได้เพียงแค่ส่งมอบเตียง แต่เราส่งมอบความมั่นใจและคุณภาพชีวิตที่ดีขึ้นให้กับครอบครัวของคุณ</p>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="truck" /></div>
                  <div className="service-feature-text">
                    <h4>1. White-Glove Delivery & Assembly</h4>
                    <p>ทีมช่างชำนาญการส่งตรงเวลา ขนย้ายขึ้นชั้น 2 หรือเข้าห้องนอน ประกอบและทดสอบระบบไฟฟ้า 100% ฟรีในเขตกรุงเทพฯ และปริมณฑล</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="demo" /></div>
                  <div className="service-feature-text">
                    <h4>2. สาธิตการใช้งานและเทคนิคดูแลผู้ป่วย</h4>
                    <p>ผู้เชี่ยวชาญแนะนำการใช้งานรีโมท การปรับระดับองศาที่ปลอดภัย การใช้งานระบบเบรก และท่วงท่าที่ช่วยไม่ให้ผู้ดูแลปวดหลัง</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="wrench" /></div>
                  <div className="service-feature-text">
                    <h4>3. On-site Service ภายใน 24-48 ชั่วโมง</h4>
                    <p>บริการช่างเข้าตรวจเช็คถึงบ้านอย่างรวดเร็ว พร้อมสต็อกอะไหล่แท้ และมีเตียงสำรองใช้งานกรณีต้องนำเครื่องกลับศูนย์ซ่อม</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="shield" /></div>
                  <div className="service-feature-text">
                    <h4>4. ดูแลซ่อมบำรุงตลอดอายุสัญญาเช่า</h4>
                    <p>ครอบคลุมทุกรูปแบบบริการ ทั้งเช่าระยะสั้น ลีสซิ่งระยะยาว และเช่าเพื่อเป็นเจ้าของ แจ้งปัญหาได้ทางโทรศัพท์หรือ LINE กรณีซับซ้อนมีทีมเทคนิคจาก France Bed ญี่ปุ่นสนับสนุน</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Box */}
      <section className="section section-bg-alt" style={{"textAlign":"center"}}>
        <div className="container container-narrow">
          <h2 className="section-title">ต้องการปรึกษาเจ้าหน้าที่ด้านบริการจัดส่ง?</h2>
          <p className="section-desc" style={{"marginBottom":"32px"}}>เราพร้อมตอบทุกข้อสงสัยเกี่ยวกับพื้นที่บริการ เวลาในการจัดส่ง และเงื่อนไขการรับประกัน</p>
          <div style={{"display":"flex","justifyContent":"center","gap":"16px","flexWrap":"wrap"}}><Link href="/contact-us/" className="btn btn-primary btn-lg">ติดต่อปรึกษาผู้เชี่ยวชาญ →</Link>{" "}<a href="tel:022907575" className="btn btn-secondary btn-lg"><Icon name="phone" className="inline-icon" /> โทร 02-290-7575</a></div>
        </div>
      </section>
    </>
  );
}
