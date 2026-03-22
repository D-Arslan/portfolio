"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, experiences } from "@/lib/data";
import { SectionTitle } from "./About";
import { useInView } from "@/hooks/useInView";

export default function Experience() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="experience" className={`py-24 fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>{t(translations.experience.title)}</SectionTitle>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[#27272a]" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#18181b] border-2 border-[#3f3f46] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                </div>

                <div className="bg-[#18181b] border border-[#3f3f46] rounded-xl p-5 hover:border-[#a1a1aa]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-white">{exp.company}</h3>
                      <p className="text-sm text-[#3b82f6]">{t(exp.role)}</p>
                    </div>
                    <span className="text-xs text-[#52525b] bg-[#27272a] px-2.5 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{t(exp.description)}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#27272a] text-[#71717a] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
