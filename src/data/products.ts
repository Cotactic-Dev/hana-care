import type { IconName } from "@/components/ui/Icon";
// Single source of truth for Hana Care bed models + rental plans.
// ⚠ MOCKUP: prices and technical specs below are SAMPLE DATA (flagged with `sample: true`
// and rendered with <SampleBadge/>). Replace with figures from the client before launch.
// Facts confirmed by the client deck: model names, positioning, France Bed Japan, อย. registration,
// service types (short-term rent core, long-term financial lease, rent-to-own).

export type ProductSlug = "espoir" | "granmax" | "multi-position";
export type PlanId = "short" | "lease" | "rto";

export interface RentalPlan {
  id: PlanId;
  name: string;
  nameEn: string;
  term: string;
  bestFor: string;
  includes: string[];
  popular?: boolean;
}

export const rentalPlans: RentalPlan[] = [
  {
    id: "short",
    name: "เช่าระยะสั้น",
    nameEn: "Short-term Rent",
    term: "1–6 เดือน",
    bestFor: "ช่วงพักฟื้นหลังออกจากโรงพยาบาล หรือผู้ที่ไม่ต้องการซื้อเป็นเจ้าของ",
    includes: ["ส่ง ติดตั้ง และสาธิตการใช้งานถึงบ้าน", "ดูแลซ่อมบำรุงตลอดสัญญา", "เก็บเตียงคืนถึงบ้านเมื่อครบกำหนด"],
    popular: true,
  },
  {
    id: "lease",
    name: "ลีสซิ่งระยะยาว",
    nameEn: "Long-term Financial Lease",
    term: "12–36 เดือน",
    bestFor: "ผู้ที่ต้องใช้งานระยะยาว หรือสถานพยาบาล / ศูนย์ดูแลผู้สูงอายุ",
    includes: ["ค่าเช่ารายเดือนต่ำกว่าแบบระยะสั้น", "ส่ง ติดตั้ง และสาธิตการใช้งาน", "บริการหลังการขายตลอดสัญญา"],
  },
  {
    id: "rto",
    name: "เช่าเพื่อเป็นเจ้าของ",
    nameEn: "Rent-to-own",
    term: "24–36 เดือน",
    bestFor: "ผู้ที่อยากผ่อนเป็นรายเดือนและเป็นเจ้าของเตียงเมื่อครบสัญญา",
    includes: ["เปลี่ยนเป็นกรรมสิทธิ์ของผู้เช่าเมื่อครบสัญญา", "ส่ง ติดตั้ง และสาธิตการใช้งาน", "บริการหลังการขายตลอดสัญญา"],
  },
];

export interface Product {
  slug: ProductSlug;
  modelName: string;
  sku: string;
  tier: string;
  badge: string;
  badgeClass: "badge-flag-value" | "badge-flag-popular" | "badge-flag-premium";
  tagline: string;
  description: string;
  image: { src: string; width: number; height: number; alt: string };
  bestFor: string[];
  highlights: string[];
  features: { icon: IconName; title: string; text: string }[];
  /** SAMPLE monthly prices in THB */
  monthly: Record<PlanId, number>;
  /** SAMPLE spec rows (except the ones marked confirmed) */
  specs: { label: string; value: string; confirmed?: boolean }[];
  seo: { title: string; description: string };
}

const COMMON_SPECS = [
  { label: "ผู้ผลิต", value: "France Bed (ประเทศญี่ปุ่น)", confirmed: true },
  { label: "การรับรอง", value: "ผ่านการขึ้นทะเบียนกับ อย. เรียบร้อยแล้ว", confirmed: true },
  { label: "บริการ", value: "ส่ง ติดตั้ง และสาธิตการใช้งานถึงห้องนอน โดยทีมผู้เชี่ยวชาญ", confirmed: true },
];

export const products: Product[] = [
  {
    slug: "espoir",
    modelName: "Espoir",
    sku: "HC-ESP",
    tier: "รุ่นเริ่มต้น",
    badge: "รุ่นเริ่มต้น คุ้มค่า",
    badgeClass: "badge-flag-value",
    tagline: "เตียงปรับระดับรุ่นเริ่มต้น กะทัดรัด เหมาะกับพื้นที่จำกัด",
    description:
      "โครงสร้างแยก 8 ชิ้นส่วน ขนย้ายผ่านประตูและลิฟต์คอนโดได้สะดวก ติดตั้งได้แม้ในห้องนอนขนาดเล็ก เหมาะสำหรับผู้สูงอายุที่ยังช่วยเหลือตัวเองได้บางส่วน และครอบครัวที่ต้องการเริ่มต้นดูแลที่บ้านอย่างคุ้มค่า",
    image: { src: "/assets/images/bed-espoir.jpg", width: 800, height: 530, alt: "เตียงปรับระดับ Hana Care รุ่น Espoir" },
    bestFor: ["ผู้สูงอายุที่ยังพอช่วยเหลือตัวเองได้", "บ้านหรือคอนโดที่มีพื้นที่จำกัด", "เช่าระยะสั้นช่วงพักฟื้น"],
    highlights: ["โครงสร้าง 8 ชิ้นส่วน ขนย้ายง่าย", "เหมาะกับห้องขนาดเล็ก", "ปรับพนักพิงและชันเข่าด้วยรีโมท"],
    features: [
      {
        icon: "puzzle",
        title: "โครงสร้าง 8 ชิ้นส่วน ขนย้ายง่าย",
        text: "แยกชิ้นส่วนได้ จึงขนผ่านประตู บันได และลิฟต์ได้สะดวก ทีมงานประกอบให้ถึงห้องนอนโดยไม่ต้องกังวลเรื่องพื้นที่",
      },
      {
        icon: "house",
        title: "กะทัดรัด เข้ากับห้องนอนทั่วไป",
        text: "ขนาดเหมาะกับพื้นที่จำกัด ยังเหลือพื้นที่ให้ผู้ดูแลเดินรอบเตียงและวางอุปกรณ์จำเป็นได้",
      },
      {
        icon: "utensils",
        title: "ลุกนั่งทานข้าว ดูทีวีได้สบาย",
        text: "ปรับพนักพิงหลังด้วยรีโมท ช่วยให้ผู้ใช้งานลุกนั่งได้เองอย่างมั่นใจ ลดภาระการพยุงของผู้ดูแล",
      },
    ],
    monthly: { short: 2900, lease: 1990, rto: 2490 },
    specs: [
      { label: "ขนาดภายนอก (โดยประมาณ)", value: "กว้าง 91 ซม. x ยาว 200 ซม." },
      { label: "ฟังก์ชันการปรับ", value: "ปรับพนักพิงหลัง และชันเข่า ด้วยรีโมทคอนโทรล" },
      { label: "โครงสร้าง", value: "แยก 8 ชิ้นส่วน ประกอบและขนย้ายสะดวก", confirmed: true },
      { label: "รองรับน้ำหนัก", value: "สูงสุด 150 กก." },
      ...COMMON_SPECS,
    ],
    seo: {
      title: "เตียงปรับระดับ รุ่น Espoir — เช่าเตียงผู้ป่วยรุ่นเริ่มต้น | Hana Care",
      description:
        "เตียงปรับระดับ France Bed รุ่น Espoir โครงสร้าง 8 ชิ้นส่วน เหมาะกับพื้นที่จำกัด ขนย้ายสะดวก บริการเช่าระยะสั้น ลีสซิ่ง และเช่าเพื่อเป็นเจ้าของ พร้อมส่งติดตั้งถึงบ้าน",
    },
  },
  {
    slug: "granmax",
    modelName: "Granmax",
    sku: "HC-GMX",
    tier: "รุ่นพรีเมียม",
    badge: "ยอดนิยมสำหรับครอบครัว",
    badgeClass: "badge-flag-popular",
    tagline: "เตียงปรับระดับพรีเมียม ขนาด Semi-double ดีไซน์กรอบไม้เหมือนเฟอร์นิเจอร์ในบ้าน",
    description:
      "ให้ความรู้สึกเหมือนเตียงนอนในบ้าน ไม่ใช่เตียงโรงพยาบาล ด้วยกรอบไม้โทนอบอุ่นและขนาด Semi-double ที่นอนสบายกว่าเตียงผู้ป่วยทั่วไป เหมาะกับการพักฟื้นระยะยาวที่ต้องการทั้งฟังก์ชันและความสวยงาม",
    image: { src: "/assets/images/bed-granmax.jpg", width: 1600, height: 1067, alt: "เตียงปรับระดับ Hana Care รุ่น Granmax กรอบไม้" },
    bestFor: ["ผู้พักฟื้นระยะยาวที่อยากได้บรรยากาศเหมือนบ้าน", "ผู้ใช้งานที่ต้องการพื้นที่นอนกว้างขึ้น", "ลีสซิ่งระยะยาว / เช่าเพื่อเป็นเจ้าของ"],
    highlights: ["ขนาด Semi-double นอนสบาย", "ดีไซน์กรอบไม้ เข้ากับห้องนอน", "ปรับพนักพิง ชันเข่า และความสูง"],
    features: [
      {
        icon: "wood",
        title: "ดีไซน์กรอบไม้ อบอุ่นเหมือนอยู่บ้าน",
        text: "หัวเตียงและปลายเตียงลายไม้โทนเข้ม กลมกลืนกับเฟอร์นิเจอร์ในห้องนอน ช่วยให้ผู้พักฟื้นรู้สึกผ่อนคลาย ไม่รู้สึกเหมือนอยู่โรงพยาบาล",
      },
      {
        icon: "bed",
        title: "ขนาด Semi-double กว้างกว่าเตียงทั่วไป",
        text: "พลิกตัวได้สบาย ลดความอึดอัดเมื่อต้องนอนบนเตียงเป็นเวลานาน",
      },
      {
        icon: "vertical",
        title: "ปรับระดับได้ ลดภาระผู้ดูแล",
        text: "ปรับพนักพิง ชันเข่า และความสูงของเตียง ช่วยให้การเช็ดตัว ป้อนอาหาร และพยุงลุกนั่งง่ายขึ้น",
      },
    ],
    monthly: { short: 5900, lease: 3990, rto: 4790 },
    specs: [
      { label: "ขนาดเตียง", value: "Semi-double", confirmed: true },
      { label: "ขนาดภายนอก (โดยประมาณ)", value: "กว้าง 125 ซม. x ยาว 210 ซม." },
      { label: "ฟังก์ชันการปรับ", value: "ปรับพนักพิงหลัง ชันเข่า และความสูง-ต่ำ" },
      { label: "ดีไซน์", value: "กรอบไม้แบบเฟอร์นิเจอร์ในบ้าน", confirmed: true },
      { label: "รองรับน้ำหนัก", value: "สูงสุด 170 กก." },
      ...COMMON_SPECS,
    ],
    seo: {
      title: "เตียงปรับระดับ รุ่น Granmax — เตียงผู้ป่วยพรีเมียมกรอบไม้ | Hana Care",
      description:
        "เตียงปรับระดับ France Bed รุ่น Granmax ขนาด Semi-double ดีไซน์กรอบไม้เหมือนเฟอร์นิเจอร์บ้าน บริการเช่าระยะสั้น ลีสซิ่งระยะยาว และเช่าเพื่อเป็นเจ้าของ",
    },
  },
  {
    slug: "multi-position",
    modelName: "Multi-Position",
    sku: "HC-MPS",
    tier: "รุ่นดูแลพิเศษ",
    badge: "สำหรับการดูแลพิเศษ",
    badgeClass: "badge-flag-premium",
    tagline: "เตียงปรับระดับพิเศษ ปรับได้ 4 รูปแบบ นอน เอน นั่ง และยืน",
    description:
      "ออกแบบสำหรับผู้ป่วยที่ต้องการการดูแลเป็นพิเศษ ปรับเปลี่ยนจากท่านอนเป็นท่านั่งแบบเก้าอี้ และช่วยพยุงสู่ท่ายืนได้ ลดการยกตัวผู้ป่วยของผู้ดูแล ส่งเสริมการฟื้นฟูและการเคลื่อนไหว",
    image: { src: "/assets/images/bed-multi-position.jpg", width: 880, height: 640, alt: "เตียงปรับระดับ Hana Care รุ่น Multi-Position ปรับท่านั่ง" },
    bestFor: ["ผู้ป่วยติดเตียงที่ต้องการการดูแลสูง", "ผู้ที่ต้องฝึกลุกนั่ง-ยืนเพื่อฟื้นฟู", "ศูนย์ดูแลผู้สูงอายุ / สถานพยาบาล"],
    highlights: ["ปรับได้ 4 ท่า: นอน เอน นั่ง ยืน", "ช่วยพยุงลุกยืน ลดการยกตัว", "เหมาะกับการดูแลระดับสูง"],
    features: [
      {
        icon: "armchair",
        title: "ปรับ 4 รูปแบบ นอน เอน นั่ง ยืน",
        text: "เปลี่ยนจากเตียงเป็นท่านั่งแบบเก้าอี้ได้ในตัว ผู้ป่วยได้เปลี่ยนอิริยาบถระหว่างวัน ช่วยเรื่องการหายใจและการรับประทานอาหาร",
      },
      {
        icon: "standing",
        title: "ช่วยพยุงสู่ท่ายืน",
        text: "ลดการยกตัวผู้ป่วยของผู้ดูแล ลดความเสี่ยงการบาดเจ็บทั้งผู้ป่วยและผู้ดูแล ส่งเสริมการฝึกลุกยืน",
      },
      {
        icon: "stethoscope",
        title: "สำหรับการดูแลระดับสูง",
        text: "เหมาะกับผู้ป่วยติดเตียง ผู้ป่วยหลังผ่าตัดใหญ่ และสถานพยาบาลที่ต้องการอุปกรณ์มาตรฐานสูง",
      },
    ],
    monthly: { short: 7900, lease: 5490, rto: 6490 },
    specs: [
      { label: "รูปแบบการปรับ", value: "4 รูปแบบ: นอน / เอน / นั่ง / ยืน", confirmed: true },
      { label: "ขนาดภายนอก (โดยประมาณ)", value: "กว้าง 100 ซม. x ยาว 205 ซม." },
      { label: "ระบบควบคุม", value: "รีโมทคอนโทรลไฟฟ้า พร้อมระบบล็อกป้องกันการกดผิดพลาด" },
      { label: "ล้อและเบรก", value: "ล้อเลื่อน 4 ล้อ พร้อมระบบล็อก" },
      { label: "รองรับน้ำหนัก", value: "สูงสุด 150 กก." },
      ...COMMON_SPECS,
    ],
    seo: {
      title: "เตียงปรับระดับ รุ่น Multi-Position — ปรับนอน เอน นั่ง ยืน | Hana Care",
      description:
        "เตียงปรับระดับ France Bed รุ่น Multi-Position ปรับได้ 4 รูปแบบ นอน เอน นั่ง ยืน สำหรับผู้ป่วยที่ต้องการการดูแลพิเศษ บริการเช่าและลีสซิ่งพร้อมส่งติดตั้งถึงบ้าน",
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getPlan = (id: PlanId) => rentalPlans.find((p) => p.id === id)!;

export const formatTHB = (n: number) => "฿" + n.toLocaleString("en-US");

/** Lowest sample monthly price across all models and plans (for "เริ่มต้น ฿x/เดือน") */
export const startingMonthly = Math.min(...products.flatMap((p) => Object.values(p.monthly)));
