"use client";

import { GraduationCap, Award, BookOpen, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations, educations } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

const ICONS: Record<string, LucideIcon> = {
  "UPEC – Paris": GraduationCap,
  "USTHB – Alger": GraduationCap,
  "Académie Aix-Marseille": Award,
};

export default function Education() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="education" className={`py-16 md:py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader num="05" title={t(translations.education.title)} />

        <div className="flex flex-col mt-10 md:mt-14">
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
                    <div className="w-[72px] h-12 shrink-0 flex items-center justify-center">
                      {edu.logo ? (
                        (() => {
                          const img = (
                            <Image
                              src={theme === "dark" ? edu.logo.dark : edu.logo.light}
                              alt={edu.institution}
                              width={72}
                              height={48}
                              className="max-w-full max-h-full w-auto h-auto object-contain rounded-sm"
                            />
                          );
                          return edu.url ? (
                            <a
                              href={edu.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={t({ fr: `Site officiel – ${edu.institution}`, en: `Official website – ${edu.institution}` })}
                              className="flex items-center justify-center w-full h-full rounded-md transition-transform hover:scale-105 hover:opacity-90"
                            >
                              {img}
                            </a>
                          ) : img;
                        })()
                      ) : (
                        <Icon className="w-5 h-5 text-[var(--gold)]" />
                      )}
                    </div>
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
