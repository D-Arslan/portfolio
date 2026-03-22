"use client";

import {
  Monitor, Server, Smartphone, Brain, Wrench, Shield, type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, skillGroups } from "@/lib/data";
import { SectionTitle } from "./About";
import { useInView } from "@/hooks/useInView";

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor, Server, Smartphone, Brain, Wrench, Shield,
};

export default function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="skills" className={`py-24 bg-[#0d0d10] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>{t(translations.skills.title)}</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {skillGroups.map((group) => {
            const Icon = ICON_MAP[group.icon];
            return (
              <div
                key={group.icon}
                className="bg-[#18181b] border border-[#3f3f46] rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="w-5 h-5 text-[#3b82f6]" />}
                  <h3 className="font-semibold text-white text-sm">{t(group.label)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-[#27272a] text-[#a1a1aa] px-2.5 py-1 rounded-md"
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
