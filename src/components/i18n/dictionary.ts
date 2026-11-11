// Ported from assets/js/app.js. Client-side TH/EN toggle (Phase 1 behaviour).
// TODO(Phase 1.5): move to real /en/ routes for SEO (hreflang already points at /en/).

export const dictionary = {
  th: {
    nav_home: "หน้าแรก",
    nav_products: "เตียง 3 รุ่น",
    nav_articles: "บทความน่ารู้",
    nav_compare: "เปรียบเทียบรุ่น",
    nav_services: "บริการ",
    nav_about: "เกี่ยวกับเรา",
    nav_contact: "ติดต่อเรา",
    btn_consult: "ปรึกษาผู้เชี่ยวชาญ",
    hero_badge: "บริการเช่าเตียงปรับระดับ ภายใต้ความมั่นคงของ ภัทรลิสซิ่ง",
    hero_h1_1: "เช่าเตียงปรับระดับมาตรฐานญี่ปุ่น",
    hero_h1_2: "ดูแลคนที่คุณรักได้อย่างอุ่นใจที่บ้าน",
    hero_desc:
      "เตียง France Bed 3 รุ่น ขึ้นทะเบียน อย. เลือกเช่าระยะสั้นช่วงพักฟื้น ลีสซิ่งระยะยาว หรือเช่าเพื่อเป็นเจ้าของ พร้อมทีมงานส่ง ติดตั้ง และสอนการใช้งานถึงห้องนอน",
    hero_btn_rent: "ขอเช่าเตียง — ให้แอดมินติดต่อกลับ",
    hero_btn_quiz: "ค้นหารุ่นที่เหมาะกับคุณ",
  },
  en: {
    nav_home: "Home",
    nav_products: "Our Beds",
    nav_articles: "Articles",
    nav_compare: "Compare Models",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    btn_consult: "Get Advice",
    hero_badge: "Hospital-bed rental backed by Phatra Leasing PLC",
    hero_h1_1: "Rent Japanese-standard Care Beds",
    hero_h1_2: "Care for your loved ones at home",
    hero_desc:
      "3 France Bed models, Thai FDA registered. Choose short-term rent for recovery, long-term lease, or rent-to-own — with delivery, installation and hands-on demo at home.",
    hero_btn_rent: "Request a Bed — We'll Call You",
    hero_btn_quiz: "Find Your Ideal Bed",
    hero_trust_1: "France Bed, Japan",
    hero_trust_1_sub: "All 3 models Thai FDA registered",
    hero_trust_2: "Delivery, Setup & Demo",
    hero_trust_2_sub: "Maintenance included throughout the contract",
    hero_trust_3_sub: "Short rent · Lease · Rent-to-own",
    sec_audience_tag: "WHO IS THIS FOR",
    sec_audience_title: "Designed for Every Caregiving Need at Home",
    sec_audience_desc: "Every family's needs are different — our 3 models each solve a specific care situation.",
    sec_products_tag: "OUR BEDS",
    sec_products_title: "3 France Bed Adjustable Models",
    sec_products_desc: "Pick the model that fits the user's mobility, room size and your family's care routine.",
  },
} as const;

export type Lang = keyof typeof dictionary;
export type DictKey = keyof (typeof dictionary)["th"];
