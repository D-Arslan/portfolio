"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import ProjectModal from "./ProjectModal";
import {
  Trophy, Scissors, Satellite, ShieldAlert, BookOpen, Globe,
  Wallet, Code, HeartPulse, Heart, Bug, Users, type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, projects, type Category, type Project } from "@/lib/data";
import { SectionHeader } from "./About";

const FILTERS: { key: "all" | Category; labelKey: keyof typeof translations.projects.filters }[] = [
  { key: "all",       labelKey: "all" },
  { key: "fullstack", labelKey: "fullstack" },
  { key: "aiml",      labelKey: "aiml" },
  { key: "mobile",    labelKey: "mobile" },
  { key: "cyber",     labelKey: "cyber" },
];

const PROJECT_ICONS: Record<string, LucideIcon> = {
  fieldz:                Trophy,
  coiflow:               Scissors,
  eurosat:               Satellite,
  cyberlab:              ShieldAlert,
  "guide-terminale":     BookOpen,
  sentinel2:             Globe,
  "gestion-visiteurs":   Users,
  budgy:                 Wallet,
  compilateur:           Code,
  esante:                HeartPulse,
  love101:               Heart,
  "virus-macro":         Bug,
};

export default function Projects() {
  const { t } = useLanguage();
  const tr = translations.projects;
  const [active, setActive] = useState<"all" | Category>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, inView } = useInView();

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section ref={ref} id="projects" className={`py-24 fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionHeader num="02" title={t(tr.title)} />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-sm font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-md border transition-all ${
                active === key
                  ? "bg-[var(--gold)] border-[var(--gold)] text-black font-medium"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              }`}
            >
              {t(tr.filters[labelKey])}
            </button>
          ))}
        </div>

        {/* Grid — 3 cols, 1px gap, rounded container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden mt-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: typeof projects[number]; onClick: () => void }) {
  const { t } = useLanguage();
  const Icon = PROJECT_ICONS[project.id];
  const bg = project.accentBg ?? "var(--surface)";
  const accent = project.accent;
  const textColor = project.accentText ?? "#ffffff";

  return (
    <div
      onClick={onClick}
      className="group relative p-7 transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 transition-opacity group-hover:opacity-100" style={{ background: accent }} />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${accent}, transparent 70%)` }}
      />

      {/* Arrow on hover */}
      <span
        className="absolute top-6 right-6 opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm"
        style={{ color: accent }}
      >→</span>

      {/* Icon + Year row */}
      <div className="flex items-center gap-2.5 mb-4">
        {Icon && (
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: accent + "25", color: accent }}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <span className="text-xs font-[family-name:var(--font-mono)] opacity-50" style={{ color: textColor }}>{project.year}</span>
      </div>

      {/* Name */}
      <div className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-2.5 flex items-center gap-2" style={{ color: textColor }}>
        {project.featured && <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ background: accent }} />}
        {project.title}
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5 line-clamp-3 opacity-70" style={{ color: textColor }}>
        {t(project.description)}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs font-[family-name:var(--font-mono)] px-2.5 py-0.5 rounded border"
            style={{ borderColor: accent + "40", color: accent }}
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-1 opacity-50" style={{ color: textColor }}>+{project.tech.length - 4}</span>
        )}
      </div>
    </div>
  );
}
