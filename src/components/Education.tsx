"use client";

import { GraduationCap, Award, BookOpen, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, educations } from "@/lib/data";
import { SectionTitle } from "./About";
import { useInView } from "@/hooks/useInView";

const ICONS: Record<string, LucideIcon> = {
  "USTHB – Alger": GraduationCap,
  "Académie Aix-Marseille": Award,
};

export default function Education() {
  const { t } = useLanguage();

  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="education" className={`py-24 bg-[#0d0d10] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>{t(translations.education.title)}</SectionTitle>

        <div className="mt-12 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[#27272a]" />

          <div className="flex flex-col gap-8">
            {educations.map((edu, i) => {
              const Icon = ICONS[edu.institution] ?? BookOpen;
              return (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#18181b] border-2 border-[#3f3f46] flex items-center justify-center">
                    <Icon className="w-3 h-3 text-[#3b82f6]" />
                  </div>

                  <div className="bg-[#18181b] border border-[#3f3f46] rounded-xl p-5 hover:border-[#a1a1aa]/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-white text-sm">{t(edu.degree)}</h3>
                        <p className="text-sm text-[#3b82f6]">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-[#52525b] bg-[#27272a] px-2.5 py-1 rounded-full whitespace-nowrap">
                          {edu.period}
                        </span>
                        {edu.grade && (
                          <span className="text-xs font-semibold text-green-400">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{t(edu.details)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
