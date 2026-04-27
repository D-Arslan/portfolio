"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/context/LanguageContext";
import { translations, certifications } from "@/lib/data";
import { SectionHeader } from "./About";

export default function Certifications() {
  const { t } = useLanguage();
  const tr = translations.certifications;
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="certifications" className={`py-24 fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader num="08" title={t(tr.title)} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex gap-4 items-start bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 transition-all duration-300 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              {/* Badge or icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center">
                {cert.badge ? (
                  <Image
                    src={cert.badge}
                    alt={t(cert.name)}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain p-1.5"
                  />
                ) : (
                  <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--gold)]">
                    {cert.icon}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--text)] leading-snug mb-1">
                  {t(cert.name)}
                </div>
                <div className="text-xs text-[var(--gold)] font-medium mb-1">{cert.org}</div>
                <div className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] mb-2">{cert.date}</div>

                <div className="flex items-center gap-2">
                  <span className={`font-[family-name:var(--font-mono)] text-[10px] tracking-wider px-2 py-0.5 rounded border ${
                    cert.status === "completed"
                      ? "bg-[var(--gold)]/10 text-[var(--gold)] border-[var(--gold)]/20"
                      : "bg-[var(--muted)]/10 text-[var(--muted)] border-[var(--muted)]/20"
                  }`}>
                    {cert.status === "completed" ? t(tr.completed) : t(tr.inProgress)}
                  </span>

                  {cert.credlyId && (
                    <a
                      href={`https://www.credly.com/badges/${cert.credlyId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors underline underline-offset-2"
                    >
                      {t(tr.verify)} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

