"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";

export default function Hero() {
  const { t } = useLanguage();
  const tr = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8b5cf6]/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 w-fit bg-[#18181b] border border-[#3f3f46] rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-[#a1a1aa]">{t(tr.available)}</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                {t(tr.title)}
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3b82f6] leading-tight">
                {t(tr.subtitle)}
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed max-w-md">
              {t(tr.desc)}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {t(tr.cta_projects)}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent border border-[#3f3f46] hover:border-[#a1a1aa] text-[#a1a1aa] hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {t(tr.cta_contact)}
              </a>
            </div>

            {/* CV Downloads */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/cv-alternance.pdf"
                download
                className="inline-flex items-center gap-2 bg-transparent border border-[#3f3f46] hover:border-[#3b82f6] text-[#a1a1aa] hover:text-[#3b82f6] text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t(tr.cv_alternance_label)}
              </a>
              <a
                href="/cv-master.pdf"
                download
                className="inline-flex items-center gap-2 bg-transparent border border-[#3f3f46] hover:border-[#3b82f6] text-[#a1a1aa] hover:text-[#3b82f6] text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t(tr.cv_master_label)}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/D-Arslan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arslan-dif-740077287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:difarslan@gmail.com"
                className="text-[#a1a1aa] hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden md:flex justify-end">
            <div className="bg-[#18181b] border border-[#3f3f46] rounded-2xl p-8 w-80">
              <div className="grid grid-cols-2 gap-6">
                <StatCard value="12+" label={{ fr: "Projets", en: "Projects" }} />
                <StatCard value="4" label={{ fr: "Ans de code", en: "Years coding" }} />
                <StatCard value="2" label={{ fr: "Startups", en: "Startups" }} />
                <StatCard value="97.8%" label={{ fr: "Précision IA", en: "AI accuracy" }} />
              </div>

              <div className="mt-6 pt-6 border-t border-[#27272a]">
                <p className="text-xs text-[#a1a1aa] mb-3">Stack principale</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Spring Boot", "PyTorch", "TypeScript"].map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#27272a] text-[#a1a1aa] px-2.5 py-1 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#a1a1aa]">
        <div className="w-5 h-8 border border-[#3f3f46] rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-[#a1a1aa] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: { fr: string; en: string } }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-xs text-[#a1a1aa]">{t(label)}</span>
    </div>
  );
}
