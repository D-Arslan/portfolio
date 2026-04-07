"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, experiences } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

export default function Experience() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="experience" className={`py-24 fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionHeader num="04" title={t(translations.experience.title)} />

        <div className="flex flex-col mt-14">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-8 border-b border-[var(--border)] first:border-t first:border-[var(--border)]"
            >
              {/* Left: period + company */}
              <div>
                <div className="font-[family-name:var(--font-mono)] text-xs text-[var(--dim)] mb-1.5">{exp.period}</div>
                <div className="font-[family-name:var(--font-heading)] text-[15px] font-semibold">
                  <span className="text-[var(--gold)]">{exp.company}</span>
                </div>
              </div>

              {/* Right: role + desc + tags */}
              <div>
                <div className="font-[family-name:var(--font-heading)] text-base font-semibold mb-2.5">{t(exp.role)}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-3.5">{t(exp.description)}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs font-[family-name:var(--font-mono)] border border-[var(--border)] text-[var(--dim)] px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
