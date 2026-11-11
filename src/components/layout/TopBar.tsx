import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { contact } from "@/data/site";

export default function TopBar() {
  return (
    <div className="top-announcement">
      <div className="container">
        <div>
          <span>
            <Icon name="sparkles" className="inline-icon" /> บริการเช่าเตียงปรับระดับ France Bed ภายใต้ <strong>บริษัท ภัทรลิสซิ่ง จำกัด (มหาชน)</strong>
          </span>
        </div>
        <div className="top-announcement-links">
          <a href={contact.phoneHref} className="top-announcement-link" data-track="click_call" data-track-params='{"placement":"top_bar"}'>
            <span>
              <Icon name="phone" className="inline-icon" /> Call Center: <strong>{contact.phoneDisplay}</strong>
            </span>
          </a>
          <Link href="/services/" className="top-announcement-link">
            <span><Icon name="pin" className="inline-icon" /> บริการส่งและติดตั้งฟรี กทม.-ปริมณฑล</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
