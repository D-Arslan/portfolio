"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, type Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const tr = translations.projects;
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line with project color */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: project.accent }} />

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: project.accent + "20", border: `1px solid ${project.accent}40` }}>
              <div className="w-3 h-3 rounded-full" style={{ background: project.accent }} />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] font-semibold text-lg leading-tight">{project.title}</h2>
              <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--dim)]">{project.year}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--dim)] hover:text-[var(--text)] transition-colors p-1 -mr-1 -mt-1"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex flex-col gap-5">
          <p className="text-[var(--muted)] text-sm leading-relaxed">{t(project.description)}</p>

          {/* Stack */}
          <div>
            <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--gold)] uppercase tracking-wider mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs font-[family-name:var(--font-mono)] bg-[var(--surface2)] border border-[var(--border)] text-[var(--muted)] px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider mb-3" style={{ color: project.accent }}>
              {t({ fr: "Catégories", en: "Categories" })}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-3 py-1 rounded-full border"
                  style={{ borderColor: project.accent + "50", color: project.accent }}
                >
                  {t(tr.filters[cat])}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        {(project.github || project.demo) && (
          <div className="flex gap-3 p-6 pt-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--surface2)] hover:bg-[var(--border)] text-[var(--text)] text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                {t(tr.code)}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-bold font-[family-name:var(--font-heading)] px-4 py-2.5 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: project.accent, color: project.accentText ?? "#000" }}
              >
                <ExternalLink className="w-4 h-4" />
                {t(tr.demo)}
              </a>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
