import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/site";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="mb-4">
              <Image
                src="/assets/images/brand/hanacare-logo-dark.png"
                alt="Hana Care ฮานาแคร์"
                width={512}
                height={93}
                className="brand-logo-footer"
              />
            </div>
            <p className="mb-5 text-[0.85rem] leading-relaxed">
              Healthcare quality with the comfort of home.
              <br />
              บริการเช่าเตียงปรับระดับเพื่อการพักฟื้นที่บ้าน ภายใต้ความมั่นคงของ บริษัท ภัทรลิสซิ่ง จำกัด (มหาชน)
            </p>
            <div className="text-[0.8rem] text-gray-400">
              อาคารรัชดา พลัส 252/6 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">เตียงปรับระดับ 3 รุ่น</h4>
            <ul className="footer-links-list">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/patient-beds/${p.slug}/`}>
                    เตียงรุ่น {p.modelName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/patient-beds/#compare">ตารางเปรียบเทียบ 3 รุ่น</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">บริการและข้อมูล</h4>
            <ul className="footer-links-list">
              <li><Link href="/services/">บริการส่งและติดตั้ง White-Glove</Link></li>
              <li><Link href="/services/">บริการหลังการเช่าและซ่อมบำรุง</Link></li>
              <li><Link href="/articles/">บทความน่ารู้</Link></li>
              <li><Link href="/about-us/">เกี่ยวกับ Phatra Leasing</Link></li>
              <li><Link href="/contact-us/">ติดต่อฝ่ายบริการลูกค้า</Link></li>
              <li><a href="#" data-action="open-privacy">นโยบายความเป็นส่วนตัว (PDPA)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">ติดต่อสอบถามทันที</h4>
            <div className="flex flex-col gap-3">
              <a
                href={contact.phoneHref}
                className="btn btn-secondary btn-sm border-white/30! bg-white/5! text-white!"
                data-track="click_call"
                data-track-params='{"placement":"footer"}'
              >
                <Icon name="phone" className="inline-icon" /> {contact.phoneDisplay}
              </a>
              <a
                href={contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line btn-sm"
                data-track="click_line"
                data-track-params='{"placement":"footer"}'
              >
                <Icon name="chat" className="inline-icon" /> LINE: {contact.lineId}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Phatra Leasing Public Company Limited. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" data-action="open-privacy">Privacy Policy</a>
            <a href="#" data-action="open-privacy">Terms &amp; Conditions</a>
            <a href="#" data-action="open-privacy">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
