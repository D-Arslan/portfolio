"use client";

import { GraduationCap, Award, BookOpen, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, educations } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

const ICONS: Record<string, LucideIcon> = {
  "USTHB – Alger": GraduationCap,
  "Académie Aix-Marseille": Award,
};

export default function Education() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="education" className={`py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionHeader num="05" title={t(translations.education.title)} />

        <div className="flex flex-col mt-14">
          {educations.map((edu, i) => {
            const Icon = ICONS[edu.institution] ?? BookOpen;
            return (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-8 border-b border-[var(--border)] first:border-t first:border-[var(--border)]"
              >
                {/* Left */}
                <div>
                  <div className="font-[family-name:var(--font-mono)] text-xs text-[var(--dim)] mb-1.5">{edu.period}</div>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[var(--gold)]" />
                    <span className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[var(--gold)]">{edu.institution}</span>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className="font-[family-name:var(--font-heading)] text-base font-semibold">{t(edu.degree)}</span>
                    {edu.grade && (
                      <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--gold)] bg-[var(--gold-glow)] border border-[var(--gold)]/20 px-2.5 py-0.5 rounded-full">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{t(edu.details)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
