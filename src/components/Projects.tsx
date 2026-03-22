"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import ProjectModal from "./ProjectModal";
import {
  Trophy, Scissors, Satellite, ShieldAlert, BookOpen, Globe,
  CreditCard, Wallet, Code, HeartPulse, Heart, Bug, type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, projects, type Category, type Project } from "@/lib/data";
import { SectionTitle } from "./About";

const FILTERS: { key: "all" | Category; labelKey: keyof typeof translations.projects.filters }[] = [
  { key: "all",       labelKey: "all" },
  { key: "fullstack", labelKey: "fullstack" },
  { key: "aiml",      labelKey: "aiml" },
  { key: "mobile",    labelKey: "mobile" },
  { key: "cyber",     labelKey: "cyber" },
];

const PROJECT_ICONS: Record<string, LucideIcon> = {
  fieldz:              Trophy,
  coiflow:             Scissors,
  eurosat:             Satellite,
  cyberlab:            ShieldAlert,
  "guide-terminale":   BookOpen,
  sentinel2:           Globe,
  "id-recognition":    CreditCard,
  budgy:               Wallet,
  compilateur:         Code,
  esante:              HeartPulse,
  love101:             Heart,
  "virus-macro":       Bug,
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
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>{t(tr.title)}</SectionTitle>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all ${
                active === key
                  ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                  : "border-[#3f3f46] text-[#a1a1aa] hover:border-[#a1a1aa] hover:text-white"
              }`}
            >
              {t(tr.filters[labelKey])}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
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
  const tr = translations.projects;
  const Icon = PROJECT_ICONS[project.id];

  return (
    <div
      onClick={onClick}
      className="group flex flex-col bg-[#18181b] border border-[#3f3f46] rounded-xl p-5 hover:border-[#a1a1aa]/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: project.accent + "20", color: project.accent }}
        >
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        {project.featured && (
          <span className="text-xs bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] px-2 py-0.5 rounded-full">
            {t(tr.featured)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-white">{project.title}</h3>
          <span className="text-xs text-[#52525b]">{project.year}</span>
        </div>
        <p className="text-sm text-[#a1a1aa] leading-relaxed line-clamp-3">
          {t(project.description)}
        </p>
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs bg-[#27272a] text-[#71717a] px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs text-[#52525b] px-1 py-0.5">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#27272a]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {t(tr.code)}
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {t(tr.demo)}
          </a>
        )}
      </div>
    </div>
  );
}
