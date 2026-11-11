"use client";

import Icon, { type IconName } from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { useUI } from "@/components/ui/UIProvider";
import { formatTHB, getPlan, getProduct, type PlanId, type ProductSlug } from "@/data/products";
import SampleBadge from "@/components/ui/SampleBadge";

type QKey = "q1" | "q2" | "q3";
type Answers = Record<QKey, string | null>;

const STEPS: { key: QKey; title: string; required: string; options: { value: string; icon: IconName; title: string; desc: string }[] }[] = [
  {
    key: "q1",
    title: "คำถามที่ 1: ระดับการเคลื่อนไหวของผู้ใช้งานในปัจจุบันเป็นอย่างไร?",
    required: "กรุณาเลือกระดับการเคลื่อนไหวของผู้ใช้งานก่อนครับ",
    options: [
      { value: "walk", icon: "footprints", title: "พอลุกเดินได้เอง", desc: "ต้องการเตียงที่ช่วยพยุงลุกนั่งและผ่อนคลาย" },
      { value: "assist", icon: "handshake", title: "ต้องมีคนช่วยพยุง", desc: "พักฟื้นหลังผ่าตัดหรืออยู่ระหว่างกายภาพ" },
      { value: "bedridden", icon: "bed-single", title: "นอนติดเตียงเป็นหลัก", desc: "ต้องการการดูแลเต็มเวลาและป้องกันแผลกดทับ" },
    ],
  },
  {
    key: "q2",
    title: "คำถามที่ 2: กิจกรรมการดูแลที่ครอบครัวต้องทำเป็นประจำคืออะไร?",
    required: "กรุณาเลือกกิจกรรมการดูแลหลักก่อนครับ",
    options: [
      { value: "dine", icon: "utensils", title: "ปรับนั่งทานข้าว & พักผ่อน", desc: "เน้นความสะดวกในการปรับพนักพิงและชันเข่า" },
      { value: "rehab", icon: "bed", title: "พักฟื้นระยะยาวอย่างสบาย", desc: "อยากได้เตียงกว้าง นอนสบาย บรรยากาศเหมือนห้องนอนที่บ้าน" },
      { value: "full", icon: "standing", title: "ฝึกลุกนั่ง-ยืน / ดูแลเต็มรูปแบบ", desc: "ต้องการเตียงที่ปรับเป็นท่านั่งและช่วยพยุงยืน" },
    ],
  },
  {
    key: "q3",
    title: "คำถามที่ 3: รูปแบบการเช่าที่ครอบครัวสนใจเบื้องต้น?",
    required: "กรุณาเลือกรูปแบบที่สนใจก่อนครับ",
    options: [
      { value: "short", icon: "calendar", title: "เช่าระยะสั้น", desc: "1–6 เดือน สำหรับช่วงพักฟื้นหลังออกจากโรงพยาบาล" },
      { value: "lease", icon: "file", title: "ลีสซิ่งระยะยาว", desc: "ค่าเช่ารายเดือนต่ำลง สำหรับการใช้งานต่อเนื่อง" },
      { value: "rto", icon: "tag", title: "เช่าเพื่อเป็นเจ้าของ", desc: "ผ่อนรายเดือน และเป็นเจ้าของเมื่อครบสัญญา" },
    ],
  },
];

const REASONS: Record<ProductSlug, string> = {
  espoir:
    "ผู้ใช้งานยังพอช่วยเหลือตัวเองได้ เน้นการลุกนั่งทานข้าวและพักผ่อน รุ่น Espoir กะทัดรัด ขนย้ายง่าย และคุ้มค่าที่สุด",
  granmax:
    "เหมาะกับการพักฟื้นระยะยาวที่ต้องการความสบาย รุ่น Granmax ขนาด Semi-double ดีไซน์กรอบไม้ ให้บรรยากาศเหมือนห้องนอนที่บ้าน",
  "multi-position":
    "ต้องการการดูแลระดับสูงและการฝึกลุกนั่ง-ยืน รุ่น Multi-Position ปรับได้ 4 ท่า นอน เอน นั่ง ยืน ช่วยลดการยกตัวผู้ป่วย",
};

function recommend(a: Answers): ProductSlug {
  if (a.q1 === "bedridden" || a.q2 === "full") return "multi-position";
  if (a.q1 === "walk" && a.q2 === "dine") return "espoir";
  return "granmax";
}

const EMPTY: Answers = { q1: null, q2: null, q3: null };

export default function BedFinderQuiz() {
  const { showToast } = useUI();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [result, setResult] = useState<ProductSlug | null>(null);

  const select = (key: QKey, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    trackEvent("quiz_answer", { question: key, answer: value });
  };

  const goTo = (next: number) => {
    if (next > step && !answers[STEPS[step].key]) {
      showToast(STEPS[step].required, "info");
      return;
    }
    setStep(next);
  };

  const calculate = () => {
    if (!answers.q3) {
      showToast(STEPS[2].required, "info");
      return;
    }
    const slug = recommend(answers);
    setResult(slug);
    trackEvent("quiz_complete", {
      recommended_model: getProduct(slug)!.modelName,
      plan: answers.q3,
      user_mobility: answers.q1,
      user_care: answers.q2,
    });
  };

  const reset = () => {
    setAnswers(EMPTY);
    setResult(null);
    setStep(0);
  };

  const product = result ? getProduct(result)! : null;

  return (
    <section id="bedFinder" className="section">
      <div className="container container-narrow">
        <div className="quiz-wrapper">
          <div className="quiz-header">
            <h3><Icon name="sparkles" className="inline-icon" /> ค้นหารุ่นที่เหมาะกับครอบครัวของคุณใน 3 คำถาม</h3>
            <p>ตอบ 3 คำถามสั้นๆ ระบบช่วยแนะนำรุ่นเตียงและรูปแบบการเช่าที่เหมาะกับผู้ใช้งาน</p>
          </div>

          {!product && (
            <div className="quiz-step-container">
              {STEPS.map((s, i) => (
                <div key={s.key} className="quiz-step-content" style={{ display: i === step ? "block" : "none" }}>
                  <h4 className="quiz-question-title">{s.title}</h4>
                  <div className="quiz-options-grid" role="radiogroup" aria-label={s.title}>
                    {s.options.map((o) => (
                      <div
                        key={o.value}
                        role="radio"
                        tabIndex={0}
                        aria-checked={answers[s.key] === o.value}
                        className={`quiz-option-card${answers[s.key] === o.value ? " selected" : ""}`}
                        onClick={() => select(s.key, o.value)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), select(s.key, o.value))}
                      >
                        <span className="quiz-option-icon"><Icon name={o.icon} /></span>
                        <div className="quiz-option-title">{o.title}</div>
                        <div className="quiz-option-desc">{o.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="quiz-navigation">
                    {i > 0 && (
                      <button onClick={() => goTo(i - 1)} className="btn btn-secondary btn-sm">
                        ← ย้อนกลับ
                      </button>
                    )}
                    <div className="quiz-progress-dots">
                      {STEPS.map((_, d) => (
                        <span key={d} className={`quiz-dot${d === i ? " active" : ""}`}></span>
                      ))}
                    </div>
                    {i < STEPS.length - 1 ? (
                      <button onClick={() => goTo(i + 1)} className="btn btn-primary btn-sm">
                        ถัดไป →
                      </button>
                    ) : (
                      <button onClick={calculate} className="btn btn-primary btn-sm">
                        ดูผลลัพธ์ทันที
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {product && (
            <div className="quiz-result-box" style={{ display: "block" }}>
              <div className="quiz-result-card">
                <span className="rounded-full bg-primary-subtle px-3 py-1 text-[0.85rem] font-bold uppercase text-primary">
                  รุ่นที่แนะนำสำหรับครอบครัวคุณ
                </span>
                <h3 className="mt-3.5 mb-2 text-[1.6rem] text-primary-dark">เตียงปรับระดับ รุ่น {product.modelName}</h3>
                <p className="mb-5 text-[0.95rem] leading-relaxed text-ink-muted">{REASONS[product.slug]}</p>

                <div className="mb-5 overflow-hidden rounded-[var(--radius-md)] border border-warm-border bg-[#f2f2f4]">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                    sizes="(max-width: 860px) 100vw, 800px"
                    className="h-[220px]! w-full object-contain! p-4"
                  />
                </div>

                <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-sm)] bg-warm-bg p-3.5 font-semibold text-primary-dark">
                  <span>
                    {getPlan(answers.q3 as PlanId).name}: {formatTHB(product.monthly[answers.q3 as PlanId])} / เดือน
                  </span>
                  <SampleBadge />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href={`/patient-beds/${product.slug}/`}
                    className="btn btn-primary btn-sm"
                    onClick={() => trackEvent("select_item", { item_id: product.sku, item_name: product.modelName, from: "quiz_result" })}
                  >
                    ไปยังหน้ารายละเอียดรุ่นนี้ →
                  </Link>
                  <Link href={`/contact-us/?model=${product.slug}&plan=${answers.q3}#rental-form`} className="btn btn-secondary btn-sm">
                    ขอเช่ารุ่นนี้
                  </Link>
                </div>

                <button onClick={reset} className="mt-4 text-[0.8rem] text-ink-light underline">
                  เริ่มทำแบบประเมินใหม่อีกครั้ง
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
