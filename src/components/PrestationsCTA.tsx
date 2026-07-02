"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrestationsCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-12 md:px-16 md:py-16 text-center">
          {/* Gold accents */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,var(--gold-glow)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative">
            <span className="inline-block font-[family-name:var(--font-mono)] text-xs tracking-[3px] uppercase text-[var(--gold)] mb-4">
              {t({ fr: "Prestations · Freelance", en: "Services · Freelance" })}
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight leading-[1.1] mb-4">
              {t({ fr: "Un projet web ou mobile ?", en: "A web or mobile project?" })}{" "}
              <span className="text-[var(--gold)]">{t({ fr: "Concrétisons-le.", en: "Let's build it." })}</span>
            </h2>
            <p className="text-[var(--muted)] leading-relaxed max-w-xl mx-auto mb-8">
              {t({
                fr: "Site vitrine, application web, mobile ou solution IA — je conçois et développe votre produit sur mesure, de A à Z.",
                en: "Showcase site, web app, mobile or AI solution — I design and build your product end to end.",
              })}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-pale)] text-black font-bold font-[family-name:var(--font-heading)] text-sm px-8 py-3.5 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--gold-glow)]"
            >
              {t({ fr: "Découvrir mes prestations", en: "Discover my services" })}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
