"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
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
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(({ href }) => href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <Image
            src="/golden-removebg-preview.png"
            alt="Arslan DIF"
            width={560}
            height={140}
            className="h-14 md:h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={`text-sm font-medium transition-colors ${
                activeSection === href.slice(1)
                  ? "text-[var(--gold)]"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {t(translations.nav[key])}
            </a>
          ))}
        </nav>

        {/* Right: lang + theme + CTA */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-[var(--surface)] border border-[var(--border)] rounded-full px-1 py-1">
            <button
              onClick={() => setLang("fr")}
              className={`text-xs font-medium font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-full transition-all ${
                lang === "fr"
                  ? "bg-[var(--gold)] text-black"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-medium font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-[var(--gold)] text-black"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-heading)] border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black px-5 py-2 rounded-md transition-all"
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--muted)] hover:text-[var(--text)]"
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
        <div className="md:hidden bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={`text-sm transition-colors py-1 ${
                activeSection === href.slice(1)
                  ? "text-[var(--gold)]"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t(translations.nav[key])}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-sm font-medium text-center border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black px-4 py-2 rounded-md transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
