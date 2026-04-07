"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";
import { SectionHeader } from "./About";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { t } = useLanguage();
  const tr = translations.contact;
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="contact" className={`py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionHeader num="06" title={t(tr.title)} />

        <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-20 mt-14 items-center">
          {/* Left: heading + sub + email */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[clamp(36px,4vw,52px)] font-bold tracking-tight leading-[1.1] mb-5">
              {t({ fr: "Travaillons", en: "Let's work" })}{" "}
              <span className="text-[var(--gold)]">{t({ fr: "ensemble", en: "together" })}</span>
            </h3>
            <p className="text-[var(--muted)] leading-relaxed max-w-md mb-8">{t(tr.subtitle)}</p>
            <a
              href="mailto:difarslan@gmail.com"
              className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[15px] text-[var(--gold)] border-b border-[var(--gold)]/30 pb-1 hover:border-[var(--gold)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              difarslan@gmail.com
            </a>
          </div>

          {/* Right: link cards */}
          <div className="flex flex-col gap-3">
            <ContactLink
              href="mailto:difarslan@gmail.com"
              icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              label={t(tr.email_label)}
              value="difarslan@gmail.com"
            />
            <ContactLink
              href="https://www.linkedin.com/in/arslan-dif-740077287/"
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
              label="LinkedIn"
              value="arslan-dif-740077287"
            />
            <ContactLink
              href="https://github.com/D-Arslan"
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>}
              label="GitHub"
              value="D-Arslan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--gold)]/30 rounded-xl p-4 transition-all"
    >
      <div className="w-10 h-10 rounded-lg bg-[var(--gold-glow)] border border-[var(--gold)]/15 flex items-center justify-center text-[var(--gold)] flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--dim)]">{label}</span>
        <span className="text-sm text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">{value}</span>
      </div>
      <svg className="w-4 h-4 text-[var(--dim)] group-hover:text-[var(--gold)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}
