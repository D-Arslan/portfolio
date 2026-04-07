"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";

export default function Hero() {
  const { t } = useLanguage();
  const tr = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--gold-glow)_0%,transparent_70%)]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 79px, var(--gold) 79px, var(--gold) 80px)",
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Overline */}
            <div className="inline-flex items-center gap-2.5 w-fit">
              <span className="w-6 h-px bg-[var(--gold)] opacity-50" />
              <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--gold)] uppercase tracking-[3px]">
                {t({ fr: "Développeur · Fondateur · IA", en: "Developer · Founder · AI" })}
              </span>
              <span className="w-6 h-px bg-[var(--gold)] opacity-50" />
            </div>

            {/* Title */}
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-[clamp(44px,5.5vw,72px)] font-bold leading-[1.05] tracking-tight">
                <span className="text-[var(--gold)] inline-block" style={{ animation: "fadeSlide 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
                  Arslan
                </span>{" "}
                <span className="text-[var(--gold)] inline-block" style={{ animation: "fadeSlide 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}>
                  DIF
                </span>
                <br />
                <span className="text-[var(--text)] inline-block" style={{ animation: "fadeSlide 0.8s 0.3s both" }}>
                  Full Stack
                </span>
                <br />
                <span className="text-[var(--muted)] font-normal inline-block" style={{ animation: "fadeSlide 0.8s 0.45s both" }}>
                  &amp; {t({ fr: "Ingénieur IA", en: "AI Engineer" })}
                </span>
              </h1>
            </div>

            {/* Role line */}
            <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
              <span className="text-[var(--gold)]">→</span>
              {t({ fr: "Fondateur & CTO · FIELDZ", en: "Founder & CTO · FIELDZ" })}
            </div>

            {/* Description */}
            <p className="text-[var(--muted)] text-base leading-relaxed max-w-[480px] border-l-2 border-[var(--gold)] pl-5">
              {t(tr.desc)}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-pale)] text-black font-bold font-[family-name:var(--font-heading)] text-sm px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--gold-glow)]"
              >
                {t(tr.cta_projects)}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold-glow)] font-medium text-sm px-7 py-3.5 rounded-md transition-all"
              >
                {t(tr.cta_contact)}
              </a>
              <a
                href="/cv-alternance.pdf"
                download
                className="inline-flex items-center gap-2 bg-transparent border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold-glow)] text-sm px-5 py-3.5 rounded-md transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/D-Arslan" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/arslan-dif-740077287/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:difarslan@gmail.com" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden md:flex justify-end">
            <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-9 w-[340px]">
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--gold)] bg-[var(--gold-glow)] border border-[var(--gold)]/20 rounded-full px-3 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-pulse" />
                {t({ fr: "disponible · sept. 2026 · paris", en: "available · sept. 2026 · paris" })}
              </div>

              {/* Avatar */}
              <div className="w-[72px] h-[72px] rounded-2xl bg-[var(--surface2)] border border-[var(--border)] flex items-center justify-center mb-5 overflow-hidden">
                <Image
                  src="/golden_favicon-removebg-preview.png"
                  alt="Lion"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div className="font-[family-name:var(--font-heading)] text-[22px] font-bold mb-1">Arslan DIF</div>
              <div className="text-sm font-[family-name:var(--font-mono)] text-[var(--muted)] mb-6">M1 IA · USTHB · Alger</div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard value="12+" label={{ fr: "Projets", en: "Projects" }} />
                <StatCard value="97.8%" label={{ fr: "Précision IA", en: "AI accuracy" }} />
                <StatCard value="2" label={{ fr: "Startups", en: "Startups" }} />
                <StatCard value="4" label={{ fr: "Ans de code", en: "Years coding" }} />
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {["React", "Spring Boot", "PyTorch", "TypeScript"].map((s) => (
                  <span key={s} className="text-xs font-[family-name:var(--font-mono)] border border-[var(--border)] text-[var(--muted)] px-2.5 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--dim)]">
        <div className="w-5 h-8 border border-[var(--border)] rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-[var(--gold)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: { fr: string; en: string } }) {
  const { t } = useLanguage();
  return (
    <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-xl p-4">
      <div className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-[var(--gold)]">{value}</div>
      <div className="text-xs text-[var(--dim)] mt-0.5">{t(label)}</div>
    </div>
  );
}
