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
│   ├── layout.tsx        — metadata, Inter font, LanguageProvider
│   ├── page.tsx          — composition des sections
│   └── globals.css       — Tailwind v4 @theme tokens, scrollbar, selection
├── components/
││   ├── Navbar.tsx         — fixe, blur au scroll, switcher FR/EN, menu mobile, responsive h-16 md:h-28
│   ├── Hero.tsx           — titre, badge dispo, CTAs, carte stats, liens sociaux
│   ├── About.tsx          — texte + photo, tags, SectionTitle (composant partagé)
│   ├── Projects.tsx       — 12 projets, filtres par catégorie, cards Lucide icons
│   ├── Skills.tsx         — 6 groupes, icônes Lucide
│   ├── Experience.tsx     — timeline 8 expériences
│   ├── Education.tsx      — timeline 3 diplômes, icônes Lucide
│   ├── Contact.tsx        — liens email / LinkedIn / GitHub
│   └── Footer.tsx
├── context/
│   └── LanguageContext.tsx — contexte FR/EN avec useLanguage() + t()
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
- [ ] **Redesign** — choisir un prototype et migrer le portfolio (Proto B recommandé)

### Priorité moyenne
- [ ] **Modal projet** — clic sur une carte ouvre un détail étendu (description complète, screenshots/démo)
- [ ] **Active nav** — highlight de la section visible au scroll (Intersection Observer)
- [ ] **Page 404** — page d'erreur custom
- [ ] **Dark/light mode** — toggle optionnel

### Priorité basse
- [ ] **Blog / Articles** — section optionnelle pour écrits techniques
- [ ] **Certifications** — section dédiée Google, NASA, EF SET
- [ ] **Internationalisation SEO** — hreflang tags pour FR/EN
