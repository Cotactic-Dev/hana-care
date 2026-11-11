import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container-narrow text-center">
        <span className="section-tag">404</span>
        <h1 className="section-title">ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="section-desc mb-8">หน้านี้อาจถูกย้ายหรือไม่มีอยู่แล้ว</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">กลับสู่หน้าแรก</Link>
          <Link href="/patient-beds/" className="btn btn-secondary">ดูเตียงผู้ป่วย 3 รุ่น</Link>
        </div>
      </div>
    </section>
  );
}
