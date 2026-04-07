"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { t } = useLanguage();
  const tr = translations.about;
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="about" className={`py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionHeader num="01" title={t(tr.title)} />

        <div className="grid md:grid-cols-[1fr_360px] gap-12 md:gap-20 items-start mt-14">
          {/* Text + photo */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 text-[var(--muted)] leading-[1.8]">
              <p>{t(tr.p1)}</p>
              <p>{t(tr.p2)}</p>
              <p>{t(tr.p3)}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { fr: "Disponible Sept. 2026", en: "Available Sept. 2026" },
                { fr: "Paris", en: "Paris" },
                { fr: "Alternance", en: "Apprenticeship" },
                { fr: "Anglais C2", en: "C2 English" },
                { fr: "Bac TB 17/20", en: "Bac Honors 17/20" },
              ].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-[family-name:var(--font-mono)] border border-[var(--border)] text-[var(--muted)] px-3.5 py-1.5 rounded"
                >
                  {t(tag)}
                </span>
              ))}
            </div>

            {/* Photo mobile */}
            <div className="flex md:hidden justify-center mt-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--gold)]/20 to-transparent rounded-2xl blur-sm" />
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-[var(--border)]">
                  <Image src="/photo.png" alt="Arslan DIF" fill className="object-cover object-[0%_0%]" priority />
                </div>
              </div>
            </div>
          </div>

          {/* Right aside: stats + photo */}
          <div className="hidden md:flex flex-col gap-3">
            {/* Photo */}
            <div className="relative mb-2">
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--gold)]/20 to-transparent rounded-2xl blur-sm" />
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image src="/photo.png" alt="Arslan DIF" fill className="object-cover object-[0%_0%]" priority />
              </div>
            </div>

            {/* Stats blocks */}
            <AsideBlock label={t({ fr: "Meilleure précision IA", en: "Best AI accuracy" })} value="97.8%" sub="EuroSAT · ResNet-18" />
            <AsideBlock label={t({ fr: "Projets réalisés", en: "Projects completed" })} value="12+" sub={t({ fr: "Web, Mobile, IA, Cyber", en: "Web, Mobile, AI, Cyber" })} />
            <AsideBlock label={t({ fr: "Startups fondées", en: "Startups founded" })} value="2" sub="FIELDZ · Coiflow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AsideBlock({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
      <div className="text-xs font-[family-name:var(--font-mono)] text-[var(--gold)] uppercase tracking-[1.5px] mb-2.5">{label}</div>
      <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--gold)]">{value}</div>
      <div className="text-sm text-[var(--dim)] mt-0.5">{sub}</div>
    </div>
  );
}

export function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--gold)] opacity-70">{num}</span>
      <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}
