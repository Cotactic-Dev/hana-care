import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ProductCard from "@/components/products/ProductCard";
import ComparisonTable from "@/components/products/ComparisonTable";
import RentalPlans from "@/components/products/RentalPlans";
import SampleBadge from "@/components/ui/SampleBadge";
import { products } from "@/data/products";
import { SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "เตียงปรับระดับ France Bed 3 รุ่น — เปรียบเทียบและเช่า | Hana Care" },
  description:
    "เปรียบเทียบเตียงปรับระดับ 3 รุ่น Espoir, Granmax และ Multi-Position จาก France Bed ญี่ปุ่น พร้อมรูปแบบการเช่า ระยะสั้น ลีสซิ่ง และเช่าเพื่อเป็นเจ้าของ",
  alternates: { canonical: "/patient-beds/" },
};

export default function PatientBedsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "เตียงปรับระดับ 3 รุ่น", item: `${SITE_URL}/patient-beds/` },
              ],
            },
            {
              "@type": "ItemList",
              itemListElement: products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}/patient-beds/${p.slug}/`,
                name: p.modelName,
              })),
            },
          ],
        }}
      />

      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li>
              <Link href="/">หน้าแรก</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li aria-current="page">เตียงปรับระดับ 3 รุ่น</li>
          </ul>
        </div>
      </div>

      <section className="page-hero">
        <div className="container">
          <span className="section-tag">OUR BEDS</span>
          <h1 className="page-hero-title">
            เตียงปรับระดับ <span className="text-hana-gradient">France Bed</span> 3 รุ่น
          </h1>
          <p className="page-hero-desc">
            เตียงมาตรฐานญี่ปุ่น ขึ้นทะเบียน อย. ครบทุกรุ่น เลือกรุ่นที่เหมาะกับผู้ใช้งาน แล้วเลือกรูปแบบการเช่าที่เหมาะกับระยะเวลาการดูแล
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-grid">
            {products.map((p, i) => (
              <ProductCard key={p.slug} p={p} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">COMPARE</span>
            <h2 className="section-title">เปรียบเทียบ 3 รุ่น</h2>
            <p className="section-desc">
              คลิกชื่อรุ่นเพื่อไฮไลต์ ค่าเช่าในตารางเป็นราคาตัวอย่าง <SampleBadge />
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      <section id="plans" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">RENTAL PLANS</span>
            <h2 className="section-title">รูปแบบบริการ</h2>
            <p className="section-desc">ทุกแพ็กเกจรวมบริการส่ง ติดตั้ง สาธิตการใช้งาน และดูแลหลังการเช่า</p>
          </div>
          <RentalPlans />
          <div className="mt-10 text-center">
            <Link href="/contact-us/#rental-form" className="btn btn-primary btn-lg">
              ยังเลือกไม่ได้? ให้แอดมินช่วยแนะนำ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
