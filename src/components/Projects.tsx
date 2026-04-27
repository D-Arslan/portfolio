"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";
import { translations, projects, type Category, type Project } from "@/lib/data";
import { SectionHeader } from "./About";

const FILTERS: { key: "all" | Category; labelKey: keyof typeof translations.projects.filters }[] = [
  { key: "all",        labelKey: "all" },
  { key: "production", labelKey: "production" },
  { key: "fullstack",  labelKey: "fullstack" },
  { key: "aiml",       labelKey: "aiml" },
  { key: "mobile",     labelKey: "mobile" },
  { key: "cyber",      labelKey: "cyber" },
];

const THUMB_URLS: Record<string, string> = {
  fieldz:   "https://fieldz.pro/",
  coiflow:  "https://www.coiflow.com/",
  cyberlab: "https://cyberlab-uxey.onrender.com/",
  love101:  "https://love101-red.vercel.app/fr",
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader num="02" title={t(tr.title)} />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-sm font-[family-name:var(--font-mono)] px-4 py-1.5 rounded-full border transition-all ${
                active === key
                  ? "bg-[var(--gold)] border-[var(--gold)] text-black font-medium"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              }`}
            >
              {t(tr.filters[labelKey])}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number; // position in filtered list, used for num display
  onClick: () => void;
}) {
  const { t } = useLanguage();
  const thumbUrl = THUMB_URLS[project.id];
  const mshots = thumbUrl
    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(thumbUrl)}?w=1280&h=800`
    : null;

  return (
    <div
      onClick={onClick}
      className="group bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_var(--shadow)] hover:border-[var(--gold)]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Thumbnail */}
      <div className="h-[160px] relative overflow-hidden bg-[var(--bg2)]">
        {mshots ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mshots}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <>
            <div className="absolute inset-0" style={{
              backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, color-mix(in srgb, var(--muted) 7%, transparent) 10px, color-mix(in srgb, var(--muted) 7%, transparent) 11px)"
            }} />
            <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-mono)] text-xs text-[var(--dim)] tracking-widest px-4 text-center">
              {project.title}
            </div>
          </>
        )}
        {/* Live link badge */}
        {thumbUrl && (
          <a
            href={thumbUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-2 right-2 z-10 flex items-center gap-1 px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] rounded font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] no-underline opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:border-[var(--gold)] hover:text-[var(--gold)] backdrop-blur-sm"
          >
            Voir le site â†—
          </a>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--dim)] mb-1.5">{String(index + 1).padStart(2, "0")}</div>
        <div className="font-[family-name:var(--font-heading)] text-sm font-semibold mb-1 leading-snug text-[var(--text)]">
          {project.title}
        </div>
        <p className="text-xs leading-relaxed text-[var(--muted)] mb-3 line-clamp-2">
          {t(project.description)}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((tech, j) => (
            <span
              key={tech}
              className={`text-[10px] font-[family-name:var(--font-mono)] px-1.5 py-0.5 rounded border ${
                j === 0
                  ? "bg-[var(--gold-glow)] text-[var(--gold)] border-[var(--gold)]/25"
                  : "bg-[var(--bg2)] text-[var(--dim)] border-[var(--border)]"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] text-[var(--dim)] px-1">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}

