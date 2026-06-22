"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, skillGroups } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

export default function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="skills" className={`py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader num="03" title={t(translations.skills.title)} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {skillGroups.map((group) => (
            <div key={group.icon}>
              <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[.12em] uppercase text-[var(--gold)] mb-5">
                {t(group.label)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] px-3.5 py-1.5 rounded-md transition-all duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-px cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

