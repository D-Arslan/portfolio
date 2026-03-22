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

  // Fermeture sur Escape
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
        className="relative z-10 w-full max-w-lg bg-[#18181b] border border-[#3f3f46] rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#27272a]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: project.accent + "20", color: project.accent }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: project.accent }} />
            </div>
            <div>
              <h2 className="font-semibold text-white text-lg leading-tight">{project.title}</h2>
              <span className="text-xs text-[#52525b]">{project.year}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#52525b] hover:text-white transition-colors p-1 -mr-1 -mt-1"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex flex-col gap-5">
          {/* Description complète */}
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            {t(project.description)}
          </p>

          {/* Stack complète */}
          <div>
            <p className="text-xs text-[#52525b] uppercase tracking-wider mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-[#27272a] border border-[#3f3f46] text-[#a1a1aa] px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Catégories */}
          <div>
            <p className="text-xs text-[#52525b] uppercase tracking-wider mb-3">Catégories</p>
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

        {/* Footer — liens */}
        {(project.github || project.demo) && (
          <div className="flex gap-3 p-6 pt-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#27272a] hover:bg-[#3f3f46] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
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
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
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
