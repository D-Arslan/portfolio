"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[#27272a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#52525b]">
        <p>
          {t(translations.footer.made)}{" "}
          <span className="text-[#a1a1aa] font-medium">Arslan DIF</span>
        </p>
        <p>© {new Date().getFullYear()} · difarslan.com</p>
      </div>
    </footer>
  );
}
