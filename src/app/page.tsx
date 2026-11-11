import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import T from "@/components/i18n/T";
import BedFinderQuiz from "@/components/home/BedFinderQuiz";
import ServiceJourney from "@/components/home/ServiceJourney";
import B2BSection from "@/components/home/B2BSection";
import ProductCard from "@/components/products/ProductCard";
import RentalPlans from "@/components/products/RentalPlans";
import RentalLeadForm from "@/components/forms/RentalLeadForm";
import SampleBadge from "@/components/ui/SampleBadge";
import { formatTHB, products, startingMonthly } from "@/data/products";
import { SITE_URL, contact } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Hana Care ฮานาแคร์ — บริการเช่าเตียงปรับระดับ France Bed สำหรับดูแลผู้ป่วยที่บ้าน" },
  description:
    "เช่าเตียงปรับระดับมาตรฐานญี่ปุ่น France Bed 3 รุ่น Espoir, Granmax, Multi-Position เช่าระยะสั้น ลีสซิ่งระยะยาว หรือเช่าเพื่อเป็นเจ้าของ พร้อมส่ง ติดตั้ง สาธิตการใช้งานถึงบ้าน ภายใต้ความมั่นคงของภัทรลิสซิ่ง",
  keywords: ["เช่าเตียงผู้ป่วย", "เตียงปรับระดับ", "เตียงผู้ป่วยไฟฟ้า", "France Bed", "เช่าเตียงพักฟื้น", "เตียงผู้สูงอายุ", "Hana Care", "ฮานาแคร์"],
  alternates: { canonical: "/", languages: { th: "/", en: "/en/" } },
  openGraph: {
    type: "website",
    url: "/",
    title: "Hana Care — เช่าเตียงปรับระดับ France Bed ดูแลคนที่รักที่บ้าน",
    description: "เตียงปรับระดับมาตรฐานญี่ปุ่น 3 รุ่น พร้อมบริการเช่าและลีสซิ่ง ส่ง ติดตั้ง สาธิตถึงบ้าน",
    images: ["/assets/images/hero.jpg"],
  },
};

const AUDIENCE = [
  {
    icon: "care" as const,
    title: "ผู้สูงอายุที่ต้องการความสะดวก",
    text: "ช่วยให้ลุกนั่งทานข้าว ดูทีวี หรือลงจากเตียงได้อย่างมั่นใจ ลดความเสี่ยงพลัดตกหกล้ม",
    model: products[0],
  },
  {
    icon: "stethoscope" as const,
    title: "ผู้พักฟื้นหลังผ่าตัด / ระยะยาว",
    text: "นอนสบายเหมือนอยู่ห้องนอนที่บ้าน ปรับระดับได้ ช่วยให้การดูแลในแต่ละวันง่ายขึ้น",
    model: products[1],
  },
  {
    icon: "bed" as const,
    title: "ผู้ป่วยที่ต้องการการดูแลสูง",
    text: "ปรับเป็นท่านั่งและช่วยพยุงยืน ลดการยกตัวผู้ป่วย ส่งเสริมการฟื้นฟูร่างกาย",
    model: products[2],
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Hana Care",
              alternateName: "ฮานาแคร์",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/assets/images/brand/hanacare-logo.png`,
              parentOrganization: { "@type": "Organization", name: "Phatra Leasing Public Company Limited" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+66-2-290-7575",
                contactType: "customer service",
                areaServed: "TH",
                availableLanguage: ["Thai", "English"],
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "Hana Care",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge-trust">
              <T k="hero_badge">บริการเช่าเตียงปรับระดับ ภายใต้ความมั่นคงของ ภัทรลิสซิ่ง</T>
            </div>
            <h1 className="hero-title">
              <span>
                <T k="hero_h1_1">เช่าเตียงปรับระดับมาตรฐานญี่ปุ่น</T>
              </span>
              <br />
              <span className="highlight">
                <T k="hero_h1_2">ดูแลคนที่คุณรักได้อย่างอุ่นใจที่บ้าน</T>
              </span>
            </h1>
            <p className="hero-desc">
              <T k="hero_desc">
                เตียง France Bed 3 รุ่น ขึ้นทะเบียน อย. เลือกเช่าระยะสั้นช่วงพักฟื้น ลีสซิ่งระยะยาว หรือเช่าเพื่อเป็นเจ้าของ
                พร้อมทีมงานส่ง ติดตั้ง และสอนการใช้งานถึงห้องนอน
              </T>
            </p>
            <div className="hero-actions">
              <a href="#rental-form" className="btn btn-primary btn-lg" data-track="click_hero_rent">
                <T k="hero_btn_rent">ขอเช่าเตียง — ให้แอดมินติดต่อกลับ</T>
              </a>{" "}
              <a href="#bedFinder" className="btn btn-secondary btn-lg" data-track="click_hero_quiz">
                <T k="hero_btn_quiz">ค้นหารุ่นที่เหมาะกับคุณ</T>
              </a>
            </div>
            <div className="hero-trust-pillars">
              <div className="trust-pillar-item">
                <div className="trust-pillar-icon"><Icon name="award" /></div>
                <div className="trust-pillar-text">
                  <h4>
                    <T k="hero_trust_1">France Bed ญี่ปุ่น</T>
                  </h4>
                  <p>
                    <T k="hero_trust_1_sub">ขึ้นทะเบียน อย. ครบทั้ง 3 รุ่น</T>
                  </p>
                </div>
              </div>
              <div className="trust-pillar-item">
                <div className="trust-pillar-icon"><Icon name="truck" /></div>
                <div className="trust-pillar-text">
                  <h4>
                    <T k="hero_trust_2">ส่ง ติดตั้ง สาธิตถึงบ้าน</T>
                  </h4>
                  <p>
                    <T k="hero_trust_2_sub">ดูแลซ่อมบำรุงตลอดสัญญา</T>
                  </p>
                </div>
              </div>
              <div className="trust-pillar-item">
                <div className="trust-pillar-icon"><Icon name="file" /></div>
                <div className="trust-pillar-text">
                  <h4>
                    <T k="hero_trust_3">เช่าเริ่มต้น {formatTHB(startingMonthly)}/เดือน</T>
                  </h4>
                  <p>
                    <T k="hero_trust_3_sub">เช่าสั้น · ลีสซิ่ง · เช่าเพื่อเป็นเจ้าของ</T>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <Image
                src="/assets/images/hero.jpg"
                width={1376}
                height={768}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                alt="ครอบครัวดูแลผู้สูงอายุบนเตียงปรับระดับ Hana Care ที่บ้าน"
              />
            </div>
            <div className="floating-glass-card">
              <div className="floating-card-icon"><Icon name="heart" /></div>
              <div className="floating-card-text">
                <h5>ไม่ต้องซื้อ ก็ได้เตียงมาตรฐาน</h5>
                <p>เช่าเท่าที่ใช้ เก็บคืนถึงบ้านเมื่อหายดี</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <T k="sec_audience_tag">WHO IS THIS FOR</T>
            </span>
            <h2 className="section-title">
              <T k="sec_audience_title">ออกแบบมาเพื่อใคร และช่วยให้ชีวิตง่ายขึ้นอย่างไร?</T>
            </h2>
            <p className="section-desc">
              <T k="sec_audience_desc">ความต้องการของผู้ป่วยและผู้ดูแลแต่ละครอบครัวแตกต่างกัน เราจึงมี 3 รุ่นที่ตอบโจทย์เฉพาะด้าน</T>
            </p>
          </div>
          <div className="audience-grid">
            {AUDIENCE.map((a) => (
              <div className="audience-card" key={a.title}>
                <div className="audience-icon"><Icon name={a.icon} /></div>
                <h3 className="audience-title">{a.title}</h3>
                <p className="audience-desc">{a.text}</p>
                <div className="audience-rec">
                  <span>
                    <Icon name="sparkles" className="inline-icon" /> รุ่นแนะนำ:{" "}
                    <Link href={`/patient-beds/${a.model.slug}/`} className="text-primary underline">
                      <strong>{a.model.modelName} →</strong>
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <T k="sec_products_tag">OUR BEDS</T>
            </span>
            <h2 className="section-title">
              <T k="sec_products_title">เตียงปรับระดับ France Bed 3 รุ่น</T>
            </h2>
            <p className="section-desc">
              <T k="sec_products_desc">เลือกรุ่นที่เหมาะกับสภาพร่างกายของผู้ใช้งาน ขนาดห้อง และรูปแบบการดูแลของครอบครัว</T>
            </p>
          </div>
          <div className="product-grid">
            {products.map((p, i) => (
              <ProductCard key={p.slug} p={p} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <ServiceJourney />

      {/* Rental plans */}
      <section id="plans" className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">RENTAL PLANS</span>
            <h2 className="section-title">3 รูปแบบบริการ เลือกได้ตามระยะเวลาการดูแล</h2>
            <p className="section-desc">
              ไม่ต้องลงทุนซื้อเตียงราคาสูง เช่าเท่าที่ใช้ หรือเลือกผ่อนเป็นเจ้าของ <SampleBadge />
            </p>
          </div>
          <RentalPlans />
        </div>
      </section>

      {/* Quiz */}
      <BedFinderQuiz />

      {/* B2B */}
      <B2BSection />

      {/* Service */}
      <section className="section">
        <div className="container">
          <div className="service-showcase-grid">
            <div className="service-image-box">
              <Image
                src="/assets/images/service-delivery.jpg"
                width={1376}
                height={768}
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="ทีมผู้เชี่ยวชาญส่งและติดตั้งเตียงปรับระดับถึงบ้าน"
              />
            </div>
            <div className="service-content-box">
              <span className="section-tag">
                <T k="sec_service_tag">WHITE-GLOVE SERVICE</T>
              </span>
              <h2 className="section-title">
                <T k="sec_service_title">ดูแลครบ ตั้งแต่วันส่งเตียงจนถึงวันเก็บคืน</T>
              </h2>
              <p className="section-desc mb-8">
                <T k="sec_service_desc">ความมั่นใจไม่ได้จบแค่ตัวเตียง แต่คือบริการระดับมืออาชีพตลอดอายุสัญญา</T>
              </p>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="truck" /></div>
                  <div className="service-feature-text">
                    <h4>จัดส่ง ติดตั้ง และสาธิตการใช้งาน</h4>
                    <p>ทีมงานประกอบเตียงถึงห้องนอน ตรวจเช็คระบบ และสอนผู้ดูแลใช้งานอย่างปลอดภัย</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="wrench" /></div>
                  <div className="service-feature-text">
                    <h4>แจ้งซ่อมได้ทันทีทางโทรศัพท์ / LINE</h4>
                    <p>แก้ไขทางไกลก่อน หากไม่ได้ ส่งช่างผู้เชี่ยวชาญเข้าไปดูแลถึงบ้าน</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <div className="service-icon-box"><Icon name="refresh" /></div>
                  <div className="service-feature-text">
                    <h4>ต่อสัญญา หรือเก็บเตียงคืนถึงบ้าน</h4>
                    <p>แจ้งเตือนก่อนครบกำหนด ไม่ต้องกังวลเรื่องการขนย้ายเตียงเอง</p>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <Link href="/services/" className="btn btn-primary">
                  ดูรายละเอียดบริการทั้งหมด →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead form (Phase 1 conversion) */}
      <section id="rental-form" className="section section-bg-alt">
        <div className="container">
          <div className="form-section-wrapper">
            <div className="form-info-pane">
              <div>
                <span className="section-tag bg-white/20! text-white!">ขอเช่าเตียง</span>
                <h3>ให้แอดมินช่วยแนะนำรุ่นและแพ็กเกจที่เหมาะสม</h3>
                <p>กรอกข้อมูลสั้นๆ ทีมงาน Hana Care จะติดต่อกลับภายใน 30 นาที (ในเวลาทำการ) ยังไม่มีค่าใช้จ่ายในขั้นตอนนี้</p>
                <div className="form-direct-contacts">
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon"><Icon name="phone" /></div>
                    <div>
                      <div className="text-[0.8rem] opacity-80">Call Center:</div>
                      <strong>{contact.phoneDisplay}</strong>
                    </div>
                  </div>
                  <div className="contact-direct-item">
                    <div className="contact-direct-icon"><Icon name="chat" /></div>
                    <div>
                      <div className="text-[0.8rem] opacity-80">LINE Official:</div>
                      <strong>{contact.lineId}</strong>
                    </div>
                  </div>
                </div>
              </div>
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
