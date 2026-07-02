"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, services } from "@/lib/data";

// ⚠️ Remplace cette valeur par ta clé d'accès Web3Forms (gratuite) :
//    → va sur https://web3forms.com, entre difarslan@gmail.com, tu reçois une clé par mail.
//    Les demandes de devis arriveront alors directement dans ta boîte.
const WEB3FORMS_KEY = "VOTRE_CLE_WEB3FORMS";

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const { t, lang } = useLanguage();
  const tr = translations.services;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
            <select id="qf-type" name="project_type" defaultValue="" className={inputCls}>
              <option value="" disabled>{t(tr.form_type_ph)}</option>
              {services.map((s) => (
                <option key={s.id} value={s.title[lang]}>{t(s.title)}</option>
              ))}
              <option value={lang === "fr" ? "Autre" : "Other"}>{lang === "fr" ? "Autre" : "Other"}</option>
            </select>
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
        {status === "error" && (
          <p className="text-sm text-red-400 font-medium">{t(tr.form_error)}</p>
        )}
      </form>
    </div>
  );
}
