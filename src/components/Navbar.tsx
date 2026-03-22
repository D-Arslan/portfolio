"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/data";

const NAV_LINKS = [
  { key: "about",      href: "#about" },
  { key: "projects",   href: "#projects" },
  { key: "skills",     href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "education",  href: "#education" },
  { key: "contact",    href: "#contact" },
] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 h-16 md:h-28 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo7.png"
            alt="Arslan Dif"
            width={560}
            height={140}
            className="h-20 md:h-36 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-base text-[#a1a1aa] hover:text-white transition-colors"
            >
              {t(translations.nav[key])}
            </a>
          ))}
        </nav>

        {/* Right: lang + CTA */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-[#18181b] border border-[#3f3f46] rounded-full px-1 py-1">
            <button
              onClick={() => setLang("fr")}
              className={`text-xs font-medium px-2.5 py-1 rounded-full transition-all ${
                lang === "fr"
                  ? "bg-[#3b82f6] text-white"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-medium px-2.5 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-[#3b82f6] text-white"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-lg transition-colors"
          >
            {t(translations.hero.cta_contact)}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#a1a1aa] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a] px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {t(translations.nav[key])}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-sm font-medium text-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t(translations.hero.cta_contact)}
          </a>
        </div>
      )}
    </header>
  );
}
