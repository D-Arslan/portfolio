"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[var(--border)] py-7">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-[family-name:var(--font-mono)] text-[var(--dim)]">
        <p>
          {t(translations.footer.made)}{" "}
          <span className="text-[var(--gold)] font-medium">Arslan DIF</span>
        </p>
        <p>© {new Date().getFullYear()} · <span className="text-[var(--gold)]">difarslan.com</span></p>
      </div>
    </footer>
  );
}
