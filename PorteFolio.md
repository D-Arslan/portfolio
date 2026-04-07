# Portfolio – Arslan DIF

## Stack technique
- **Framework** : Next.js 15.5.13 (App Router, `output: "export"` — static)
- **UI** : React 19, Tailwind CSS v4, Lucide React
- **Langage** : TypeScript
- **Port dev** : 3002
- **Hébergement** : Vercel (static) — URL : https://portfolio-tan-one-61.vercel.app/
- **Domaine cible** : `difarslan.com` (à acheter sur Porkbun/Namecheap, ~8-10€/an)
- **Langues** : Bilingue FR/EN (switcher top-right, persistance localStorage)

## Architecture
```
src/
├── app/
│   ├── layout.tsx        — metadata, Inter font, LanguageProvider + ThemeProvider
│   ├── page.tsx          — composition des sections
│   ├── not-found.tsx     — page 404 custom ("4 ○ 4" + lien retour accueil)
│   └── globals.css       — CSS variables dark/light, scrollbar, animations scroll
├── components/
│   ├── Navbar.tsx         — fixe, blur au scroll, switcher FR/EN, toggle dark/light, active nav, menu mobile
│   ├── Hero.tsx           — titre, badge dispo, CTAs, carte stats, liens sociaux
│   ├── About.tsx          — texte + photo, tags, SectionTitle (composant partagé)
│   ├── Projects.tsx       — 12 projets, filtres par catégorie, cards Lucide icons, modal au clic
│   ├── ProjectModal.tsx   — modal portal (createPortal → document.body), Escape/clic outside, stack/catégories/liens
│   ├── Skills.tsx         — 6 groupes, icônes Lucide
│   ├── Experience.tsx     — timeline 8 expériences
│   ├── Education.tsx      — timeline 3 diplômes, icônes Lucide
│   ├── Contact.tsx        — liens email / LinkedIn / GitHub
│   └── Footer.tsx
├── context/
│   ├── LanguageContext.tsx — contexte FR/EN avec useLanguage() + t()
│   └── ThemeContext.tsx    — dark/light, persistance localStorage, respect prefers-color-scheme
├── hooks/
│   └── useInView.ts       — IntersectionObserver, déclenche animation une seule fois
└── lib/
    └── data.ts            — toutes les données : projets, skills, expériences, formations, traductions
```

## Design system
- **Fond** : `#09090b` (zinc-950)
- **Surface** : `#18181b` (zinc-900)
- **Bordures** : `#3f3f46` (zinc-700)
- **Accent** : `#3b82f6` (blue-500)
- **Texte** : `#fafafa` / muted `#a1a1aa`
- **Font** : Inter (Google Fonts)
- **Icônes** : Lucide React (pas d'emojis)

## Projets affichés (12)
| Projet | Catégorie | Featured |
|---|---|---|
| FIELDZ | fullstack, mobile | ✓ |
| Coiflow | fullstack | ✓ |
| EuroSAT Classification | aiml | ✓ |
| CyberLab | cyber, fullstack | ✓ |
| Le Guide de la Terminale | fullstack | ✓ |
| Deep Learning Sentinel-2 | aiml | |
| Reconnaissance pièces d'identité | aiml | |
| BUDGY | mobile | |
| Compilateur C | fullstack | |
| eSanté | fullstack | |
| Love101 | fullstack | |
| Virus Macro (Red Team) | cyber | |

## Décisions de design
- **Photo** : dans la section About (pas le Hero) — meilleure pratique portfolio dev
- **One-page** avec ancres — plus moderne pour profil junior
- **Filtres projets** : tous affichés par défaut, filtrables par catégorie
- **Photo position** : `object-[0%_0%]` — recadrée sur le visage
- **Emojis → Lucide** : remplacement dans Projects, Skills, Education

## Hooks
- `src/hooks/useInView.ts` — IntersectionObserver, déclenche l'animation une seule fois au scroll

## Historique des modifications
- **17/03/2026** — Initialisation projet Next.js 15 + Tailwind v4 + TypeScript
- **17/03/2026** — Création de tous les composants (Navbar, Hero, About, Projects, Skills, Experience, Education, Contact, Footer)
- **17/03/2026** — Ajout `images: { unoptimized: true }` pour compatibilité static export
- **17/03/2026** — Port fixé à 3002
- **17/03/2026** — Recadrage photo : `object-[0%_0%]`
- **17/03/2026** — Remplacement emojis → icônes Lucide React (Projects, Skills, Education)
- **22/03/2026** — Boutons téléchargement CV (alternance + master) dans Hero
- **22/03/2026** — Animations scroll : hook useInView + classes CSS fade-up/stagger sur toutes les sections
- **22/03/2026** — Logo navbar : logo7.png (transparent via remove.bg), navbar w-full h-28, logo h-36, flush à gauche
- **22/03/2026** — SEO : metadata Next.js (og:image, twitter card, canonical), sitemap.xml, robots.txt, metadataBase difarslan.com
- **22/03/2026** — Responsive : Navbar h-16 md:h-28 / logo h-20 md:h-36, Hero text-4xl sm:text-5xl md:text-6xl, About gap-10 md:gap-16, grilles sm:grid-cols-2 lg:grid-cols-3
- **22/03/2026** — Prototypes de nouveau design créés dans `prototypes/` via ui-ux-pro-max (skill copiée dans `C:/Users/hp/.claude/skills/`)
- **23/03/2026** — Déploiement Vercel : https://portfolio-tan-one-61.vercel.app/ (auto-deploy sur push GitHub)
- **23/03/2026** — Compression images : logo7.png 2.1MB → 6KB, favicon.png 2.1MB → 1KB (PIL thumbnail)
- **23/03/2026** — Modal projet : `ProjectModal.tsx` avec `createPortal(…, document.body)` — évite les bugs de position liés aux stacking contexts CSS transforms dans la section Projects
- **23/03/2026** — Page 404 custom : `src/app/not-found.tsx` ("4 ○ 4", bouton retour accueil)
- **23/03/2026** — Active nav : IntersectionObserver sur chaque section, `rootMargin: "-40% 0px -55% 0px"`, lien actif en blanc
- **23/03/2026** — Dark/light mode : `ThemeContext.tsx`, toggle soleil/lune en navbar, variables CSS `--bg/--surface/--text/…`, persistance `localStorage`, respect `prefers-color-scheme` au premier chargement
- **23/03/2026** — Fix light mode : texte `text-white` invisible sur fond blanc → overrides CSS `html.light .text-white { color: var(--text) }` + exceptions pour boutons bleus. Approche patch (workaround hardcoded Tailwind colors) — le redesign Gold Noir utilisera des CSS variables dès le départ

## Prototypes de redesign (`prototypes/`)
Trois directions testées avec ui-ux-pro-max (Space Grotesk + DM Sans + JetBrains Mono) :

| Fichier | Palette | Signature |
|---|---|---|
| `proto-a-slate-emerald.html` | Slate `#0F172A` + Vert `#22C55E` | Typewriter, cursor custom, stats inline, labels `// 01 —` |
| `proto-b-gold-noir.html` | Noir `#09090B` + Or `#D4AF37` | Hero 2 col + carte stats 🦁, layout exp horizontal, numéros dorés |
| `proto-c-blue-motion.html` | Zinc + Bleu→Violet gradient | Bento grid projets, marquee techno, navbar pill centrée, blobs animés |

**Recommandation retenue : Proto B — Gold Noir.**

Raisons :
1. **Cohérence identitaire** — Arslan = lion en turc, logo lion déjà existant. Or + noir = couleur du lion, de la royauté. Identité visuelle cohérente de bout en bout, impossible à copier.
2. **Différenciation maximale** — 99% des portfolios dev sont bleu/violet (C) ou vert/slate (A). Le recruteur qui voit 50 portfolios par semaine se souvient du gold noir.
3. **Correspond au profil** — Fondateur de 2 startups, candidature alternance Paris école d'élite. Le Gold Noir a une gravité et une ambition que le vert "terminal" n'a pas.
4. **Layout le plus mature** — Structure `col gauche (date + company) / col droite (contenu)` pour l'expérience, sections numérotées en or, quote block avec bordure gauche — choix de design éditorial, pas dev portfolio standard.

**Nuance** : si l'or paraît trop ostentatoire → garder le **layout du C** (bento grid + marquee + navbar pill) avec la **palette du B** (or à la place du bleu).

## Prochaines étapes
### Priorité haute
- [x] **Logo** — logo7.png (D+lion+Arslan, fond transparent via remove.bg), navbar pleine largeur h-16 md:h-28, logo h-20 md:h-36
- [x] **CV téléchargeable** — boutons dans Hero (cv-alternance.pdf + cv-master.pdf dans public/)
- [x] **Animations** — hook useInView + CSS fade-up sur toutes les sections (About, Projects, Skills, Experience, Education, Contact)
- [x] **SEO** — metadata Next.js (og:image, twitter card, canonical), sitemap.xml, robots.txt
- [x] **Responsive** — Navbar, Hero, About, Projects, Skills, Experience, Education, Contact, Footer
- [x] **Déploiement** — https://portfolio-tan-one-61.vercel.app/ (Vercel, auto-deploy sur push)
- [ ] **Domaine** — acheter difarslan.com et connecter à Vercel
- [x] **Modal projet** — clic sur carte → modal avec description complète, stack, catégories, liens (portal React)
- [x] **Page 404** — `src/app/not-found.tsx` custom
- [x] **Active nav** — IntersectionObserver, highlight du lien de la section visible (rootMargin -40%/-55%)
- [x] **Dark/light mode** — ThemeContext, toggle soleil/lune en navbar, variables CSS, persistance localStorage, respect préférence système
- [x] **Redesign Gold Noir** — Proto B implémenté : Space Grotesk + DM Sans + JetBrains Mono, palette `#D4AF37`/`#09090B`, logos dorés (`golden-removebg-preview.png`, `golden_favicon-removebg-preview.png`), sections numérotées, layout 2 colonnes Experience/Education, cartes projets avec identité visuelle propre à chaque projet

### Priorité moyenne
- [x] **Modal projet** — ✓ fait (voir priorité haute)
- [x] **Active nav** — ✓ fait (voir priorité haute)
- [ ] **Aperçu projets** — screenshots statiques dans `public/previews/[id].png`, affichés dans la modal ProjectModal (iframe écarté : bloqué par X-Frame-Options). IDs à couvrir : fieldz, coiflow, gestion-visiteurs, eurosat, cyberlab, guide-terminale, budgy, love101, sentinel2, compilateur, esante, virus-macro. **Prochaine session.**
- [x] **Page 404** — ✓ fait (voir priorité haute)
- [x] **Dark/light mode** — ✓ fait (voir priorité haute)

### Priorité basse
- [ ] **Blog / Articles** — section optionnelle pour écrits techniques
- [ ] **Certifications** — section dédiée Google, NASA, EF SET
- [ ] **Internationalisation SEO** — hreflang tags pour FR/EN
