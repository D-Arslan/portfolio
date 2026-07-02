"use client";

import Link from "next/link";
import { Globe, LayoutDashboard, Smartphone, Brain, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, services, catalogue, type CatalogueItem } from "@/lib/data";
import QuoteForm from "./QuoteForm";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  vitrine: Globe,
  webapp: LayoutDashboard,
  mobile: Smartphone,
  ia: Brain,
};

export default function ServicesContent() {
  const { t } = useLanguage();
  const tr = translations.services;

  const process = [
    { t: tr.process.s1_t, d: tr.process.s1_d },
    { t: tr.process.s2_t, d: tr.process.s2_d },
    { t: tr.process.s3_t, d: tr.process.s3_d },
    { t: tr.process.s4_t, d: tr.process.s4_d },
  ];

  // Regroupe les exemples par thème, en conservant l'ordre du tableau
  const themeGroups = catalogue.reduce<{ theme: CatalogueItem["theme"]; items: CatalogueItem[] }[]>((acc, item) => {
    const g = acc.find((x) => x.theme.fr === item.theme.fr);
    if (g) g.items.push(item);
    else acc.push({ theme: item.theme, items: [item] });
    return acc;
  }, []);

  return (
    <main className="pt-24 md:pt-28">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,var(--gold-glow)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--muted)] hover:text-[var(--gold)] transition-colors mb-10"
          >
            <span>←</span> {t(tr.nav_back)}
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--gold)] bg-[var(--gold-glow)] border border-[var(--gold)]/20 rounded-full px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-pulse" />
              {t(tr.badge)}
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-[clamp(40px,5vw,64px)] font-bold leading-[1.05] tracking-tight mb-6">
              {t(tr.heading)}
            </h1>
            <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-8">
              {t(tr.subtitle)}
            </p>
            <a
              href="#devis"
              className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-pale)] text-black font-bold font-[family-name:var(--font-heading)] text-sm px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--gold-glow)]"
            >
              {t(tr.cta)}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  style={{ background: s.accent }}
                />
                {(() => {
                  const Icon = SERVICE_ICONS[s.id] ?? Globe;
                  return (
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: s.accent + "18", border: `1px solid ${s.accent}33` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: s.accent }} strokeWidth={1.75} />
                    </div>
                  );
                })()}

                <div className="flex items-center justify-between gap-3 mb-2">
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--text)]">
                    {t(s.title)}
                  </h2>
                  <span className="flex-shrink-0 text-xs font-[family-name:var(--font-mono)] text-[var(--gold)] bg-[var(--gold-glow)] border border-[var(--gold)]/20 px-2.5 py-1 rounded-full">
                    {t(tr.on_quote)}
                  </span>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">{t(s.description)}</p>

                <ul className="flex flex-col gap-2.5">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: s.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {t(f)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exemples / Catalogue ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--gold)] opacity-70">→</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
              {t(tr.examples_title)}
            </h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
          <p className="text-sm text-[var(--muted)] mb-12 max-w-2xl">{t(tr.examples_sub)}</p>

          <div className="flex flex-col gap-12">
            {themeGroups.map((group) => (
              <div key={group.theme.fr}>
                {/* Sous-titre de thème */}
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="font-[family-name:var(--font-mono)] text-xs tracking-[.14em] uppercase text-[var(--gold)]">
                    {t(group.theme)}
                  </h3>
                  <div className="flex-1 h-px bg-[var(--border)]" />
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--dim)]">
                    {group.items.length}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <a
                      key={item.slug}
                      href={`/catalogue/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
                    >
                      <div className="min-w-0">
                        <div className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--text)] group-hover:text-[var(--gold)] transition-colors truncate">
                          {item.name}
                        </div>
                        <div className="text-xs text-[var(--muted)] mt-0.5 truncate">{t(item.category)}</div>
                      </div>
                      <span className="flex-shrink-0 font-[family-name:var(--font-mono)] text-[11px] text-[var(--dim)] group-hover:text-[var(--gold)] transition-all whitespace-nowrap">
                        {t(tr.view_demo)} <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Lien catalogue complet / tarifs */}
          <div className="mt-8 flex justify-center">
            <a
              href="/catalogue/tarifs.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-heading)] border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black px-6 py-3 rounded-md transition-all"
            >
              {t(tr.view_catalogue)} ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--gold)] opacity-70">→</span>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,36px)] font-bold tracking-tight">
              {t(tr.process_title)}
            </h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={i} className="relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--gold)] opacity-30 mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold mb-2">{t(step.t)}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{t(step.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote form ── */}
      <section className="py-8 md:py-16">
        <div className="max-w-[820px] mx-auto px-6 md:px-12">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
