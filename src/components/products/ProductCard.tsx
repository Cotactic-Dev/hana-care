import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import SampleBadge from "@/components/ui/SampleBadge";
import { formatTHB, type Product } from "@/data/products";

export default function ProductCard({ p, featured = false }: { p: Product; featured?: boolean }) {
  const from = Math.min(...Object.values(p.monthly));
  return (
    <div className={`product-card${featured ? " featured" : ""}`}>
      <span className={`product-badge-flag ${p.badgeClass}`}>{p.badge}</span>
      <div className="product-image-wrap bg-[#f2f2f4]">
        <Link href={`/patient-beds/${p.slug}/`}>
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="h-full! w-full object-cover!"
          />
        </Link>
      </div>
      <div className="product-content">
        <span className="product-subtitle">France Bed · {p.tier}</span>
        <h3 className="product-name">
          <Link href={`/patient-beds/${p.slug}/`}>{p.modelName}</Link>
        </h3>
        <p className="product-tagline">{p.tagline}</p>
        <ul className="product-specs-list">
          {p.highlights.map((h) => (
            <li className="product-spec-item" key={h}>
              <i><Icon name="check" /></i> {h}
            </li>
          ))}
        </ul>
        <div className="product-pricing-box">
          <div className="pricing-row">
            <span className="price-label">ค่าเช่าเริ่มต้น:</span>
            <span className="inline-flex items-baseline gap-1.5">
              <span className="price-value-main">{formatTHB(from)}</span>
              <span className="text-sm text-ink-muted">/ เดือน</span>
            </span>
          </div>
          <div className="mt-2 flex justify-end">
            <SampleBadge />
          </div>
        </div>
        <div className="product-card-actions">
          <Link href={`/patient-beds/${p.slug}/`} className="btn btn-secondary btn-sm">
            ดูรายละเอียด
          </Link>
          <Link
            href={`/contact-us/?model=${p.slug}#rental-form`}
            className="btn btn-primary btn-sm"
            data-track="select_item"
            data-track-params={JSON.stringify({ item_id: p.sku, item_name: p.modelName, from: "product_card" })}
          >
            ขอเช่ารุ่นนี้
          </Link>
        </div>
      </div>
    </div>
  );
}
