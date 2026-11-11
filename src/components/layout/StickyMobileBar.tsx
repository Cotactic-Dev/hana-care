import Icon from "@/components/ui/Icon";
import { contact } from "@/data/site";

/** Mobile-only quick actions (visibility controlled by legacy .sticky-mobile-bar media query). */
export default function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <div className="sticky-mobile-grid">
        <a
          href={contact.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-line btn-sm"
          data-track="click_line"
          data-track-params='{"placement":"sticky_bar"}'
        >
          <Icon name="chat" className="inline-icon" /> ปรึกษาทาง LINE
        </a>
        <a href={contact.phoneHref} className="btn btn-primary btn-sm" data-track="click_call" data-track-params='{"placement":"sticky_bar"}'>
          <Icon name="phone" className="inline-icon" /> โทรด่วนทันที
        </a>
      </div>
    </div>
  );
}
