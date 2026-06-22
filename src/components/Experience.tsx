"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, experiences } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

export default function Experience() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  const col1 = experiences.slice(0, 4);
  const col2 = experiences.slice(4);

  return (
    <section ref={ref} id="experience" className={`py-24 fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader num="04" title={t(translations.experience.title)} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-14">
          <Timeline items={col1} />
          <Timeline items={col2} />
        </div>
      </div>
    </section>
  );
}

function Timeline({ items }: { items: typeof experiences }) {
  const { t } = useLanguage();

  return (
    <div className="relative pl-6 border-l border-[var(--border)]">
      {items.map((exp, i) => (
        <div key={i} className="relative mb-10 pl-6 last:mb-0">
          {/* Dot */}
          <div className="absolute -left-[1.95rem] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--gold)] border-2 border-[var(--bg)]" />

          <div className="font-[family-name:var(--font-mono)] text-xs text-[var(--dim)] mb-1.5">{exp.period}</div>
          <div className="font-[family-name:var(--font-heading)] text-base font-semibold mb-0.5">{t(exp.role)}</div>
          <div className="text-sm text-[var(--gold)] font-medium mb-2">{exp.company}</div>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{t(exp.description)}</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <span key={tag} className="text-xs font-[family-name:var(--font-mono)] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--dim)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

