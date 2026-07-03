"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, services } from "@/lib/data";

// Clé d'accès Web3Forms — publique par conception (elle ne sert qu'à envoyer un
// mail vers difarslan@gmail.com). Mise en dur pour qu'elle soit présente en prod
// sans config Vercel ; surchargée par NEXT_PUBLIC_WEB3FORMS_KEY si définie.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "8227a17c-7c92-4dae-8723-76a02d2e6fee";

type Status = "idle" | "sending" | "success" | "error" | "mailto";

export default function QuoteForm() {
  const { t, lang } = useLanguage();
  const tr = translations.services;
  const [status, setStatus] = useState<Status>("idle");

  // Dropdown custom « type de projet » (le <select> natif ne se style pas)
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState("");
  const typeRef = useRef<HTMLDivElement>(null);
  const typeOptions = [...services.map((s) => t(s.title)), lang === "fr" ? "Autre" : "Other"];

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) setTypeOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Repli : ouvre l'e-mail pré-rempli si Web3Forms est injoignable (DNS bloqué)
    // ou renvoie une erreur (clé absente). Aucune demande n'est perdue.
    function openMailto() {
      const subject = encodeURIComponent(`Demande de devis — ${data.name || ""}`);
      const body = encodeURIComponent(
        `Nom : ${data.name || "-"}\n` +
        `Email : ${data.email || "-"}\n` +
        `Entreprise : ${data.company || "-"}\n` +
        `Type de projet : ${data.project_type || "-"}\n` +
        `Budget : ${data.budget || "-"}\n\n` +
        `${data.message || ""}`,
      );
      window.location.href = `mailto:difarslan@gmail.com?subject=${subject}&body=${body}`;
      setStatus("mailto");
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Demande de devis — ${data.name || "Portfolio"}`,
          from_name: "Portfolio Arslan DIF",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        setTypeValue("");
      } else {
        openMailto();
      }
    } catch {
      openMailto();
    }
  }

  const inputCls =
    "w-full bg-[var(--bg2)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--dim)] focus:outline-none focus:border-[var(--gold)] transition-colors";
  const labelCls =
    "text-xs font-[family-name:var(--font-mono)] text-[var(--muted)] mb-1.5 block uppercase tracking-wider";

  return (
    <div
      id="devis"
      className="scroll-mt-24 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold tracking-tight mb-2">
        {t(tr.form_title)}
      </h3>
      <p className="text-sm text-[var(--muted)] mb-8">{t(tr.cta_hint)}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="qf-name">{t(tr.form_name)} *</label>
            <input id="qf-name" name="name" required className={inputCls} placeholder="Arslan DIF" />
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-email">{t(tr.form_email)} *</label>
            <input id="qf-email" name="email" type="email" required className={inputCls} placeholder="vous@exemple.com" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="qf-company">{t(tr.form_company)}</label>
            <input id="qf-company" name="company" className={inputCls} placeholder="—" />
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-type">{t(tr.form_type)}</label>
            <div className="relative" ref={typeRef}>
              <input type="hidden" name="project_type" value={typeValue} />
              <button
                type="button"
                id="qf-type"
                onClick={() => setTypeOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={typeOpen}
                className={`${inputCls} flex items-center justify-between text-left ${typeValue ? "text-[var(--text)]" : "text-[var(--dim)]"}`}
              >
                <span className="truncate">{typeValue || t(tr.form_type_ph)}</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 ml-2 text-[var(--muted)] transition-transform ${typeOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {typeOpen && (
                <div
                  role="listbox"
                  className="absolute z-30 top-full mt-1.5 w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                >
                  {typeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      role="option"
                      aria-selected={typeValue === opt}
                      onClick={() => { setTypeValue(opt); setTypeOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        typeValue === opt
                          ? "bg-[var(--gold-glow)] text-[var(--gold)]"
                          : "text-[var(--text)] hover:bg-[var(--bg2)]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="qf-budget">{t(tr.form_budget)}</label>
          <input id="qf-budget" name="budget" className={inputCls} placeholder="—" />
        </div>

        <div>
          <label className={labelCls} htmlFor="qf-message">{t(tr.form_message)} *</label>
          <textarea id="qf-message" name="message" required rows={5} className={`${inputCls} resize-y`} />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-pale)] disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold font-[family-name:var(--font-heading)] text-sm px-7 py-3.5 rounded-md transition-all w-full sm:w-auto"
        >
          {status === "sending" ? t(tr.form_sending) : t(tr.form_send)}
          {status !== "sending" && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </button>

        {status === "success" && (
          <p className="text-sm text-[var(--gold)] font-medium">✓ {t(tr.form_success)}</p>
        )}
        {status === "mailto" && (
          <p className="text-sm text-[var(--muted)]">
            {t({
              fr: "Votre messagerie s'ouvre avec votre demande pré-remplie. Si rien ne s'ouvre, écrivez à ",
              en: "Your email app is opening with your request pre-filled. If nothing opens, email ",
            })}
            <a href="mailto:difarslan@gmail.com" className="text-[var(--gold)] underline">difarslan@gmail.com</a>.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400 font-medium">{t(tr.form_error)}</p>
        )}
      </form>
    </div>
  );
}
