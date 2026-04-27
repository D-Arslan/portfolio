"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/context/LanguageContext";
import { translations, blogPosts, type BlogPost } from "@/lib/data";
import { SectionHeader } from "./About";


// â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function Blog() {
  const { t } = useLanguage();
  const tr = translations.blog;
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<BlogPost | null>(null);

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <section ref={ref} id="blog" className={`py-24 bg-[var(--bg2)] fade-up${inView ? " in-view" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader num="07" title={t(tr.title)} />

        <div className="mt-10 flex flex-col gap-4">
          {featured && (
            <FeaturedCard post={featured} onOpen={() => setSelected(featured)} />
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} onOpen={() => setSelected(post)} />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <BlogModal post={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// logos with a dark background (svg/png on dark bg) vs transparent (webp on any bg)
const DARK_BG_ICONS = new Set(["/fieldz/favicone-fieldz.svg"]);

function BlogIcon({ icon, size = "lg" }: { icon: string; size?: "sm" | "lg" }) {
  if (icon.startsWith("/")) {
    const needsBg = DARK_BG_ICONS.has(icon);
    return (
      <div className={`flex items-center justify-center rounded-lg ${needsBg ? "bg-[#1a3d22] p-2" : ""} ${size === "lg" ? "h-20" : "h-12"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt=""
          className={`object-contain ${size === "lg" ? "h-16 w-auto max-w-[7rem]" : "h-10 w-auto max-w-[5rem]"}`}
        />
      </div>
    );
  }
  return (
    <span className={size === "lg" ? "text-6xl" : "text-3xl"} style={{ lineHeight: 1 }}>
      {icon}
    </span>
  );
}

function FeaturedCard({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
  const { t } = useLanguage();
  const tr = translations.blog;

  return (
    <div
      onClick={onOpen}
      className="group grid md:grid-cols-2 bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Visual */}
      <div className="relative min-h-[200px] md:min-h-[240px] bg-[var(--bg3)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 14px, var(--text) 14px, var(--text) 15px)"
        }} />
        <BlogIcon icon={post.icon} size="lg" />
        <div className="absolute top-4 left-4 font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase px-2.5 py-1 rounded bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/25">
          {t(tr.featured)}
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col justify-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-[var(--gold)]/12 text-[var(--gold)] border border-[var(--gold)]/20">
            {t(post.category)}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">{post.date}</span>
          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)] ml-auto">{post.readTime}</span>
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-[var(--text)]">
          {t(post.title)}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{t(post.excerpt)}</p>
        <span className="text-sm font-medium text-[var(--gold)] flex items-center gap-1.5 transition-all group-hover:gap-3">
          {t(tr.readMore)} <span>→</span>
        </span>
      </div>
    </div>
  );
}

function BlogCard({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
  const { t } = useLanguage();
  const tr = translations.blog;

  return (
    <div
      onClick={onOpen}
      className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

      <div className="flex items-center gap-2 mb-4">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-[var(--gold)]/12 text-[var(--gold)] border border-[var(--gold)]/20">
          {t(post.category)}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] ml-auto">{post.readTime}</span>
      </div>

      <div className="mb-3">
        <BlogIcon icon={post.icon} size="sm" />
      </div>

      <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold leading-snug text-[var(--text)] mb-2">
        {t(post.title)}
      </h3>
      <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3 mb-4">
        {t(post.excerpt)}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)]">{post.date}</span>
        <span className="text-xs text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </div>
    </div>
  );
}

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const { t } = useLanguage();
  const backdropRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 300);
  }

  return createPortal(
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) handleClose(); }}
      className="fixed inset-0 z-[200] flex items-start justify-center px-4 py-8 md:py-16 overflow-y-auto"
      style={{
        background: "color-mix(in srgb, var(--bg) 92%, transparent)",
        backdropFilter: "blur(16px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s",
      }}
    >
      <div
        className="relative w-full max-w-[720px] bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.5)] my-auto"
        style={{
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--gold)] rounded-t-2xl" />
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
        >
          âœ•
        </button>
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase text-[var(--gold)] mb-3">
          {t(post.category)}
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold leading-tight text-[var(--text)] mb-4">
          {t(post.title)}
        </h2>
        <div className="flex items-center gap-4 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)] pb-6 mb-6 border-b border-[var(--border)]">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <div
          className="blog-content text-[var(--muted)] text-[0.95rem] leading-[1.85]"
          dangerouslySetInnerHTML={{ __html: t(post.content) }}
        />
      </div>
    </div>,
    document.body
  );
}

