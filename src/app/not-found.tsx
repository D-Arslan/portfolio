import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center px-6 text-center">
      {/* Gold glow */}
      <div className="absolute w-96 h-96 bg-[var(--gold-glow)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* 404 */}
        <div className="flex items-center gap-3">
          <span className="text-8xl font-bold font-[family-name:var(--font-heading)] text-[var(--border)] select-none">4</span>
          <div className="w-16 h-16 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
            <Image src="/golden_favicon-removebg-preview.png" alt="Lion" width={48} height={48} className="object-contain" />
          </div>
          <span className="text-8xl font-bold font-[family-name:var(--font-heading)] text-[var(--border)] select-none">4</span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold font-[family-name:var(--font-heading)]">Page introuvable</h1>
          <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-pale)] text-black text-sm font-bold font-[family-name:var(--font-heading)] px-5 py-2.5 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--gold-glow)]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
