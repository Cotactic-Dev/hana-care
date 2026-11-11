import Icon from "@/components/ui/Icon";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArticleFilterButtons, ArticleFilterProvider } from "@/components/articles/ArticleFilter";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  "title": {
    "absolute": "บทความและสาระน่ารู้ การดูแลผู้ป่วยและผู้สูงอายุที่บ้าน | Hana Care"
  },
  "description": "รวบรวมบทความ ไกด์การเลือกเตียงผู้ป่วยปรับไฟฟ้า เทคนิคการดูแลผู้ป่วยติดเตียง การป้องกันแผลกดทับ และสาระสุขภาพสำหรับครอบครัว โดยทีมผู้เชี่ยวชาญจาก ภัทรลิสซิ่ง (Phatra Leasing)",
  "keywords": [
    "บทความเตียงผู้ป่วย",
    "วิธีเลือกเตียงผู้ป่วย",
    "การดูแลผู้ป่วยติดเตียง",
    "ป้องกันแผลกดทับ",
    "เตียงผู้สูงอายุ",
    "เช่าเตียงผู้ป่วย",
    "Hana Care"
  ],
  "alternates": {
    "canonical": "/articles/",
    "languages": {
      "th": "/articles/"
    }
  },
  "openGraph": {
    "type": "website",
    "url": "/articles/",
    "title": "บทความและสาระน่ารู้ การดูแลผู้ป่วยที่บ้าน | Hana Care",
    "description": "คู่มือและสาระน่ารู้เรื่องการเลือกเตียงผู้ป่วย การดูแลผู้สูงอายุอย่างถูกวิธี เพื่อสุขภาพที่ดีและความสุขของทุกคนในบ้าน",
    "images": [
      "/assets/images/hero.jpg"
    ]
  }
};

export default function ArticlesPage() {
  return (
    <ArticleFilterProvider>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
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
                "name": "บทความน่ารู้",
                "item": "https://phatracare.phatra-leasing.com/articles/"
              }
            ]
          },
          {
            "@type": "CollectionPage",
            "@id": "https://phatracare.phatra-leasing.com/articles/#webpage",
            "url": "https://phatracare.phatra-leasing.com/articles/",
            "name": "บทความและสาระน่ารู้การดูแลผู้ป่วยที่บ้าน | Hana Care",
            "description": "แหล่งรวมบทความความรู้ การเลือกเตียงปรับไฟฟ้า และการดูแลผู้สูงอายุที่บ้าน",
            "publisher": {
              "@type": "Organization",
              "name": "Hana Care",
              "legalName": "บริษัท ภัทรลิสซิ่ง จำกัด (มหาชน)"
            }
          }
        ]
      }} />
      {/* Articles Hero Section */}
      <section className="articles-hero">
        <div className="container">
          <div className="breadcrumb" style={{"justifyContent":"center","color":"rgba(255,255,255,0.8)","marginBottom":"12px"}}><Link href="/" style={{"color":"rgba(255,255,255,0.8)"}}>หน้าแรก</Link>{" "}<span>/</span>{" "}<span style={{"color":"white"}}>บทความน่ารู้</span></div>
          <h1><Icon name="book" className="inline-icon" /> คลังความรู้ & คู่มือการดูแลสุขภาพผู้ป่วยที่บ้าน</h1>
          <p>รวบรวมสาระน่ารู้ เทคนิคการเลือกเตียงผู้ป่วยปรับไฟฟ้า และคู่มือการดูแลผู้สูงอายุอย่างถูกต้อง เพื่อสร้างสุขภาวะและความอบอุ่นในครอบครัว</p>
          <ArticleFilterButtons />
        </div>
      </section>
      {/* Main Articles Content */}
      <div className="container" style={{"paddingTop":"40px","paddingBottom":"60px"}}>
        {/* Featured Article Card */}
        <article className="featured-article-card" data-category="guide">
          <div className="featured-img-wrap"><Image src="/assets/images/bed-comfort.jpg" width={1200} height={896} sizes="(max-width: 768px) 100vw, 50vw" alt="วิธีเลือกเตียงผู้ป่วยปรับไฟฟ้า" /></div>
          <div className="featured-content">
            <span className="badge-featured"><Icon name="star" className="inline-icon" /> บทความแนะนำประจำเดือน</span>
            <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 28 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 5 นาที</span>{" "}<span>•</span>{" "}<span><Icon name="pen" className="inline-icon" /> โดย ทีมพยาบาลวิชาชีพ Hana Care</span></div>
            <h2 className="featured-title"><Link href="/articles/how-to-choose-patient-bed/">คู่มือฉบับสมบูรณ์: วิธีเลือกเตียงปรับระดับให้เหมาะกับผู้สูงอายุและผู้พักฟื้น (Espoir vs Granmax vs Multi-Position)</Link></h2>
            <p className="featured-desc">เลือกเตียงอย่างไรให้เหมาะกับผู้ใช้งาน ขนาดห้อง และระยะเวลาการดูแล เจาะลึกความแตกต่างของเตียง France Bed ทั้ง 3 รุ่น พร้อมแนะนำว่าควรเช่าระยะสั้น ลีสซิ่ง หรือเช่าเพื่อเป็นเจ้าของ</p>
            <div><Link href="/articles/how-to-choose-patient-bed/" className="btn btn-primary">อ่านบทความเต็ม →</Link></div>
          </div>
        </article>
        {/* Articles Grid */}
        <h3 style={{"fontSize":"1.4rem","color":"var(--primary)","marginBottom":"24px","fontWeight":"700","display":"flex","alignItems":"center","gap":"8px"}}><Icon name="book" className="inline-icon" /> บทความน่าสนใจทั้งหมด</h3>
        <div className="articles-grid">
          {/* Article Card 1 */}
          <article className="article-card" data-category="guide">
            <div className="card-img-wrap"><Image src="/assets/images/bed-essential.jpg" width={1200} height={896} sizes="(max-width: 768px) 100vw, 50vw" alt="เตียงผู้ป่วย 2 มอเตอร์ vs 3 มอเตอร์" />{" "}<span className="card-tag">คู่มือการเลือกเตียง</span></div>
            <div className="card-body">
              <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 25 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 4 นาที</span></div>
              <h3 className="card-title"><Link href="/articles/how-to-choose-patient-bed/">เตียงผู้ป่วย 2 มอเตอร์ 3 มอเตอร์ และ 5 มอเตอร์ ต่างกันอย่างไร? เลือกแบบไหนดี</Link></h3>
              <p className="card-snippet">ทำความเข้าใจหน้าที่ของมอเตอร์ไฟฟ้าแต่ละตำแหน่ง เช่น การยกหัว ชันเข่า และการปรับระดับความสูงเตียง เพื่อให้เลือกเตียงได้ตรงจุด ไม่เสียเงินเกินความจำเป็น</p>
              <div className="card-footer"><span>โดย Hana Care Team</span>{" "}<Link href="/articles/how-to-choose-patient-bed/" className="read-link">อ่านต่อ →</Link></div>
            </div>
          </article>
          {/* Article Card 2 */}
          <article className="article-card" data-category="care">
            <div className="card-img-wrap"><Image src="/assets/images/hero.jpg" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" alt="การป้องกันแผลกดทับ" />{" "}<span className="card-tag">การดูแลผู้ป่วยติดเตียง</span></div>
            <div className="card-body">
              <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 20 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 6 นาที</span></div>
              <h3 className="card-title"><Link href="/articles/how-to-choose-patient-bed/">5 เทคนิคป้องกันแผลกดทับ สำหรับผู้ป่วยติดเตียงที่พักฟื้นอยู่บ้าน</Link></h3>
              <p className="card-snippet">แผลกดทับเป็นปัญหาใหญ่ของผู้ป่วยติดเตียง เรียนรู้วิธีพลิกตะแคงตัว การเลือกที่นอนแรงดันลม และการปรับองศาเตียงไฟฟ้าเพื่อกระจายแรงกดทับอย่างถูกวิธี</p>
              <div className="card-footer"><span>โดย พยาบาลวิชาชีพ Hana Care</span>{" "}<Link href="/articles/how-to-choose-patient-bed/" className="read-link">อ่านต่อ →</Link></div>
            </div>
          </article>
          {/* Article Card 3 */}
          <article className="article-card" data-category="rental">
            <div className="card-img-wrap"><Image src="/assets/images/bed-premier.jpg" width={1200} height={896} sizes="(max-width: 768px) 100vw, 50vw" alt="ซื้อ vs เช่าเตียงผู้ป่วย" />{" "}<span className="card-tag">สิทธิประโยชน์ & การเช่า</span></div>
            <div className="card-body">
              <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 15 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 4 นาที</span></div>
              <h3 className="card-title"><Link href="/articles/how-to-choose-patient-bed/">เปรียบเทียบข้อดี-ข้อเสีย: ซื้อเตียงผู้ป่วยเอง vs เช่าเตียงรายเดือน แบบไหนคุ้มกว่า?</Link></h3>
              <p className="card-snippet">วิเคราะห์ความคุ้มค่าระหว่างการซื้อเตียงเองกับการเช่า ลีสซิ่ง หรือเช่าเพื่อเป็นเจ้าของ เหมาะสำหรับผู้ป่วยพักฟื้นระยะสั้น (1-6 เดือน) หรือระยะยาว พร้อมการดูแลรักษา On-site</p>
              <div className="card-footer"><span>โดย ทีมการเงิน ภัทรลิสซิ่ง</span>{" "}<Link href="/articles/how-to-choose-patient-bed/" className="read-link">อ่านต่อ →</Link></div>
            </div>
          </article>
          {/* Article Card 4 */}
          <article className="article-card" data-category="elderly">
            <div className="card-img-wrap"><Image src="/assets/images/service-delivery.jpg" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" alt="จัดห้องนอนผู้สูงอายุ" />{" "}<span className="card-tag">สุขภาพผู้สูงอายุ</span></div>
            <div className="card-body">
              <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 10 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 5 นาที</span></div>
              <h3 className="card-title"><Link href="/articles/how-to-choose-patient-bed/">วิธีจัดและปรับสภาพแวดล้อมห้องนอนผู้สูงอายุ ให้ปลอดภัย ลดความเสี่ยงการล้ม</Link></h3>
              <p className="card-snippet">การหกล้มในผู้สูงอายุสร้างอันตรายร้ายแรง แนะนำวิธีเลือกแสงสว่าง ราวจับข้างเตียง และความสูงของเตียงไฟฟ้าที่ช่วยให้ผู้สูงอายุลุกนั่งและก้าวลงเตียงได้อย่างมั่นใจ</p>
              <div className="card-footer"><span>โดย นักกายภาพบำบัด Hana Care</span>{" "}<Link href="/articles/how-to-choose-patient-bed/" className="read-link">อ่านต่อ →</Link></div>
            </div>
          </article>
          {/* Article Card 5 */}
          <article className="article-card" data-category="guide">
            <div className="card-img-wrap"><Image src="/assets/images/service-delivery.jpg" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" alt="White-Glove Service" />{" "}<span className="card-tag">คู่มือการเลือกเตียง</span></div>
            <div className="card-body">
              <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 05 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 3 นาที</span></div>
              <h3 className="card-title"><Link href="/articles/how-to-choose-patient-bed/">บริการ White-Glove Service จากภัทรลิสซิ่ง ช่วยผ่อนแรงครอบครัวอย่างไร</Link></h3>
              <p className="card-snippet">มากกว่าแค่การส่งสินค้า ทำความรู้จักบริการส่ง ติดตั้ง ประกอบเตียงถึงห้องนอน พร้อมสอนการใช้งานรีโมทควบคุมเตียงอย่างละเอียดโดยทีมช่างมืออาชีพ</p>
              <div className="card-footer"><span>โดย Hana Care Team</span>{" "}<Link href="/articles/how-to-choose-patient-bed/" className="read-link">อ่านต่อ →</Link></div>
            </div>
          </article>
          {/* Article Card 6 */}
          <article className="article-card" data-category="care">
            <div className="card-img-wrap"><Image src="/assets/images/hero.jpg" width={1376} height={768} sizes="(max-width: 768px) 100vw, 50vw" alt="โภชนาการผู้ป่วยพักฟื้น" />{" "}<span className="card-tag">การดูแลผู้ป่วยติดเตียง</span></div>
            <div className="card-body">
              <div className="article-meta"><span><Icon name="calendar" className="inline-icon" /> 01 ก.ย. 2026</span>{" "}<span>•</span>{" "}<span><Icon name="clock" className="inline-icon" /> อ่าน 5 นาที</span></div>
              <h3 className="card-title"><Link href="/articles/how-to-choose-patient-bed/">โภชนาการและการดูแลอาหารที่เหมาะสม สำหรับผู้ป่วยพักฟื้นหลังผ่าตัดที่บ้าน</Link></h3>
              <p className="card-snippet">อาหารที่ช่วยเร่งการฟื้นตัวของเนื้อเยื่อ ป้องกันอาการท้องผูกจากการนอนเตียงเป็นเวลานาน และการจัดท่านอนปรับระดับหัวเตียง 30-45 องศาเพื่อป้องกันการสำลัก</p>
              <div className="card-footer"><span>โดย โภชนากร Hana Care</span>{" "}<Link href="/articles/how-to-choose-patient-bed/" className="read-link">อ่านต่อ →</Link></div>
            </div>
          </article>
        </div>
      </div>
    </ArticleFilterProvider>
  );
}
