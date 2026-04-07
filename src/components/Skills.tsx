"use client";

import {
  Monitor, Server, Smartphone, Brain, Wrench, Shield, type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, skillGroups } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor, Server, Smartphone, Brain, Wrench, Shield,
};

export default function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="skills" className={`py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionHeader num="03" title={t(translations.skills.title)} />

        <div className="flex flex-col gap-6 mt-14">
          {skillGroups.map((group) => {
            const Icon = ICON_MAP[group.icon];
            return (
              <div
                key={group.icon}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-6 items-start pb-6 border-b border-[var(--border)] last:border-b-0"
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4 text-[var(--gold)]" />}
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--gold)] uppercase tracking-[1.5px]">
                    {t(group.label)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] px-3.5 py-1.5 rounded-md transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold-glow)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
