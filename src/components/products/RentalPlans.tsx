import Icon from "@/components/ui/Icon";
import Link from "next/link";
import SampleBadge from "@/components/ui/SampleBadge";
import { formatTHB, rentalPlans, type Product } from "@/data/products";

/**
 * Rental service options (short-term rent, financial lease, rent-to-own).
 * Pass `product` to show that model's sample monthly price per plan.
 */
export default function RentalPlans({ product }: { product?: Product }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {rentalPlans.map((plan) => (
        <div
          key={plan.id}
          className={`relative flex flex-col rounded-[var(--radius-md)] border bg-white p-7 shadow-card ${
            plan.popular ? "border-transparent [background:linear-gradient(#fff,#fff)_padding-box,var(--hana-gradient)_border-box] border-2" : "border-warm-border"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-6 rounded-full bg-hana-gradient px-3 py-1 text-xs font-semibold text-white shadow">
              บริการหลัก
            </span>
          )}
          <div className="text-xs font-semibold uppercase tracking-wider text-hana-pink-ink">{plan.nameEn}</div>
          <h3 className="mt-1 text-xl font-bold text-hana-navy">{plan.name}</h3>
          <div className="mt-1 text-sm text-ink-muted">ระยะสัญญา {plan.term}</div>

          {product && (
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-hana-navy">{formatTHB(product.monthly[plan.id])}</span>
              <span className="text-sm text-ink-muted">/ เดือน</span>
              <SampleBadge className="ml-1" />
            </div>
          )}

          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            <strong className="text-ink">เหมาะกับ:</strong> {plan.bestFor}
          </p>
          <ul className="mt-4 mb-6 space-y-2 text-sm">
            {plan.includes.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-hana-purple"><Icon name="check" /></span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/contact-us/?${product ? `model=${product.slug}&` : ""}plan=${plan.id}#rental-form`}
            className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"} btn-sm mt-auto w-full`}
            data-track="select_plan"
            data-track-params={JSON.stringify({ plan: plan.id, model: product?.slug ?? "any" })}
          >
            สนใจแพ็กเกจนี้
          </Link>
        </div>
      ))}
    </div>
  );
}
