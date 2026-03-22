import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center px-6 text-center">
      {/* Glow */}
      <div className="absolute w-96 h-96 bg-[#3b82f6]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* 404 */}
        <div className="flex items-center gap-3">
          <span className="text-8xl font-bold text-[#27272a] select-none">4</span>
          <div className="w-16 h-16 rounded-2xl bg-[#18181b] border border-[#3f3f46] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-[#3b82f6]" />
          </div>
          <span className="text-8xl font-bold text-[#27272a] select-none">4</span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white">Page introuvable</h1>
          <p className="text-sm text-[#a1a1aa] max-w-xs leading-relaxed">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
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
