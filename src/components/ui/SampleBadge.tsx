/** Marks mockup placeholder data (prices/specs) so nobody mistakes it for final figures. */
export default function SampleBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-dashed border-hana-pink-ink/40 bg-hana-pink-tint px-2 py-0.5 align-middle text-[0.68rem] font-semibold tracking-wide text-hana-pink-ink ${className}`}
      title="ข้อมูลตัวอย่างสำหรับ Mockup — รอข้อมูลจริงจากลูกค้า"
    >
      ข้อมูลตัวอย่าง
    </span>
  );
}
