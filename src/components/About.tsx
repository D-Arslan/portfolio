"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { t } = useLanguage();
  const tr = translations.about;
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="about" className={`py-24 fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>{t(tr.title)}</SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-12">
          {/* Text */}
          <div className="flex flex-col gap-5 text-[#a1a1aa] leading-relaxed">
            <p>{t(tr.p1)}</p>
            <p>{t(tr.p2)}</p>
            <p>{t(tr.p3)}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { fr: "Disponible Sept. 2026", en: "Available Sept. 2026" },
                { fr: "Paris", en: "Paris" },
                { fr: "Alternance", en: "Apprenticeship" },
                { fr: "Anglais C2", en: "C2 English" },
              ].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium bg-[#18181b] border border-[#3f3f46] text-[#a1a1aa] px-3 py-1.5 rounded-full"
                >
                  {t(tag)}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#3b82f6]/30 to-[#8b5cf6]/20 rounded-2xl blur-sm" />
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-[#3f3f46]">
                <Image
                  src="/photo.png"
                  alt="Arslan DIF"
                  fill
                  className="object-cover object-[0%_0%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold text-white">{children}</h2>
      <div className="flex-1 h-px bg-[#27272a]" />
    </div>
  );
}
