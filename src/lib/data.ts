export type Lang = "fr" | "en";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────

export const translations = {
  nav: {
    about:          { fr: "À propos",        en: "About" },
    projects:       { fr: "Projets",         en: "Projects" },
    skills:         { fr: "Compétences",     en: "Skills" },
    experience:     { fr: "Expériences",     en: "Experience" },
    education:      { fr: "Formation",       en: "Education" },
    blog:           { fr: "Blog",            en: "Blog" },
    certifications: { fr: "Certifications",  en: "Certifications" },
    contact:        { fr: "Contact",         en: "Contact" },
  },
  hero: {
    title:    { fr: "Développeur Full Stack", en: "Full Stack Developer" },
    subtitle: { fr: "& Ingénieur IA",         en: "& AI Engineer" },
    desc: {
      fr: "Fondateur, ingénieur et étudiant en Master IA à l'USTHB. Je conçois des produits web et mobile, et j'entraîne des modèles qui tournent en production.",
      en: "Founder, engineer and AI Master's student at USTHB. I build web & mobile products and train models that run in production.",
    },
    cta_projects:        { fr: "Voir mes projets",       en: "View my projects" },
    cta_contact:         { fr: "Me contacter",           en: "Get in touch" },
    cv_alternance_label: { fr: "CV Alternance",          en: "Resume (Internship)" },
    cv_master_label:     { fr: "CV Master",              en: "Resume (Master)" },
    available: {
      fr: "Disponible pour alternance – Sept. 2026 · Paris",
      en: "Available for apprenticeship – Sept. 2026 · Paris",
    },
  },
  about: {
    title: { fr: "À propos", en: "About" },
    p1: {
      fr: "Je suis Arslan DIF, développeur full stack et ingénieur IA basé à Alger. Étudiant en Master 1 Systèmes Informatiques Intelligents à l'USTHB, je cherche une alternance à Paris à partir de septembre 2026.",
      en: "I'm Arslan DIF, a full stack developer and AI engineer based in Algiers. Currently in my first year of a Master's in Intelligent Computer Systems at USTHB, I'm looking for an apprenticeship in Paris starting September 2026.",
    },
    p2: {
      fr: "J'ai fondé FIELDZ (plateforme de réservation de terrains de sport) et Coiflow (SaaS pour barbershops), deux projets que je développe et opère activement. Mon parcours combine ingénierie logicielle, intelligence artificielle et entrepreneuriat.",
      en: "I founded FIELDZ (a sports field booking platform) and Coiflow (a SaaS for barbershops) — two projects I actively develop and operate. My background blends software engineering, AI, and entrepreneurship.",
    },
    p3: {
      fr: "Je suis passionné par la construction de systèmes qui résolvent de vrais problèmes : des modèles de classification à 97 % de précision aux applications déployées en production, j'aime aller du prototype à l'impact.",
      en: "I'm passionate about building systems that solve real problems — from classification models hitting 97% accuracy to production-deployed apps. I enjoy going from prototype to impact.",
    },
    stats: {
      projects:    { fr: "Projets",       en: "Projects" },
      years:       { fr: "Ans de code",   en: "Years coding" },
      startups:    { fr: "Startups",      en: "Startups" },
      accuracy:    { fr: "Meilleure précision IA", en: "Best AI accuracy" },
    },
  },
  projects: {
    title:      { fr: "Mes réalisations",    en: "My work" },
    filters: {
      all:        { fr: "Tous",               en: "All" },
      fullstack:  { fr: "Full Stack",         en: "Full Stack" },
      aiml:       { fr: "IA / ML",            en: "AI / ML" },
      mobile:     { fr: "Mobile",             en: "Mobile" },
      cyber:      { fr: "Cybersécurité",      en: "Cybersecurity" },
      production: { fr: "En production",      en: "In production" },
      academic:   { fr: "Académique",         en: "Academic" },
    },
    demo:   { fr: "Démo",   en: "Demo" },
    code:   { fr: "Code",   en: "Code" },
    featured: { fr: "À la une", en: "Featured" },
  },
  skills: {
    title: { fr: "Mon arsenal technique", en: "My technical arsenal" },
  },
  experience: {
    title:    { fr: "Parcours & expériences", en: "Background & experience" },
    present:  { fr: "Présent",               en: "Present" },
  },
  education: {
    title: { fr: "Études & diplômes", en: "Studies & degrees" },
  },
  blog: {
    title:       { fr: "Réflexions & articles",               en: "Thoughts & articles" },
    featured:    { fr: "À la une",                           en: "Featured" },
    readMore:    { fr: "Lire l'article",                     en: "Read article" },
    close:       { fr: "Fermer",                             en: "Close" },
  },
  certifications: {
    title:       { fr: "Mes certifications",                 en: "My certifications" },
    completed:   { fr: "Complété",                           en: "Completed" },
    inProgress:  { fr: "En cours",                           en: "In progress" },
    verify:      { fr: "Vérifier",                           en: "Verify" },
  },
  contact: {
    title:       { fr: "Travaillons ensemble",                en: "Let's work together" },
    subtitle:    { fr: "Un projet ? Une opportunité ? Discutons.", en: "A project? An opportunity? Let's talk." },
    email_label: { fr: "M'écrire",                           en: "Send an email" },
    linkedin:    { fr: "LinkedIn",                           en: "LinkedIn" },
    github:      { fr: "GitHub",                             en: "GitHub" },
  },
  footer: {
    made: { fr: "Conçu & développé par", en: "Designed & built by" },
  },
} as const;

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export type Category = "fullstack" | "aiml" | "mobile" | "cyber" | "production" | "academic";

export interface Project {
  id: string;
  title: string;
  description: { fr: string; en: string };
  tech: string[];
  categories: Category[];
  github?: string;
  demo?: string;
  featured: boolean;
  year: string;
  accent: string;       // couleur principale
  accentBg?: string;    // fond de la carte (optionnel)
  accentText?: string;  // couleur texte sur accent (optionnel, défaut: white)
}

export const projects: Project[] = [
  {
    id: "fieldz",
    title: "FIELDZ",
    description: {
      fr: "Plateforme de réservation de terrains de sport (football, padel, tennis…). Architecture web + mobile, système de paiement, gestion des créneaux en temps réel.",
      en: "Sports field booking platform (football, padel, tennis…). Web + mobile architecture, payment system, real-time slot management.",
    },
    tech: ["React", "React Native", "Spring Boot", "PostgreSQL", "Java"],
    categories: ["fullstack", "mobile", "production"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2025–présent",
    accent: "#1ED760",     // vert clair Fieldz
    accentBg: "#05602B",   // vert foncé Fieldz
    accentText: "#ffffff",
  },
  {
    id: "coiflow",
    title: "Coiflow",
    description: {
      fr: "SaaS de gestion pour barbershops : réservations en ligne, gestion des clients, analytics de fréquentation. Projet solo, full stack.",
      en: "Management SaaS for barbershops: online bookings, client management, attendance analytics. Solo project, full stack.",
    },
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Spring Boot", "Java 17"],
    categories: ["fullstack", "production"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2026–présent",
    accent: "#f59e0b",     // amber Coiflow
    accentBg: "#1c1917",   // fond sombre Coiflow
    accentText: "#ffffff",
  },
  {
    id: "eurosat",
    title: "EuroSAT Classification",
    description: {
      fr: "Classification d'images satellite sur le dataset EuroSAT. Fine-tuning ResNet-18 pré-entraîné sur 27 000 images (10 classes terrestres). 97,80 % de précision, macro F1 0,9779 en 25 epochs.",
      en: "Satellite image classification on the EuroSAT dataset. Fine-tuned a pre-trained ResNet-18 on 27,000 images (10 land-use classes). 97.80% accuracy, macro F1 0.9779 in 25 epochs.",
    },
    tech: ["PyTorch", "ResNet-18", "Python", "NumPy", "Matplotlib"],
    categories: ["aiml"],
    github: "https://github.com/D-Arslan/eurosat-classification",
    featured: true,
    year: "2026",
    accent: "#22c55e",     // vert satellite/nature
    accentBg: "#052e16",
    accentText: "#ffffff",
  },
  {
    id: "cyberlab",
    title: "CyberLab",
    description: {
      fr: "Plateforme éducative de cybersécurité : simulation d'attaques phishing, injection SQL, détection d'intrusion avec Snort. Interface pédagogique interactive.",
      en: "Educational cybersecurity platform: phishing attack simulation, SQL injection, intrusion detection with Snort. Interactive learning interface.",
    },
    tech: ["Next.js", "React", "TypeScript", "Snort", "Python"],
    categories: ["cyber", "fullstack", "production"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2026",
    accent: "#00ff41",     // vert terminal Spoof/CyberLab
    accentBg: "#0a0a0a",   // noir terminal
    accentText: "#00ff41",
  },
  {
    id: "guide-terminale",
    title: "Le Guide de la Terminale",
    description: {
      fr: "Plateforme éducative pour élèves de Terminale bac français. 100+ élèves, 5 pays, 100 % de réussite au bac. Cours en ligne, exercices interactifs, suivi personnalisé.",
      en: "Educational platform for French Baccalaureate students. 100+ students, 5 countries, 100% pass rate. Online courses, interactive exercises, personalized tracking.",
    },
    tech: ["Web", "JavaScript", "HTML/CSS"],
    categories: ["fullstack"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2022–présent",
    accent: "#3b82f6",
    accentBg: "#172554",
    accentText: "#ffffff",
  },
  {
    id: "sentinel2",
    title: "MCTNet — Crop Classification",
    description: {
      fr: "Projet de recherche (Master 1 SII, USTHB · équipe de 3) reproduisant le papier Wang et al. 2024 — MCTNet, un réseau CNN-Transformer léger (~56k paramètres) pour la cartographie des cultures pixel par pixel à partir de séries temporelles Sentinel-2 (36 composites de 10 jours, 10 bandes spectrales). Pipeline complet de bout en bout : acquisition Google Earth Engine sur deux régions agricoles américaines (Arkansas, Californie), prétraitement, entraînement et évaluation (OA / Kappa / F1). Partie 2 : étude d'ablation intégrant des covariables environnementales (sol, climat, topographie). Partie 3 : trois contributions originales — GatedMCTNet (fusion dynamique CNN/Transformer apprise), MCTNet Multiscale et UNetMCTNetWithCovars (encodeur-décodeur U-Net + covariables).",
      en: "Research project (Master 1 SII, USTHB · 3-person team) reproducing Wang et al. 2024 — MCTNet, a lightweight CNN-Transformer network (~56k parameters) for pixel-based crop mapping from Sentinel-2 time series (36 ten-day composites, 10 spectral bands). Full end-to-end pipeline: Google Earth Engine acquisition over two US agricultural regions (Arkansas, California), preprocessing, training and evaluation (OA / Kappa / F1). Part 2: ablation study integrating environmental covariates (soil, climate, topography). Part 3: three original contributions — GatedMCTNet (learned dynamic CNN/Transformer fusion), MCTNet Multiscale and UNetMCTNetWithCovars (U-Net encoder-decoder + covariates).",
    },
    tech: ["PyTorch", "CNN-Transformer", "Python", "Sentinel-2", "Google Earth Engine", "NumPy", "Jupyter"],
    categories: ["aiml", "academic"],
    github: "https://github.com/D-Arslan",
    featured: false,
    year: "2025–2026",
    accent: "#06b6d4",
    accentBg: "#082f49",
    accentText: "#ffffff",
  },
  {
    id: "gestion-visiteurs",
    title: "Système de Gestion des Visiteurs",
    description: {
      fr: "Système complet de gestion des visiteurs développé en PFE chez SARL SPINTECHS. Interface admin web (React), application mobile Flutter (scan QR, badges, trilingue FR/EN/AR), borne satisfaction client avec notation 5 étoiles, et module IA de reconnaissance de pièces d'identité (TensorFlow, 94 % de précision). Backend Spring Boot avec JWT, MySQL.",
      en: "Full visitor management system developed as a final year project at SARL SPINTECHS. Web admin dashboard (React), Flutter mobile app (QR scan, badges, FR/EN/AR), client satisfaction kiosk with 5-star rating, and an AI identity document recognition module (TensorFlow, 94% accuracy). Spring Boot backend with JWT, MySQL.",
    },
    tech: ["React", "Flutter", "Spring Boot", "Java 21", "TensorFlow", "MySQL", "JWT"],
    categories: ["fullstack", "aiml", "mobile"],
    github: "https://github.com/D-Arslan",
    featured: false,
    year: "2024–2025",
    accent: "#ED564B",     // saumon GestionVisiteurs
    accentBg: "#2a0f0e",
    accentText: "#ffffff",
  },
  {
    id: "budgy",
    title: "BUDGY",
    description: {
      fr: "Application mobile de gestion des dépenses personnelles. Publié sur le Google Play Store. Catégorisation automatique, visualisation des tendances, objectifs d'épargne.",
      en: "Personal expense tracking mobile app. Published on the Google Play Store. Automatic categorisation, trend visualisation, savings goals.",
    },
    tech: ["Flutter", "Dart", "Firebase"],
    categories: ["mobile", "production"],
    github: "https://github.com/D-Arslan",
    featured: false,
    year: "2025–2026",
    accent: "#43C59E",     // teal Budgi
    accentBg: "#1E3A34",   // ink Budgi
    accentText: "#ffffff",
  },
  {
    id: "compilateur",
    title: "Compilateur C",
    description: {
      fr: "Compilateur complet pour un sous-ensemble du langage C : analyse lexicale (Flex), analyse syntaxique (Bison), génération de code intermédiaire et table des symboles.",
      en: "Full compiler for a C language subset: lexical analysis (Flex), syntactic analysis (Bison), intermediate code generation and symbol table.",
    },
    tech: ["C", "Flex", "Bison"],
    categories: ["fullstack"],
    featured: false,
    year: "2024–2025",
    accent: "#a3a3a3",     // gris neutre — compilateur, pas de charte
    accentBg: "#171717",
    accentText: "#ffffff",
  },
  {
    id: "esante",
    title: "eSanté",
    description: {
      fr: "Application de gestion hospitalière en Java : dossiers patients, gestion des consultations, ordonnances, facturation. Architecture MVC complète.",
      en: "Hospital management application in Java: patient records, consultation management, prescriptions, billing. Complete MVC architecture.",
    },
    tech: ["Java", "SQL", "JavaFX"],
    categories: ["fullstack"],
    featured: false,
    year: "2023–2024",
    accent: "#34d399",     // vert santé/médical
    accentBg: "#064e3b",
    accentText: "#ffffff",
  },
  {
    id: "love101",
    title: "Love101",
    description: {
      fr: "Plateforme de cartes animées pour la Saint-Valentin. Cartes personnalisées avec animations CSS, partage via lien unique, stockage Supabase.",
      en: "Animated Valentine's Day card platform. Personalized cards with CSS animations, sharing via unique link, Supabase storage.",
    },
    tech: ["Next.js 15", "React 19", "Supabase", "TypeScript"],
    categories: ["fullstack", "production"],
    featured: false,
    year: "2026",
    accent: "#e11d48",     // rose-rouge Love101 (template Valentine)
    accentBg: "#4c0519",
    accentText: "#ffffff",
  },
  {
    id: "virus-macro",
    title: "Virus Macro (Red Team)",
    description: {
      fr: "Projet académique Red Team : simulation de phishing, scareware et exfiltration de données dans un environnement contrôlé. Analyse des vecteurs d'attaque et contre-mesures.",
      en: "Academic Red Team project: phishing simulation, scareware and data exfiltration in a controlled environment. Attack vector analysis and countermeasures.",
    },
    tech: ["Python", "VBA", "Sécurité offensive"],
    categories: ["cyber", "academic"],
    featured: false,
    year: "2024–2025",
    accent: "#ff4444",     // rouge Spoof
    accentBg: "#1a0000",
    accentText: "#ffffff",
  },
  {
    id: "rcr",
    title: "RCR — Logiques formelles",
    description: {
      fr: "Implémentation Java + JavaFX de cinq formalismes de représentation des connaissances : logique classique (CNF/SAT4J + FOL chaînage avant), logique modale (modèles de Kripke), logique des défauts de Reiter (raisonnement non-monotone), logique de description (ontologies OWL + raisonneur HermiT), et réseaux sémantiques (propagation de marqueurs de Fahlman). Deux domaines : industrie musicale et système judiciaire.",
      en: "Java + JavaFX implementation of five knowledge representation formalisms: classical logic (CNF/SAT4J + forward-chaining FOL), modal logic (Kripke models), Reiter's default logic (non-monotonic reasoning), description logic (OWL ontologies + HermiT reasoner), and semantic networks (Fahlman marker propagation). Two domains: music industry and judicial system.",
    },
    tech: ["Java 11", "JavaFX", "TweetyProject", "OWL API", "HermiT", "SAT4J", "Maven"],
    categories: ["academic"],
    featured: false,
    year: "2025–2026",
    accent: "#9333ea",
    accentBg: "#1e1b4b",
    accentText: "#ffffff",
  },
  {
    id: "multi-agents",
    title: "Systèmes Multi-Agents (JADE)",
    description: {
      fr: "Projet en 4 parties autour des SMA et de la planification distribuée : protocole d'enchères anglaises FIPA (1 vendeur, N acheteurs — performatifs CFP/PROPOSE/ACCEPT), agents mobiles avec décision multi-critères (1 acheteur, N vendeurs), planification AIMA classique en Python, planification multi-agents centralisée produisant des plans distribués.",
      en: "Four-part project on multi-agent systems and distributed planning: FIPA English auction protocol (1 seller, N buyers — CFP/PROPOSE/ACCEPT performatives), mobile agents with multi-criteria decision (1 buyer, N sellers), classical AIMA planning in Python, centralized multi-agent planning producing distributed plans.",
    },
    tech: ["Java", "JADE", "FIPA-ACL", "Python", "AIMA"],
    categories: ["academic"],
    featured: false,
    year: "2025–2026",
    accent: "#0ea5e9",
    accentBg: "#0c4a6e",
    accentText: "#ffffff",
  },
  {
    id: "meta-heur",
    title: "Métaheuristiques (PSO + GA)",
    description: {
      fr: "9 TPs sur les métaheuristiques d'optimisation : PSO (Particle Swarm Optimization) sur fonctions benchmark unimodales (Sphere, Rosenbrock) et multimodales (Rastrigin, Schwefel, Griewank), Feature Selection avec PSO sigmoïde binaire couplé à KNN, et Algorithmes Génétiques avec sélections Random/Cumulated/N Best et croisements 1-Point/2-Point. Métriques Best/Mean/STD sur multiples runs, courbes de convergence.",
      en: "9 lab sessions on optimization metaheuristics: PSO (Particle Swarm Optimization) on unimodal (Sphere, Rosenbrock) and multimodal (Rastrigin, Schwefel, Griewank) benchmark functions, Feature Selection with binary sigmoid PSO coupled to KNN, and Genetic Algorithms with Random/Cumulated/N Best selection and 1-Point/2-Point crossover. Best/Mean/STD metrics over multiple runs, convergence curves.",
    },
    tech: ["Python", "NumPy", "Matplotlib", "Streamlit", "Scikit-learn"],
    categories: ["academic", "aiml"],
    featured: false,
    year: "2025–2026",
    accent: "#f97316",
    accentBg: "#7c2d12",
    accentText: "#ffffff",
  },
  {
    id: "bench-tris",
    title: "Bench Tris (Complexité)",
    description: {
      fr: "Banc d'essai en C pour comparer plusieurs algorithmes de tri (tri à bulles classique et optimisé, tri par tas min construit par insertions). Chronométrage haute précision via QueryPerformanceCounter sous Windows, comparaison best/worst/random sur tableaux de taille variable, courbes de complexité O(n²) vs O(n log n) en échelle logarithmique.",
      en: "C benchmark for several sorting algorithms (bubble sort, optimized bubble sort, min-heap sort built by insertions). High-precision timing via QueryPerformanceCounter on Windows, best/worst/random comparison on variable-size arrays, O(n²) vs O(n log n) complexity curves in logarithmic scale.",
    },
    tech: ["C", "Algorithmique", "Code::Blocks"],
    categories: ["academic"],
    featured: false,
    year: "2024–2025",
    accent: "#64748b",
    accentBg: "#1e293b",
    accentText: "#ffffff",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────

export interface SkillGroup {
  label: { fr: string; en: string };
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { fr: "Frontend", en: "Frontend" },
    icon: "Monitor",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: { fr: "Backend", en: "Backend" },
    icon: "Server",
    skills: ["Spring Boot", "Java", "Node.js", "Express.js", "PostgreSQL", "SQL"],
  },
  {
    label: { fr: "Mobile", en: "Mobile" },
    icon: "Smartphone",
    skills: ["Flutter", "Dart", "React Native"],
  },
  {
    label: { fr: "IA & Data", en: "AI & Data" },
    icon: "Brain",
    skills: ["Python", "PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    label: { fr: "DevOps & Outils", en: "DevOps & Tools" },
    icon: "Wrench",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Supabase", "Linux", "Postman"],
  },
  {
    label: { fr: "Cybersécurité", en: "Cybersecurity" },
    icon: "Shield",
    skills: ["Snort (IDS)", "Analyse de vulnérabilités", "Red Team (académique)"],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export interface Experience {
  company: string;
  role: { fr: string; en: string };
  period: string;
  description: { fr: string; en: string };
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Coiflow",
    role: { fr: "Fondateur & Développeur Full Stack", en: "Founder & Full Stack Developer" },
    period: "2026 – Présent",
    description: {
      fr: "SaaS de gestion pour barbershops. Conception de l'architecture, développement full stack (React 18, Spring Boot, Java 17), déploiement et opérations.",
      en: "Management SaaS for barbershops. Architecture design, full stack development (React 18, Spring Boot, Java 17), deployment and operations.",
    },
    tags: ["React", "Spring Boot", "TypeScript", "SaaS"],
  },
  {
    company: "FIELDZ",
    role: { fr: "CoFondateur & CTO", en: "Co-founder & CTO" },
    period: "2025 – Présent",
    description: {
      fr: "Plateforme de réservation de terrains de sport. Responsable de l'architecture technique, du développement web et mobile, et du management de l'équipe.",
      en: "Sports field booking platform. Responsible for technical architecture, web and mobile development, and team management.",
    },
    tags: ["React Native", "Spring Boot", "PostgreSQL", "CTO"],
  },
  {
    company: "Le Guide de la Terminale",
    role: { fr: "Fondateur, Enseignant & Développeur", en: "Founder, Teacher & Developer" },
    period: "2022 – Présent",
    description: {
      fr: "Plateforme éducative pour élèves de Terminale bac français. 100+ élèves, 5 pays, 100 % de réussite au bac. Développement de la plateforme et cours en ligne.",
      en: "Educational platform for French Baccalaureate students. 100+ students, 5 countries, 100% pass rate. Platform development and online teaching.",
    },
    tags: ["Éducation", "Web", "Entrepreneuriat"],
  },
  {
    company: "BUDGY",
    role: { fr: "Développeur Mobile", en: "Mobile Developer" },
    period: "2025 – 2026",
    description: {
      fr: "Application mobile de gestion des dépenses personnelles publiée sur le Google Play Store. Développement Flutter/Dart, intégration Firebase.",
      en: "Personal expense tracking mobile app published on the Google Play Store. Flutter/Dart development, Firebase integration.",
    },
    tags: ["Flutter", "Dart", "Firebase", "Google Play"],
  },
  {
    company: "SARL SPINTECHS",
    role: { fr: "Chef de groupe & Développeur Full Stack (PFE)", en: "Team Lead & Full Stack Developer (Final Year Project)" },
    period: "2024 – 2025",
    description: {
      fr: "Système de gestion des visiteurs avec IA (reconnaissance de pièces d'identité, 94 % de précision). Architecture Spring Boot + TensorFlow + PostgreSQL.",
      en: "Visitor management system with AI (identity document recognition, 94% accuracy). Spring Boot + TensorFlow + PostgreSQL architecture.",
    },
    tags: ["Spring Boot", "TensorFlow", "PostgreSQL", "Leadership"],
  },
  {
    company: "Katana School",
    role: { fr: "Enseignant Mathématiques & Physique-Chimie", en: "Mathematics & Physics-Chemistry Teacher" },
    period: "2024 – 2025",
    description: {
      fr: "Cours de mathématiques et physique-chimie pour le baccalauréat français (avec professeure du LIAD).",
      en: "Mathematics and physics-chemistry classes for the French Baccalaureate (alongside a teacher from LIAD).",
    },
    tags: ["Mathématiques", "Physique-Chimie", "Enseignement"],
  },
  {
    company: "CERIST",
    role: { fr: "Organisateur & Animateur scientifique", en: "Organiser & Science Presenter" },
    period: "2023 – 2024",
    description: {
      fr: "Organisation et animation de conférences IA et de l'événement Kidz Science Day au Centre de Recherche sur l'Information Scientifique et Technique.",
      en: "Organisation and facilitation of AI conferences and the Kidz Science Day event at the Scientific and Technical Information Research Centre.",
    },
    tags: ["IA", "Vulgarisation", "Événementiel"],
  },
  {
    company: "SONATRACH",
    role: { fr: "Stagiaire IT", en: "IT Intern" },
    period: "2023 – 2024",
    description: {
      fr: "Initiation à la cybersécurité, aux réseaux, au développement web et à l'infrastructure Data Center dans la première compagnie pétrolière d'Afrique.",
      en: "Introduction to cybersecurity, networks, web development and Data Centre infrastructure at Africa's leading oil company.",
    },
    tags: ["Cybersécurité", "Réseaux", "Data Center"],
  },
];

// ─── BLOG ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  category: { fr: string; en: string };
  date: string;
  readTime: string;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  featured: boolean;
  icon: string;
  content: { fr: string; en: string };
}

export const blogPosts: BlogPost[] = [
  {
    id: "01",
    category: { fr: "IA & Technique", en: "AI & Technical" },
    date: "Avr. 2026",
    readTime: "8 min",
    title: {
      fr: "Comment j'ai atteint 97,8% de précision sur EuroSAT avec ResNet-18",
      en: "How I Achieved 97.8% Accuracy on EuroSAT with ResNet-18",
    },
    excerpt: {
      fr: "Fine-tuning, data augmentation, gestion du déséquilibre de classes : retour complet sur mon projet de classification d'images satellite.",
      en: "Fine-tuning, data augmentation, handling class imbalance: a full retrospective on my satellite image classification project.",
    },
    featured: true,
    icon: "🛰",
    content: {
      fr: `<h3>Le contexte</h3><p>EuroSAT est un dataset de <strong>27 000 images satellite</strong> issues de Sentinel-2, réparties en 10 classes (cultures annuelles, forêts, zones industrielles, etc.). L'objectif : construire un classificateur capable de distinguer ces types de terrain avec la meilleure précision possible.</p><h3>Le choix du modèle</h3><p>J'ai opté pour <strong>ResNet-18 pré-entraîné sur ImageNet</strong>. Pourquoi ? Parce que les features apprises sur ImageNet (textures, bords, formes) transfèrent bien sur des images satellite. Le fine-tuning complet (toutes les couches) donne de meilleurs résultats que le feature extraction pur sur ce type de données.</p><blockquote>Le transfer learning sur ResNet-18 m'a permis d'économiser des dizaines d'heures de calcul tout en obtenant un modèle très compétitif.</blockquote><h3>Les techniques clés</h3><ul><li><strong>Data augmentation</strong> : rotations aléatoires, flips horizontaux/verticaux, color jitter — essentiel pour éviter le surapprentissage</li><li><strong>Learning rate scheduling</strong> : CosineAnnealingLR pour un entraînement stable</li><li><strong>Batch size de 64</strong> : bon compromis vitesse/stabilité du gradient</li><li><strong>Normalisation ImageNet</strong> : mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]</li></ul><h3>Les résultats</h3><p>En <strong>25 epochs</strong>, le modèle atteint <strong>97,80% de précision</strong> sur le jeu de test, avec un F1-score de <strong>0,9779</strong>. Les classes les plus difficiles à distinguer sont les cultures annuelles vs les cultures permanentes.</p><h3>Ce que j'ai appris</h3><p>Ce projet m'a surtout appris que la qualité du prétraitement compte autant que l'architecture. Un modèle simple bien configuré bat souvent un modèle complexe mal utilisé.</p>`,
      en: `<h3>The context</h3><p>EuroSAT is a dataset of <strong>27,000 satellite images</strong> from Sentinel-2, split into 10 classes (annual crops, forests, industrial areas, etc.). The goal: build a classifier capable of distinguishing these terrain types with the highest possible accuracy.</p><h3>Model choice</h3><p>I chose <strong>ResNet-18 pre-trained on ImageNet</strong>. Why? Because the features learned on ImageNet (textures, edges, shapes) transfer well to satellite images. Full fine-tuning (all layers) gives better results than pure feature extraction on this type of data.</p><blockquote>Transfer learning on ResNet-18 saved me dozens of hours of computation while delivering a very competitive model.</blockquote><h3>Key techniques</h3><ul><li><strong>Data augmentation</strong>: random rotations, horizontal/vertical flips, color jitter — essential to avoid overfitting</li><li><strong>Learning rate scheduling</strong>: CosineAnnealingLR for stable training</li><li><strong>Batch size of 64</strong>: good speed/gradient stability tradeoff</li><li><strong>ImageNet normalization</strong>: mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]</li></ul><h3>Results</h3><p>In <strong>25 epochs</strong>, the model reaches <strong>97.80% accuracy</strong> on the test set, with an F1-score of <strong>0.9779</strong>. The hardest classes to distinguish are annual vs. permanent crops.</p><h3>What I learned</h3><p>This project taught me that preprocessing quality matters as much as architecture. A simple, well-configured model often beats a complex, poorly-used one.</p>`,
    },
  },
  {
    id: "02",
    category: { fr: "Startup", en: "Startup" },
    date: "Mars 2026",
    readTime: "6 min",
    title: {
      fr: "De l'idée à la prod : comment j'ai lancé FIELDZ en tant qu'étudiant",
      en: "From Idea to Production: How I Launched FIELDZ as a Student",
    },
    excerpt: {
      fr: "Les vraies galères de lancer une plateforme de réservation de terrains de sport pendant ses études.",
      en: "The real challenges of launching a sport court booking platform as a student.",
    },
    featured: false,
    icon: "/fieldz/favicone-fieldz.svg",
    content: {
      fr: `<h3>L'idée</h3><p>FIELDZ est né d'une frustration simple : impossible de réserver un terrain de foot ou de padel rapidement en ligne à Alger. L'opportunité était évidente.</p><h3>La stack technique</h3><p>J'ai choisi <strong>React + React Native</strong> pour le frontend, <strong>Spring Boot</strong> pour le backend, et <strong>PostgreSQL</strong> pour la base de données.</p><blockquote>Le plus dur n'était pas de coder la plateforme — c'était de convaincre les premiers gérants de terrains d'y mettre leurs créneaux.</blockquote><h3>Les galères</h3><ul><li><strong>La gestion des créneaux en temps réel</strong> : éviter les double-réservations a été le défi technique n°1</li><li><strong>L'onboarding des gérants</strong> : beaucoup n'avaient pas de présence digitale du tout</li><li><strong>Équilibrer études et startup</strong> : organisation rigoureuse, beaucoup de nuits tardives</li></ul><h3>Ce que je referais différemment</h3><p>Je partirais sur un MVP encore plus simple et validerais le marché avant d'écrire une seule ligne de code backend.</p>`,
      en: `<h3>The idea</h3><p>FIELDZ was born from a simple frustration: impossible to book a football or padel court quickly online in Algiers. The opportunity was obvious.</p><h3>The tech stack</h3><p>I chose <strong>React + React Native</strong> for the frontend, <strong>Spring Boot</strong> for the backend, and <strong>PostgreSQL</strong> for the database.</p><blockquote>The hardest part wasn't coding the platform — it was convincing the first court managers to list their slots.</blockquote><h3>The struggles</h3><ul><li><strong>Real-time slot management</strong>: avoiding double-bookings was the #1 technical challenge</li><li><strong>Manager onboarding</strong>: many had no digital presence at all</li><li><strong>Balancing studies and startup</strong>: rigorous organization, lots of late nights</li></ul><h3>What I'd do differently</h3><p>I'd start with an even simpler MVP and validate the market before writing a single line of backend code.</p>`,
    },
  },
  {
    id: "03",
    category: { fr: "Full Stack", en: "Full Stack" },
    date: "Fév. 2026",
    readTime: "5 min",
    title: {
      fr: "Construire Coiflow en solo : les vraies galères du full stack",
      en: "Building Coiflow Solo: The Real Struggles of Full Stack Dev",
    },
    excerpt: {
      fr: "Un SaaS de A à Z en solo : auth, paiements, onboarding, déploiement. Ce que personne ne te dit.",
      en: "A SaaS from scratch solo: auth, payments, onboarding, deployment. What nobody tells you.",
    },
    featured: false,
    icon: "/coiflow/logo-white.png",
    content: {
      fr: `<h3>C'est quoi Coiflow ?</h3><p>Coiflow est un <strong>SaaS de gestion pour barbershops</strong> : réservations en ligne, gestion du portefeuille clients, analytics. Un projet full solo, de la maquette au déploiement.</p><h3>La stack</h3><p><strong>React 18 + Vite + TypeScript + Tailwind CSS</strong>. Pour le backend, j'utilise Supabase pour l'auth et la base de données.</p><h3>Les vraies galères</h3><ul><li><strong>L'auth</strong> : gérer les sessions, les rôles (admin barbershop / client), les invitations</li><li><strong>L'UI des réservations</strong> : le calendrier interactif a pris 3x plus de temps que prévu</li><li><strong>Le déploiement</strong> : CI/CD, variables d'environnement, domaine custom — une journée entière perdue sur des DNS</li></ul><blockquote>En solo, chaque bug est le tien. Chaque décision aussi. C'est épuisant et grisant à la fois.</blockquote><h3>La leçon principale</h3><p>Construire un SaaS en solo apprend une chose fondamentale : <strong>la priorisation</strong>. J'ai appris à livrer des features imparfaites plutôt que de perfectionner des features inutilisées.</p>`,
      en: `<h3>What is Coiflow?</h3><p>Coiflow is a <strong>SaaS management tool for barbershops</strong>: online bookings, client portfolio management, analytics. A fully solo project, from mockup to deployment.</p><h3>The stack</h3><p><strong>React 18 + Vite + TypeScript + Tailwind CSS</strong>. For the backend, I use Supabase for auth and the database.</p><h3>The real struggles</h3><ul><li><strong>Auth</strong>: managing sessions, roles (barbershop admin / client), invitations</li><li><strong>Booking UI</strong>: the interactive calendar took 3x longer than planned</li><li><strong>Deployment</strong>: CI/CD, environment variables, custom domain — a whole day lost on DNS</li></ul><blockquote>Solo, every bug is yours. Every decision too. It's exhausting and exhilarating at the same time.</blockquote><h3>The main lesson</h3><p>Building a SaaS solo teaches one fundamental thing: <strong>prioritization</strong>. I learned to ship imperfect features rather than perfect unused ones.</p>`,
    },
  },
  {
    id: "04",
    category: { fr: "Cybersécurité", en: "Cybersecurity" },
    date: "Jan. 2026",
    readTime: "7 min",
    title: {
      fr: "Ce que le stage SONATRACH m'a appris sur la vraie sécurité en entreprise",
      en: "What My SONATRACH Internship Taught Me About Real Enterprise Security",
    },
    excerpt: {
      fr: "Réseaux, Data Centers, et la réalité de la cybersécurité dans une des plus grandes entreprises d'Afrique.",
      en: "Networks, Data Centers, and the reality of cybersecurity in one of Africa's largest companies.",
    },
    featured: false,
    icon: "/sonatrach_logo.webp",
    content: {
      fr: `<h3>Le contexte</h3><p><strong>SONATRACH</strong> est la première compagnie pétrolière d'Afrique. Faire un stage IT dans une telle structure, c'est découvrir ce que la sécurité signifie vraiment à grande échelle.</p><h3>Ce que j'ai découvert</h3><p>La première leçon : la sécurité en entreprise n'est pas que technique. C'est aussi une question de <strong>processus, de politiques, et de culture</strong>.</p><ul><li><strong>Infrastructure réseau</strong> : segmentation VLAN, pare-feux multi-couches, DMZ</li><li><strong>Monitoring</strong> : systèmes SIEM, alertes en temps réel, gestion des incidents</li><li><strong>Physique</strong> : contrôle d'accès biométrique, redondance électrique, climatisation N+1</li></ul><blockquote>On m'avait appris la cryptographie, les protocoles, les attaques théoriques. Personne ne m'avait appris à gérer un incident à 3h du matin avec 200 serveurs en production.</blockquote><h3>Ce que je recommande</h3><p>Si tu es étudiant en sécurité : fais des stages dans de grandes structures le plus tôt possible. La complexité réelle d'un SI industriel ne s'apprend pas dans un cours magistral.</p>`,
      en: `<h3>The context</h3><p><strong>SONATRACH</strong> is Africa's largest oil company. Doing an IT internship in such an organization means discovering what security really means at scale.</p><h3>What I discovered</h3><p>First lesson: enterprise security isn't just technical. It's also about <strong>processes, policies, and culture</strong>.</p><ul><li><strong>Network infrastructure</strong>: VLAN segmentation, multi-layer firewalls, DMZ</li><li><strong>Monitoring</strong>: SIEM systems, real-time alerts, incident management</li><li><strong>Physical</strong>: biometric access control, electrical redundancy, N+1 cooling</li></ul><blockquote>I'd been taught cryptography, protocols, theoretical attacks. Nobody taught me how to handle an incident at 3am with 200 production servers.</blockquote><h3>My recommendation</h3><p>If you're a security student: intern at large organizations as early as possible. The real complexity of an industrial information system can't be learned in a lecture hall.</p>`,
    },
  },
  {
    id: "05",
    category: { fr: "Réflexion", en: "Opinion" },
    date: "Nov. 2025",
    readTime: "4 min",
    title: {
      fr: "Étudiant en IA à l'USTHB : ce que l'école n'apprend pas",
      en: "AI Student at USTHB: What School Doesn't Teach You",
    },
    excerpt: {
      fr: "Entre les cours théoriques et les projets réels, il y a un gouffre. Voici comment je l'ai comblé.",
      en: "Between theoretical courses and real projects, there's a gap. Here's how I bridged it.",
    },
    featured: false,
    icon: "/usthb_logo.webp",
    content: {
      fr: `<h3>L'USTHB et l'IA</h3><p>Le Master SII à l'USTHB est une formation solide en théorie : algèbre linéaire, probabilités, optimisation, apprentissage automatique. Mais il y a un gouffre entre "comprendre le gradient descent" et "entraîner un modèle qui tourne en production".</p><h3>Ce que l'école n'apprend pas</h3><ul><li><strong>MLOps</strong> : comment versionner des modèles, gérer des expériences, monitorer la dérive des données</li><li><strong>L'ingénierie des données</strong> : 80% du travail en IA, c'est nettoyer et préparer les données</li><li><strong>Le déploiement</strong> : passer d'un notebook Jupyter à une API en production est un métier à part entière</li></ul><blockquote>Les meilleurs ingénieurs IA que je connais ont tous appris les 3/4 de leurs compétences en dehors des cours — sur des projets réels ou en lisant des papers.</blockquote><h3>Mon conseil</h3><p>Ne compte pas sur l'école pour être à jour. Utilise-la pour les fondamentaux théoriques — ils sont irremplaçables — et construis le reste toi-même.</p>`,
      en: `<h3>USTHB and AI</h3><p>The Master's in Intelligent Computer Systems at USTHB is a solid theoretical program: linear algebra, probability, optimization, machine learning. But there's a gap between "understanding gradient descent" and "training a model that runs in production".</p><h3>What school doesn't teach</h3><ul><li><strong>MLOps</strong>: how to version models, manage experiments, monitor data drift</li><li><strong>Data engineering</strong>: 80% of AI work is cleaning and preparing data</li><li><strong>Deployment</strong>: going from a Jupyter notebook to a production API is a full-time skill</li></ul><blockquote>The best AI engineers I know have all learned 3/4 of their skills outside of class — on real projects or reading papers.</blockquote><h3>My advice</h3><p>Don't rely on school to stay current. Use it for theoretical fundamentals — they're irreplaceable — and build the rest yourself.</p>`,
    },
  },
  {
    id: "06",
    category: { fr: "IA & Recherche", en: "AI & Research" },
    date: "Mai 2026",
    readTime: "10 min",
    title: {
      fr: "Reproduire un papier de recherche : MCTNet et la classification de cultures Sentinel-2",
      en: "Reproducing a Research Paper: MCTNet for Sentinel-2 Crop Classification",
    },
    excerpt: {
      fr: "Du papier Wang 2024 à trois contributions originales : retour sur 4 mois de reproduction d'un réseau CNN-Transformer sur imagerie satellite.",
      en: "From Wang 2024 paper to three original contributions: a 4-month deep-dive into reproducing a CNN-Transformer network on satellite imagery.",
    },
    featured: true,
    icon: "🛰",
    content: {
      fr: `<h3>Le papier de départ</h3><p>Wang et al. ont publié en 2024 <em>A lightweight CNN-Transformer network for pixel-based crop mapping using time-series Sentinel-2 imagery</em> (Computers and Electronics in Agriculture). L'idée : combiner un sous-module CNN (pour les motifs spatiaux locaux) et un Transformer ALPE (Absolute Learnable Positional Embedding, pour la dynamique temporelle multi-bandes) via un module de fusion <strong>CT-Fusion</strong>.</p><h3>Reproduire, vraiment</h3><p>On était trois étudiants à se répartir le boulot : Tesnime sur le CNN, Sarah sur le preprocessing, moi sur l'ALPE Transformer et l'assemblage <code>MCTNet</code> dans <code>train.py</code>. Reproduire un papier, ce n'est pas copier des équations — c'est :</p><ul><li>Récupérer les bons datasets <strong>Arkansas</strong> et <strong>California</strong> au bon format (.npy, formes <code>(N, T, B)</code> et <code>(N, B, H, W)</code>)</li><li>Re-dériver les hyperparamètres manquants (le papier omet la taille du batch en validation, le warmup, le scheduler exact)</li><li>Vérifier la cohérence des shapes à chaque étape — une transposition oubliée et la loss diverge sans erreur explicite</li></ul><blockquote>Reproduire un papier, c'est apprendre à lire entre les lignes. Les auteurs publient ce qui marche, pas la liste des 30 choses qu'ils ont essayées avant.</blockquote><h3>Partie 2 : intégrer des covariables environnementales</h3><p>Le papier original n'utilise que Sentinel-2. On a ajouté des données climatiques (température, précipitations) et pédologiques (humidité du sol) au pipeline, en créant <code>MCTNetWithCovars</code>. Gain mesuré sur Arkansas : modéré mais reproductible.</p><h3>Partie 3 : nos trois contributions originales</h3><p>Là où le projet devient vraiment intéressant — sortir du strict cadre du papier.</p><ol><li><strong>GatedMCTNet</strong> — remplacer la fusion concaténation par un mécanisme de gating dynamique entre la branche CNN et la branche Transformer. L'idée : laisser le modèle apprendre <em>quelle source faire confiance</em> selon le contexte du pixel.</li><li><strong>MCTNet Multiscale</strong> — extraire les features CNN à plusieurs résolutions (3×3, 5×5, 7×7) avant la fusion. Inspiré des architectures Inception, gain net sur les parcelles aux frontières floues.</li><li><strong>UNetMCTNetWithCovars</strong> — encodeur-décodeur U-Net qui injecte MCTNet et les covariables au goulot d'étranglement. La structure la plus complexe, et celle qui a le mieux performé sur California.</li></ol><h3>Ce que j'ai appris</h3><p>D'abord, qu'un papier en deep learning n'est <strong>pas</strong> un produit fini. C'est un point de départ. Ensuite, qu'un projet en équipe sur du code ML demande de la <strong>discipline Git</strong> : on a travaillé avec des branches par membre (<code>arslan/transformer</code>, <code>tesnime/cnn</code>, <code>sarah/preprocessing</code>) puis une branche <code>refactor/structure</code> pour la réorganisation finale. Sans ça, le projet aurait fini en un seul notebook de 4000 lignes.</p>`,
      en: `<h3>The starting paper</h3><p>Wang et al. published in 2024 <em>A lightweight CNN-Transformer network for pixel-based crop mapping using time-series Sentinel-2 imagery</em> (Computers and Electronics in Agriculture). The idea: combine a CNN sub-module (local spatial patterns) and an ALPE Transformer (Absolute Learnable Positional Embedding, for multi-band temporal dynamics) through a <strong>CT-Fusion</strong> module.</p><h3>Really reproducing</h3><p>We were three students splitting the work: Tesnime on the CNN, Sarah on preprocessing, me on the ALPE Transformer and <code>MCTNet</code> assembly in <code>train.py</code>. Reproducing a paper isn't copying equations — it's:</p><ul><li>Getting the <strong>Arkansas</strong> and <strong>California</strong> datasets in the right format (.npy, shapes <code>(N, T, B)</code> and <code>(N, B, H, W)</code>)</li><li>Re-deriving missing hyperparameters (the paper omits validation batch size, warmup, exact scheduler)</li><li>Verifying shape consistency at every step — one missed transpose and the loss diverges silently</li></ul><blockquote>Reproducing a paper means learning to read between the lines. Authors publish what works, not the list of 30 things they tried before.</blockquote><h3>Part 2: integrating environmental covariates</h3><p>The original paper only uses Sentinel-2. We added climate data (temperature, precipitation) and soil data (moisture) to the pipeline, creating <code>MCTNetWithCovars</code>. Measured gain on Arkansas: moderate but reproducible.</p><h3>Part 3: our three original contributions</h3><p>This is where the project gets really interesting — moving beyond the paper's scope.</p><ol><li><strong>GatedMCTNet</strong> — replace concatenation fusion with a dynamic gating mechanism between CNN and Transformer branches. The idea: let the model learn <em>which source to trust</em> based on pixel context.</li><li><strong>MCTNet Multiscale</strong> — extract CNN features at multiple resolutions (3×3, 5×5, 7×7) before fusion. Inception-inspired, clear gain on parcels with blurry boundaries.</li><li><strong>UNetMCTNetWithCovars</strong> — U-Net encoder-decoder injecting MCTNet and covariates at the bottleneck. Most complex architecture, best performer on California.</li></ol><h3>What I learned</h3><p>First, a deep learning paper is <strong>not</strong> a finished product. It's a starting point. Second, a team ML project demands <strong>Git discipline</strong>: we worked with per-member branches (<code>arslan/transformer</code>, <code>tesnime/cnn</code>, <code>sarah/preprocessing</code>) then a <code>refactor/structure</code> branch for final reorganization. Without it, the project would have ended as one 4000-line notebook.</p>`,
    },
  },
  {
    id: "07",
    category: { fr: "Sécurité", en: "Security" },
    date: "Avr. 2026",
    readTime: "7 min",
    title: {
      fr: "OAuth2 Code Exchange : pourquoi tu ne devrais jamais balancer un JWT dans l'URL",
      en: "OAuth2 Code Exchange: Why You Should Never Throw a JWT in the URL",
    },
    excerpt: {
      fr: "Retour d'expérience FIELDZ : du JWT dans le fragment à l'échange de code court, puis migration full cookie HttpOnly.",
      en: "FIELDZ retrospective: from JWT in the URL fragment to short-lived code exchange, then full HttpOnly cookie migration.",
    },
    featured: false,
    icon: "/fieldz/favicone-fieldz.svg",
    content: {
      fr: `<h3>Le problème</h3><p>Sur FIELDZ, la première version du login Google OAuth2 fonctionnait comme ça : Google redirige vers <code>/oauth-success#token=eyJ...</code>, le frontend lit le fragment, le stocke en <code>localStorage</code>. C'est simple, ça marche. Et c'est <strong>une catastrophe pour la sécurité</strong>.</p><h3>Les fuites du JWT dans l'URL</h3><ul><li><strong>Historique du navigateur</strong> : le JWT y reste, même après déconnexion</li><li><strong>Logs serveur</strong> : si un proxy ou un CDN log les URLs, ton token est dans des fichiers texte</li><li><strong>Referer headers</strong> : un lien externe cliqué après le login peut leak le token</li><li><strong>Extensions navigateur</strong> : toutes celles qui lisent l'URL ont accès au token</li><li><strong>localStorage = XSS</strong> : une vuln XSS et toutes les sessions sont compromises</li></ul><blockquote>Un JWT, c'est un secret valide pendant 15 minutes à plusieurs heures. Le traiter comme un paramètre d'URL revient à le coller sur un Post-it.</blockquote><h3>La solution : code exchange</h3><p>OAuth2 prévoit un pattern <strong>Authorization Code Flow</strong> où on n'échange jamais le token directement. Le serveur génère un <em>code court</em> à usage unique avec un TTL de 60 secondes, qu'on échange contre le vrai token via une requête POST authentifiée.</p><p>L'implémentation côté backend Spring Boot :</p><pre><code>// OAuthCodeService — codes en ConcurrentHashMap, TTL 60s, usage unique
public String generateCode(UserDetails user) {
    String code = UUID.randomUUID().toString();
    codes.put(code, new CodeEntry(user, Instant.now().plusSeconds(60)));
    return code;
}

// OAuth2SuccessHandler redirige vers ?code=xxx (pas #token=jwt)
response.sendRedirect("/oauth-success?code=" + code);</code></pre><p>Côté front, on échange le code via <code>POST /api/auth/exchange-code</code>. Détail crucial : <strong>useRef</strong> en React pour empêcher le double appel dû à StrictMode — sinon le code est consommé deux fois et le second appel échoue.</p><h3>Le chantier suivant : cookies HttpOnly</h3><p>Même avec le code exchange, on stockait toujours le JWT en <code>sessionStorage</code> côté front. Donc XSS = compromission. La vraie réponse : <strong>cookies HttpOnly + Secure + SameSite=Strict</strong>, posés côté serveur, jamais accessibles depuis JavaScript.</p><pre><code>ResponseCookie.from("access_token", jwt)
    .httpOnly(true).secure(true)
    .sameSite("Strict").path("/api")
    .maxAge(Duration.ofMinutes(15))
    .build();</code></pre><p>Côté front, plus de <code>Authorization: Bearer</code>. Le filtre <code>JwtAuthenticationFilter</code> lit directement le cookie. Et un intercepteur axios gère le refresh automatique sur 401 avec une queue pour les requêtes concurrentes — sinon une vague de 401 simultanés déclenche dix refresh en parallèle.</p><h3>Ce que ça change concrètement</h3><p>Une XSS sur FIELDZ ne donne plus accès à la session. Le token n'apparaît plus dans les logs ni dans l'historique. Et le code de l'app a perdu 200 lignes de gestion manuelle de tokens.</p>`,
      en: `<h3>The problem</h3><p>On FIELDZ, the first Google OAuth2 login worked like this: Google redirects to <code>/oauth-success#token=eyJ...</code>, the frontend reads the fragment, stores it in <code>localStorage</code>. Simple, works. And a <strong>security disaster</strong>.</p><h3>JWT-in-URL leaks</h3><ul><li><strong>Browser history</strong>: JWT stays there even after logout</li><li><strong>Server logs</strong>: if any proxy or CDN logs URLs, your token sits in text files</li><li><strong>Referer headers</strong>: an external link clicked after login can leak the token</li><li><strong>Browser extensions</strong>: any extension reading URLs gets the token</li><li><strong>localStorage = XSS</strong>: one XSS vuln and every session is compromised</li></ul><blockquote>A JWT is a secret valid for 15 minutes to a few hours. Treating it as a URL parameter is like sticking it on a Post-it.</blockquote><h3>The fix: code exchange</h3><p>OAuth2 specifies an <strong>Authorization Code Flow</strong> where the token is never directly exchanged. The server generates a <em>short code</em>, single-use, 60-second TTL, exchanged against the real token via an authenticated POST request.</p><p>Spring Boot implementation:</p><pre><code>// OAuthCodeService — codes in ConcurrentHashMap, 60s TTL, single-use
public String generateCode(UserDetails user) {
    String code = UUID.randomUUID().toString();
    codes.put(code, new CodeEntry(user, Instant.now().plusSeconds(60)));
    return code;
}

// OAuth2SuccessHandler redirects to ?code=xxx (not #token=jwt)
response.sendRedirect("/oauth-success?code=" + code);</code></pre><p>On the front, we exchange the code via <code>POST /api/auth/exchange-code</code>. Crucial detail: <strong>useRef</strong> in React to prevent the StrictMode double-call — otherwise the code is consumed twice and the second call fails.</p><h3>Next chantier: HttpOnly cookies</h3><p>Even with code exchange, we still stored the JWT in <code>sessionStorage</code> on the front. So XSS = compromise. Real answer: <strong>HttpOnly + Secure + SameSite=Strict cookies</strong>, set server-side, never accessible from JavaScript.</p><pre><code>ResponseCookie.from("access_token", jwt)
    .httpOnly(true).secure(true)
    .sameSite("Strict").path("/api")
    .maxAge(Duration.ofMinutes(15))
    .build();</code></pre><p>On the front, no more <code>Authorization: Bearer</code>. The <code>JwtAuthenticationFilter</code> reads the cookie directly. An axios interceptor handles auto-refresh on 401 with a queue for concurrent requests — otherwise a wave of simultaneous 401s triggers ten parallel refreshes.</p><h3>What this actually changes</h3><p>An XSS on FIELDZ no longer grants session access. The token isn't in logs or browser history anymore. And the app code lost 200 lines of manual token plumbing.</p>`,
    },
  },
  {
    id: "08",
    category: { fr: "IA & Optimisation", en: "AI & Optimization" },
    date: "Avr. 2026",
    readTime: "8 min",
    title: {
      fr: "PSO vs Algorithmes Génétiques : deux philosophies pour fuir les minima locaux",
      en: "PSO vs Genetic Algorithms: Two Philosophies for Escaping Local Minima",
    },
    excerpt: {
      fr: "Comparaison pratique des deux grandes familles de métaheuristiques sur les fonctions benchmark classiques.",
      en: "Practical comparison of the two main metaheuristic families on classic benchmark functions.",
    },
    featured: false,
    icon: "🧬",
    content: {
      fr: `<h3>Le problème : optimiser sans gradient</h3><p>Quand la fonction à minimiser est non-différentiable, discontinue, ou pleine de minima locaux, les méthodes de gradient s'effondrent. Les <strong>métaheuristiques</strong> sont la réponse : des algorithmes qui explorent l'espace de recherche sans aucune hypothèse sur la régularité de la fonction.</p><h3>Le tournoi : fonctions benchmark</h3><p>Pour comparer deux algorithmes, il faut les juger sur les mêmes fonctions. Les classiques :</p><table><tr><th>Fonction</th><th>Type</th><th>Difficulté</th></tr><tr><td>Sphere (F1)</td><td>Unimodale</td><td>Test d'exploitation (convergence)</td></tr><tr><td>Rosenbrock (F5)</td><td>Unimodale, vallée étroite</td><td>Piège les algos peu précis. Optimum en (1,1,…,1), pas zéro !</td></tr><tr><td>Rastrigin (F9)</td><td>Multimodale</td><td>Champ de minima locaux régulier — test d'exploration</td></tr><tr><td>Schwefel (F8)</td><td>Multimodale</td><td>Optimum à f = −418.9829×D, loin de l'origine</td></tr></table><h3>PSO — la sagesse de l'essaim</h3><p>Particle Swarm Optimization s'inspire des nuées d'oiseaux. Chaque particule i a une position xᵢ et une vitesse vᵢ. À chaque itération :</p><pre><code>v_i ← w·v_i + c1·r1·(pbest_i − x_i) + c2·r2·(gbest − x_i)
x_i ← x_i + v_i</code></pre><p>Trois termes : inertie (continuer dans la direction actuelle), <em>cognitif</em> (retourner vers son meilleur perso), <em>social</em> (suivre le meilleur global). Le tuning de <code>w</code>, <code>c1</code>, <code>c2</code> définit l'équilibre exploration/exploitation.</p><blockquote>PSO converge vite, parfois trop vite : sur Rastrigin, si <code>w</code> décroît trop tôt, l'essaim s'écrase dans le premier minimum local.</blockquote><h3>GA — la sélection naturelle</h3><p>Les Algorithmes Génétiques sont une autre famille. Une population de chromosomes (binaires ou réels), trois opérateurs : <strong>sélection</strong>, <strong>croisement</strong>, <strong>mutation</strong>. Le pseudo-code du TP :</p><ol><li>Évaluer la fitness de la population P</li><li>Sélectionner les parents (Cumulated/CDF, Random, N Best…)</li><li>Croiser (1-Point, 2-Point) pour produire P_children</li><li>Muter avec probabilité p_m</li><li>Construire P_new = N Best de P ∪ P_children</li><li>Répéter</li></ol><p>La sélection <strong>Cumulated</strong> (souvent appelée roulette) utilise une CDF C[j] et un tirage aléatoire uniforme : chaque individu a une chance proportionnelle à sa fitness d'être sélectionné. La sélection <strong>N Best</strong> (ce qu'on appelle ailleurs <em>elitism</em>) garde simplement les meilleurs.</p><h3>Feature Selection — quand PSO devient binaire</h3><p>Côté application, on a utilisé PSO pour faire de la <strong>Feature Selection</strong> sur un classifieur KNN. Chaque particule code un sous-ensemble de features. Astuce : la position xᵢ ∈ ℝ est continue, mais on l'évalue en binaire via une <strong>sigmoïde</strong> : si <code>σ(xᵢ) &gt; 0.5</code>, la feature est sélectionnée. La fitness combine erreur de classification et nombre de features (pénalité de complexité).</p><h3>Lequel choisir ?</h3><p>Mon retour après les 9 TPs :</p><ul><li><strong>PSO</strong> : excellent sur les fonctions continues, lisses, modérément multimodales. Code court, peu d'hyperparamètres.</li><li><strong>GA</strong> : roi du combinatoire (sélection de features, planning, knapsack). Plus lent à converger, mais plus robuste sur les espaces hostiles.</li><li><strong>Multiples runs obligatoires</strong> : un seul run ne dit rien sur un algo stochastique. On rapporte <strong>Best, Mean, STD</strong> sur 30 runs minimum.</li></ul>`,
      en: `<h3>The problem: optimizing without gradients</h3><p>When the objective function is non-differentiable, discontinuous, or riddled with local minima, gradient methods break down. <strong>Metaheuristics</strong> are the answer: algorithms that explore the search space without any assumption on the function's regularity.</p><h3>The arena: benchmark functions</h3><p>To compare two algorithms, judge them on the same functions. The classics:</p><table><tr><th>Function</th><th>Type</th><th>Difficulty</th></tr><tr><td>Sphere (F1)</td><td>Unimodal</td><td>Exploitation test (convergence)</td></tr><tr><td>Rosenbrock (F5)</td><td>Unimodal, narrow valley</td><td>Traps imprecise algorithms. Optimum at (1,1,…,1), not zero!</td></tr><tr><td>Rastrigin (F9)</td><td>Multimodal</td><td>Regular field of local minima — exploration test</td></tr><tr><td>Schwefel (F8)</td><td>Multimodal</td><td>Optimum at f = −418.9829×D, far from origin</td></tr></table><h3>PSO — the swarm's wisdom</h3><p>Particle Swarm Optimization is inspired by bird flocks. Each particle i has a position xᵢ and velocity vᵢ. Each iteration:</p><pre><code>v_i ← w·v_i + c1·r1·(pbest_i − x_i) + c2·r2·(gbest − x_i)
x_i ← x_i + v_i</code></pre><p>Three terms: inertia (keep going), <em>cognitive</em> (return to personal best), <em>social</em> (follow global best). Tuning <code>w</code>, <code>c1</code>, <code>c2</code> defines exploration/exploitation balance.</p><blockquote>PSO converges fast, sometimes too fast: on Rastrigin, if <code>w</code> decreases too early, the swarm crashes into the first local minimum.</blockquote><h3>GA — natural selection</h3><p>Genetic Algorithms are another family. A population of chromosomes (binary or real), three operators: <strong>selection</strong>, <strong>crossover</strong>, <strong>mutation</strong>. The lab pseudo-code:</p><ol><li>Evaluate fitness of population P</li><li>Select parents (Cumulated/CDF, Random, N Best…)</li><li>Crossover (1-Point, 2-Point) to produce P_children</li><li>Mutate with probability p_m</li><li>Build P_new = N Best of P ∪ P_children</li><li>Repeat</li></ol><p><strong>Cumulated</strong> selection (often called roulette wheel) uses a CDF C[j] and uniform random draw: each individual is selected with probability proportional to fitness. <strong>N Best</strong> selection (elsewhere called <em>elitism</em>) just keeps the top performers.</p><h3>Feature Selection — when PSO goes binary</h3><p>For application, we used PSO for <strong>Feature Selection</strong> with a KNN classifier. Each particle encodes a feature subset. Trick: position xᵢ ∈ ℝ is continuous, but evaluated in binary via a <strong>sigmoid</strong>: if <code>σ(xᵢ) &gt; 0.5</code>, feature is selected. Fitness combines classification error and feature count (complexity penalty).</p><h3>Which to choose?</h3><p>My takeaway after 9 labs:</p><ul><li><strong>PSO</strong>: excellent on continuous, smooth, moderately multimodal functions. Short code, few hyperparameters.</li><li><strong>GA</strong>: king of combinatorial (feature selection, scheduling, knapsack). Slower convergence but more robust on hostile spaces.</li><li><strong>Multiple runs mandatory</strong>: one run says nothing about a stochastic algorithm. Report <strong>Best, Mean, STD</strong> over 30 runs minimum.</li></ul>`,
    },
  },
  {
    id: "09",
    category: { fr: "Systèmes Multi-Agents", en: "Multi-Agent Systems" },
    date: "Mars 2026",
    readTime: "9 min",
    title: {
      fr: "Implémenter une enchère anglaise avec JADE : performatifs FIPA et behaviours",
      en: "Implementing an English Auction with JADE: FIPA Performatives and Behaviours",
    },
    excerpt: {
      fr: "Construire un protocole de négociation distribué à plusieurs agents Java avec JADE.",
      en: "Building a distributed multi-agent negotiation protocol with Java and JADE.",
    },
    featured: false,
    icon: "🤝",
    content: {
      fr: `<h3>Pourquoi les agents ?</h3><p>Un système classique a un état centralisé et un fil d'exécution. Un <strong>système multi-agents (SMA)</strong> en a plusieurs, autonomes, qui communiquent par messages asynchrones. Chaque agent <em>perçoit</em>, <em>décide</em>, et <em>agit</em>. C'est l'abstraction parfaite pour modéliser une négociation, une enchère, ou un marché.</p><h3>JADE en 5 minutes</h3><p>JADE (Java Agent DEvelopment) implémente la norme <strong>FIPA</strong>. Les briques :</p><ul><li><code>Agent</code> — classe à étendre. <code>setup()</code> au démarrage, <code>takeDown()</code> à l'arrêt</li><li><code>Behaviour</code> — unité de comportement. <code>CyclicBehaviour</code> pour écouter en boucle, <code>OneShotBehaviour</code> pour une action, <code>FSMBehaviour</code> pour une machine à états</li><li><code>ACLMessage</code> — message FIPA. Possède un <em>performatif</em> (verbe), un contenu, un destinataire</li><li><code>AID</code> — identifiant d'agent unique sur la plateforme</li></ul><h3>Les performatifs FIPA-ACL</h3><p>Le vocabulaire pour parler entre agents :</p><table><tr><th>Performatif</th><th>Sens</th></tr><tr><td><code>CFP</code></td><td>Call For Proposal — appel d'offres</td></tr><tr><td><code>PROPOSE</code></td><td>Offre en réponse à un CFP</td></tr><tr><td><code>ACCEPT_PROPOSAL</code></td><td>Acceptation d'une offre</td></tr><tr><td><code>REJECT_PROPOSAL</code></td><td>Refus d'une offre</td></tr><tr><td><code>REFUSE</code></td><td>Refus de participer</td></tr><tr><td><code>INFORM</code></td><td>Transmission d'information</td></tr></table><h3>Le protocole d'enchère anglaise</h3><p>Une enchère anglaise : le prix monte par paliers, les acheteurs surenchérissent, le dernier debout gagne.</p><pre><code>Seller                          Buyer1          Buyer2
  |---- CFP (prix courant) ------>|               |
  |---- CFP (prix courant) ---------------------->|
  |&lt;--- PROPOSE (offre) ----------|               |
  |&lt;--- PROPOSE (offre) --------------------------|
  | [retient la meilleure offre]                  |
  |---- CFP (prix + step) ------->|               |
  |&lt;--- REFUSE (abandon) ---------|               |
  |&lt;--- PROPOSE (surenchère) ---------------------|
  | [tous abandonnés ou timeout]                  |
  |---- ACCEPT_PROPOSAL (gagnant) --------------->|
  |---- REJECT_PROPOSAL (perdant)|               |</code></pre><h3>Le piège : la synchronisation</h3><p>Premier réflexe naïf : un <code>while(true)</code> dans le seller qui envoie un CFP, attend les réponses, calcule le meilleur. <strong>Mauvaise idée</strong>. JADE est asynchrone — bloquer le thread principal bloque l'agent.</p><p>La bonne approche : un <code>FSMBehaviour</code> qui modélise l'état de l'enchère (WAITING_BIDS, EVALUATING, NEXT_ROUND, DONE) et utilise <code>blockingReceive(timeout)</code> pour collecter les offres jusqu'à un deadline. Si tous les acheteurs ont fait REFUSE → enchère close.</p><blockquote>En JADE, on ne pense pas en "fil d'exécution" — on pense en "qui réagit à quel message". C'est un changement de paradigme.</blockquote><h3>Agents mobiles — partie 2</h3><p>La partie 2 du projet pose le problème inverse : 1 acheteur, N vendeurs distribués. Au lieu d'envoyer un message à chaque vendeur, l'acheteur envoie un <strong>agent mobile</strong> qui visite les vendeurs un par un, collecte les offres, puis revient. La décision finale se fait par analyse multi-critères (prix + délai + réputation).</p><h3>Pourquoi ça compte</h3><p>Au-delà du TP, ce paradigme est partout : enchères publicitaires en temps réel (RTB), market makers algorithmiques, allocations de ressources cloud, smart contracts. Comprendre FIPA et JADE, c'est avoir le vocabulaire pour modéliser <strong>n'importe quel système distribué à acteurs autonomes</strong>.</p>`,
      en: `<h3>Why agents?</h3><p>A classical system has centralized state and one execution thread. A <strong>multi-agent system (MAS)</strong> has many, autonomous, communicating via asynchronous messages. Each agent <em>perceives</em>, <em>decides</em>, <em>acts</em>. The perfect abstraction for modeling negotiations, auctions, markets.</p><h3>JADE in 5 minutes</h3><p>JADE (Java Agent DEvelopment) implements the <strong>FIPA</strong> standard. The building blocks:</p><ul><li><code>Agent</code> — class to extend. <code>setup()</code> at start, <code>takeDown()</code> at stop</li><li><code>Behaviour</code> — behavior unit. <code>CyclicBehaviour</code> to listen in a loop, <code>OneShotBehaviour</code> for one action, <code>FSMBehaviour</code> for a state machine</li><li><code>ACLMessage</code> — FIPA message. Has a <em>performative</em> (verb), content, recipient</li><li><code>AID</code> — unique agent identifier on the platform</li></ul><h3>FIPA-ACL performatives</h3><p>The vocabulary to talk between agents:</p><table><tr><th>Performative</th><th>Meaning</th></tr><tr><td><code>CFP</code></td><td>Call For Proposal</td></tr><tr><td><code>PROPOSE</code></td><td>Bid in response to a CFP</td></tr><tr><td><code>ACCEPT_PROPOSAL</code></td><td>Accept a bid</td></tr><tr><td><code>REJECT_PROPOSAL</code></td><td>Reject a bid</td></tr><tr><td><code>REFUSE</code></td><td>Decline to participate</td></tr><tr><td><code>INFORM</code></td><td>Information transmission</td></tr></table><h3>The English auction protocol</h3><p>An English auction: price climbs in steps, buyers outbid each other, last one standing wins.</p><pre><code>Seller                          Buyer1          Buyer2
  |---- CFP (current price) ----->|               |
  |---- CFP (current price) --------------------->|
  |&lt;--- PROPOSE (bid) ------------|               |
  |&lt;--- PROPOSE (bid) ----------------------------|
  | [keeps best bid]                              |
  |---- CFP (price + step) ------>|               |
  |&lt;--- REFUSE (drop out) --------|               |
  |&lt;--- PROPOSE (raise) --------------------------|
  | [all dropped or timeout]                      |
  |---- ACCEPT_PROPOSAL (winner) ---------------->|
  |---- REJECT_PROPOSAL (loser) -|               |</code></pre><h3>The trap: synchronization</h3><p>Naive first reflex: a <code>while(true)</code> in the seller that sends CFP, waits for responses, picks best. <strong>Bad idea</strong>. JADE is asynchronous — blocking the main thread freezes the agent.</p><p>Right approach: an <code>FSMBehaviour</code> modeling the auction state (WAITING_BIDS, EVALUATING, NEXT_ROUND, DONE) using <code>blockingReceive(timeout)</code> to collect bids until a deadline. If all buyers REFUSE → auction closed.</p><blockquote>In JADE you don't think "execution thread" — you think "who reacts to which message". It's a paradigm shift.</blockquote><h3>Mobile agents — part 2</h3><p>Part 2 flips the problem: 1 buyer, N distributed sellers. Instead of messaging each seller, the buyer sends a <strong>mobile agent</strong> that visits sellers one by one, collects offers, returns. Final decision is multi-criteria (price + delay + reputation).</p><h3>Why it matters</h3><p>Beyond the lab, this paradigm is everywhere: real-time bidding (RTB), algorithmic market makers, cloud resource allocation, smart contracts. Understanding FIPA and JADE gives you the vocabulary to model <strong>any distributed system of autonomous actors</strong>.</p>`,
    },
  },
  {
    id: "10",
    category: { fr: "IA Symbolique", en: "Symbolic AI" },
    date: "Mars 2026",
    readTime: "9 min",
    title: {
      fr: "Logique non-monotone : pourquoi un raisonneur peut changer d'avis",
      en: "Non-Monotonic Logic: Why a Reasoner Can Change Its Mind",
    },
    excerpt: {
      fr: "Théorie des défauts de Reiter, ontologies OWL et réseaux sémantiques : trois manières de représenter un raisonnement qui se révise.",
      en: "Reiter's default logic, OWL ontologies and semantic networks: three ways to represent reasoning that revises itself.",
    },
    featured: false,
    icon: "🧠",
    content: {
      fr: `<h3>Le problème de la logique classique</h3><p>En logique classique, on a la <strong>monotonie</strong> : si KB ⊨ φ, alors KB ∪ {ψ} ⊨ φ. Autrement dit, ajouter un fait <em>ne fait jamais perdre une conclusion</em>. Mais on raisonne pas comme ça au quotidien. "Tweety est un oiseau" → "Tweety vole". "Tweety est un pingouin" → "Tweety ne vole pas". L'ajout d'un fait a invalidé une conclusion.</p><h3>La théorie des défauts (Reiter, 1980)</h3><p>Une <strong>théorie des défauts</strong> Δ = (W, D) sépare :</p><ul><li>W : faits certains (la KB classique)</li><li>D : règles par défaut, du type <code>α : β / γ</code> — "si α est prouvé et β consistant, alors par défaut γ"</li></ul><p>Sur mon TP RCR, j'ai implémenté ça avec <strong>TweetyProject</strong>. Exemple judiciaire :</p><pre><code>d1: Accuse(x)      :: Innocent(x)      / Innocent(x)
d2: Recidiviste(x) :: PeineLourde(x)   / PeineLourde(x)
d6: Recidiviste(x) :: !Innocent(x)     / !Innocent(x)</code></pre><p>Omar est <code>Accuse</code> et <code>Recidiviste</code>. d1 conclut <code>Innocent(omar)</code>. d6 conclut <code>!Innocent(omar)</code>. <strong>Conflit</strong> — on obtient deux <em>extensions</em> incompatibles. C'est exactement comme ça que la justice marche : présomption d'innocence en général, mais l'antécédent de récidive crée un dilemme à arbitrer.</p><blockquote>La non-monotonie n'est pas un bug de la logique formelle, c'est une feature : elle permet de raisonner par défaut tout en révisant ses croyances quand de nouveaux faits arrivent.</blockquote><h3>Démontrer la non-monotonie</h3><p>Pour <strong>prouver</strong> qu'un raisonnement est non-monotone, on construit deux théories : l'originale, puis l'originale + un fait. Si une conclusion qui était dans toutes les extensions disparaît, c'est gagné.</p><p>Cas Ali : Accusé + Témoignage → 1 extension contenant <code>Innocent(ali)</code>. Ajout de <code>Recidiviste(ali)</code> → d1 vs d6 → 2 extensions. <code>Innocent(ali)</code> n'est plus dans <em>toutes</em> les extensions. Non-monotonie démontrée.</p><h3>Logique de description (OWL + HermiT)</h3><p>Une autre approche : modéliser le domaine comme une <strong>ontologie</strong> (TBox + ABox), puis interroger un raisonneur. Sur le même projet :</p><pre><code>// TBox : Rappeur ≡ Artiste ⊓ ∃pratique.Rap ⊓ ∀produit.TitreRap
mgr.addAxiom(onto, f.getOWLEquivalentClassesAxiom(Rappeur,
    f.getOWLObjectIntersectionOf(Artiste,
        f.getOWLObjectSomeValuesFrom(pratique, Rap),
        f.getOWLObjectAllValuesFrom(produit, TitreRap))));</code></pre><p>Le raisonneur <strong>HermiT</strong> classifie automatiquement la hiérarchie de concepts et répond aux requêtes d'instances. Subtilité : OWL utilise l'<strong>Open World Assumption</strong> — l'absence d'info n'est pas une négation. Si je ne dis pas "Tif n'est signé chez aucun label", le raisonneur ne peut pas conclure qu'il est libre de droits.</p><h3>Réseaux sémantiques et propagation de marqueurs</h3><p>Troisième approche, plus visuelle : représenter la connaissance comme un <strong>graphe</strong> avec des arcs typés (<code>is-a strict</code>, <code>is-a non-strict</code>, <code>exception stricte</code>). L'algorithme de Fahlman (1979) répond aux requêtes par <strong>propagation de marqueurs</strong> :</p><ol><li>Marquer la source par M1, la cible par M2</li><li>Propager M1 et M2 à rebours des arcs is-a</li><li>Intersection M1 ∩ M2 = réponse</li></ol><p>Et les exceptions strictes (le pingouin barré qui n'hérite pas du "vole" des oiseaux) bloquent la propagation au bon endroit.</p><h3>Pourquoi ça compte en 2026</h3><p>Avec le boom des LLMs, on a tendance à oublier que l'IA symbolique existe. Mais quand il faut <strong>expliquer une décision</strong> (justice, médecine, finance), un système avec extensions de Reiter ou ontologie OWL est <em>auditable</em>. Un LLM, beaucoup moins. La hybridation <em>neuro-symbolique</em> (RAG sur ontologies, reasoning grounding) est probablement où ça va.</p>`,
      en: `<h3>The problem with classical logic</h3><p>Classical logic has <strong>monotonicity</strong>: if KB ⊨ φ, then KB ∪ {ψ} ⊨ φ. Adding a fact <em>never removes a conclusion</em>. But we don't reason that way day-to-day. "Tweety is a bird" → "Tweety flies". "Tweety is a penguin" → "Tweety doesn't fly". Adding a fact invalidated a conclusion.</p><h3>Default logic (Reiter, 1980)</h3><p>A <strong>default theory</strong> Δ = (W, D) separates:</p><ul><li>W: certain facts (classical KB)</li><li>D: default rules of the form <code>α : β / γ</code> — "if α proven and β consistent, then by default γ"</li></ul><p>In my RCR lab, I implemented this with <strong>TweetyProject</strong>. Judicial example:</p><pre><code>d1: Accused(x)    :: Innocent(x)    / Innocent(x)
d2: Recidivist(x) :: HeavySentence(x) / HeavySentence(x)
d6: Recidivist(x) :: !Innocent(x)   / !Innocent(x)</code></pre><p>Omar is <code>Accused</code> and <code>Recidivist</code>. d1 concludes <code>Innocent(omar)</code>. d6 concludes <code>!Innocent(omar)</code>. <strong>Conflict</strong> — we get two incompatible <em>extensions</em>. Exactly how justice works: presumption of innocence by default, but recidivism creates a dilemma to arbitrate.</p><blockquote>Non-monotonicity isn't a bug in formal logic, it's a feature: it lets you reason by default while revising beliefs when new facts arrive.</blockquote><h3>Proving non-monotonicity</h3><p>To <strong>prove</strong> a reasoning is non-monotonic, build two theories: the original, then the original + one fact. If a conclusion that was in all extensions disappears, you're done.</p><p>Ali case: Accused + Testimony → 1 extension with <code>Innocent(ali)</code>. Add <code>Recidivist(ali)</code> → d1 vs d6 → 2 extensions. <code>Innocent(ali)</code> no longer in <em>all</em> extensions. Non-monotonicity proved.</p><h3>Description logic (OWL + HermiT)</h3><p>Another approach: model the domain as an <strong>ontology</strong> (TBox + ABox), then query a reasoner.</p><pre><code>// TBox: Rapper ≡ Artist ⊓ ∃practices.Rap ⊓ ∀produces.RapTrack
mgr.addAxiom(onto, f.getOWLEquivalentClassesAxiom(Rapper,
    f.getOWLObjectIntersectionOf(Artist,
        f.getOWLObjectSomeValuesFrom(practices, Rap),
        f.getOWLObjectAllValuesFrom(produces, RapTrack))));</code></pre><p>The <strong>HermiT</strong> reasoner auto-classifies the concept hierarchy and answers instance queries. Subtlety: OWL uses the <strong>Open World Assumption</strong> — absence of info isn't negation. If I don't say "Tif isn't signed to any label", the reasoner can't conclude he's rights-free.</p><h3>Semantic networks and marker propagation</h3><p>A third, more visual approach: represent knowledge as a <strong>graph</strong> with typed arcs (<code>is-a strict</code>, <code>is-a non-strict</code>, <code>strict exception</code>). Fahlman's algorithm (1979) answers queries via <strong>marker propagation</strong>:</p><ol><li>Mark source M1, target M2</li><li>Propagate M1 and M2 backward through is-a arcs</li><li>Intersection M1 ∩ M2 = answer</li></ol><p>Strict exceptions (the penguin that doesn't inherit "flies" from birds) block propagation at the right spot.</p><h3>Why it matters in 2026</h3><p>With the LLM boom, we forget symbolic AI exists. But when you need to <strong>explain a decision</strong> (justice, medicine, finance), a system with Reiter extensions or OWL ontologies is <em>auditable</em>. An LLM, much less so. <em>Neuro-symbolic</em> hybridization (RAG on ontologies, reasoning grounding) is probably where this is heading.</p>`,
    },
  },
  {
    id: "11",
    category: { fr: "Cybersécurité", en: "Cybersecurity" },
    date: "Fév. 2026",
    readTime: "6 min",
    title: {
      fr: "CyberLab : construire 3 modules pédagogiques (phishing, SQLi, IDS) sur un même backend",
      en: "CyberLab: Building 3 Educational Modules (Phishing, SQLi, IDS) on a Single Backend",
    },
    excerpt: {
      fr: "Architecture modulaire Node.js, moteur de règles Snort en JS, et leçons tirées du déploiement sur Render.",
      en: "Modular Node.js architecture, Snort rule engine in JS, and lessons learned deploying on Render.",
    },
    featured: false,
    icon: "/spoof/logo.svg",
    content: {
      fr: `<h3>L'idée</h3><p>CyberLab est une plateforme éducative qui simule trois familles d'attaques de manière sécurisée : <strong>phishing</strong>, <strong>injection SQL</strong>, et <strong>détection d'intrusion</strong>. Pas de victime réelle, pas de cible externe — un bac à sable pour comprendre comment chaque attaque marche, puis comment s'en défendre.</p><h3>L'architecture modulaire</h3><p>Un seul backend Node + Express qui charge ses modules dynamiquement :</p><pre><code>Spoof/
├── server.js        # Express, monte chaque module sur son préfixe
├── modules/
│   ├── phishing/    # routes.js + public/ (clone Google + page sensibilisation)
│   ├── sqli/        # db.js (SQLite in-memory) + routes.js + public/
│   └── ids/         # engine.js (Snort rules) + traffic.js + routes.js</code></pre><p>Chaque module est <strong>autonome</strong> : ses routes, son frontend, sa logique. Le <code>server.js</code> ne fait qu'orchestrer. On peut ajouter un module Keylogger ou Brute Force sans toucher au reste.</p><h3>Module 1 — Phishing</h3><p>Un clone pixel-perfect de la page de login Google. Quand un utilisateur (qui sait que c'est une démo) entre des identifiants, ils sont envoyés à mon email via <strong>Resend</strong> (pas Nodemailer — Render bloque les ports SMTP 465/587, Resend utilise HTTPS). Puis on l'envoie vers une page de sensibilisation qui explique ce qui s'est passé.</p><blockquote>Le but n'est pas de voler quoi que ce soit. C'est de montrer à quel point une page de phishing peut être indiscernable d'une vraie.</blockquote><h3>Module 2 — SQL Injection (CyberShop)</h3><p>Une boutique fictive avec une barre de recherche volontairement vulnérable. Le mode guide propose 5 challenges progressifs :</p><ol><li>Échapper une string et lister tous les produits (<code>' OR 1=1 --</code>)</li><li>Découvrir le schéma via <code>UNION SELECT</code></li><li>Extraire la table <code>users</code></li><li>Bypass de login avec <code>' OR ''='</code></li><li>Récupérer le contenu de <code>secret_data</code></li></ol><p>Côté code : <code>better-sqlite3</code> en mémoire, deux versions de chaque endpoint (vulnérable et sécurisée avec préparation), un comparateur pour voir la différence.</p><h3>Module 3 — IDS Simulator (CyberGuard)</h3><p>Le plus ambitieux. J'ai écrit un <strong>moteur de règles Snort minimal en JavaScript</strong>. Il parse des règles type <code>alert tcp any any -&gt; any 80 (msg:"SQL Injection"; content:"UNION SELECT"; sid:1001;)</code>, génère du trafic simulé (normal + attaques), et matche les paquets en temps réel.</p><p>Le mode guide propose 5 scénarios où l'apprenant écrit ses propres règles pour détecter des attaques spécifiques. Le mode libre est un dashboard temps réel qui affiche les alertes générées par les règles actives.</p><h3>Le déploiement Render</h3><p>Quelques leçons :</p><ul><li><strong>SMTP bloqué</strong> : Render bloque les ports 465/587. Utiliser un provider HTTP (Resend, SendGrid)</li><li><strong>Free plan = sleep</strong> : si l'app n'a pas de trafic, elle s'endort. Premier appel = 30s de wake-up. À mentionner dans la doc utilisateur.</li><li><strong>Variables d'env</strong> : tout secret va dans le dashboard Render, jamais en dur dans le repo. Le <code>.env.example</code> documente sans exposer.</li></ul><h3>Ce qui me reste à faire</h3><p>4 modules planifiés : Keylogger JS, Brute Force, Network Scanner (mini nmap), Password Analyzer (avec API HaveIBeenPwned). Mais l'architecture est déjà prête à les accueillir.</p>`,
      en: `<h3>The idea</h3><p>CyberLab is an educational platform that safely simulates three attack families: <strong>phishing</strong>, <strong>SQL injection</strong>, and <strong>intrusion detection</strong>. No real victims, no external targets — a sandbox to understand how each attack works, then how to defend.</p><h3>Modular architecture</h3><p>One Node + Express backend dynamically loading modules:</p><pre><code>Spoof/
├── server.js        # Express, mounts each module on its prefix
├── modules/
│   ├── phishing/    # routes.js + public/ (Google clone + awareness page)
│   ├── sqli/        # db.js (in-memory SQLite) + routes.js + public/
│   └── ids/         # engine.js (Snort rules) + traffic.js + routes.js</code></pre><p>Each module is <strong>autonomous</strong>: own routes, frontend, logic. <code>server.js</code> just orchestrates. Adding a Keylogger or Brute Force module doesn't touch the rest.</p><h3>Module 1 — Phishing</h3><p>A pixel-perfect Google login clone. When a user (who knows it's a demo) submits credentials, they're emailed via <strong>Resend</strong> (not Nodemailer — Render blocks SMTP ports 465/587, Resend uses HTTPS). Then sent to an awareness page explaining what just happened.</p><blockquote>The goal isn't to steal anything. It's to show how indistinguishable a phishing page can be from the real thing.</blockquote><h3>Module 2 — SQL Injection (CyberShop)</h3><p>A fake shop with a deliberately vulnerable search bar. Guide mode has 5 progressive challenges:</p><ol><li>Escape a string and list all products (<code>' OR 1=1 --</code>)</li><li>Discover the schema via <code>UNION SELECT</code></li><li>Extract the <code>users</code> table</li><li>Login bypass with <code>' OR ''='</code></li><li>Retrieve <code>secret_data</code> contents</li></ol><p>Stack: <code>better-sqlite3</code> in-memory, two versions of each endpoint (vulnerable and prepared), a comparator to see the diff.</p><h3>Module 3 — IDS Simulator (CyberGuard)</h3><p>The most ambitious. I wrote a <strong>minimal Snort rule engine in JavaScript</strong>. It parses rules like <code>alert tcp any any -&gt; any 80 (msg:"SQL Injection"; content:"UNION SELECT"; sid:1001;)</code>, generates simulated traffic (normal + attacks), and matches packets in real time.</p><p>Guide mode has 5 scenarios where the learner writes rules to detect specific attacks. Free mode is a real-time dashboard showing alerts triggered by active rules.</p><h3>Render deployment</h3><p>Some lessons:</p><ul><li><strong>SMTP blocked</strong>: Render blocks ports 465/587. Use an HTTP provider (Resend, SendGrid)</li><li><strong>Free plan = sleep</strong>: no traffic, app sleeps. First call = 30s wake-up. Document this.</li><li><strong>Env vars</strong>: every secret goes in the Render dashboard, never in the repo. <code>.env.example</code> documents without exposing.</li></ul><h3>What's next</h3><p>4 planned modules: JS Keylogger, Brute Force, Network Scanner (mini nmap), Password Analyzer (HaveIBeenPwned API). Architecture already ready for them.</p>`,
    },
  },
  {
    id: "12",
    category: { fr: "Algorithmique", en: "Algorithms" },
    date: "Déc. 2025",
    readTime: "5 min",
    title: {
      fr: "Best, Worst, Random : ce qu'un bench en C m'a appris sur la complexité",
      en: "Best, Worst, Random: What a C Benchmark Taught Me About Complexity",
    },
    excerpt: {
      fr: "Petite expérience contrôlée pour mesurer l'écart entre la théorie asymptotique et la réalité du CPU.",
      en: "A controlled experiment to measure the gap between asymptotic theory and CPU reality.",
    },
    featured: false,
    icon: "📊",
    content: {
      fr: `<h3>Le piège du O(...)</h3><p>On apprend que tri à bulles c'est O(n²), tri par tas c'est O(n log n). En cours, ça suffit. Mais quand on benche pour de vrai sur une machine, les courbes sont rarement aussi propres que celles du tableau. Le TP4 du module Complexité m'a forcé à <strong>mesurer</strong> au lieu de <strong>réciter</strong>.</p><h3>Le banc d'essai</h3><p>Pour chaque algorithme et chaque taille n, on lance 30 runs, on prend la médiane. Côté chrono, sur Windows :</p><pre><code>static double now_seconds(void) {
    static LARGE_INTEGER freq;
    static int init = 0;
    LARGE_INTEGER t;
    if (!init) { QueryPerformanceFrequency(&freq); init = 1; }
    QueryPerformanceCounter(&t);
    return (double)t.QuadPart / (double)freq.QuadPart;
}</code></pre><p>Bien plus précis que <code>clock()</code>. Sur Linux on utiliserait <code>clock_gettime(CLOCK_MONOTONIC, ...)</code>.</p><h3>Les algos comparés</h3><ul><li><strong>Tri à bulles classique</strong> : balayage répété, échange si désordre</li><li><strong>Tri à bulles optimisé</strong> : arrêt anticipé si aucune permutation au passage</li><li><strong>Tri par tas min</strong> : construction du tas par insertions successives, puis <code>supprimer_min</code> répété</li></ul><p>Sur les deux tris à bulles, on benche les <strong>3 cas</strong> : best (tableau déjà trié), worst (trié à l'envers), random. Sur le tri par tas, uniquement random — le best/worst y est peu instructif.</p><h3>Les surprises</h3><p>1. <strong>Bulle classique en best case</strong> : toujours O(n²), parce qu'on balaie même si rien ne change. <strong>Bulle optimisée en best case</strong> : O(n). Un seul passage suffit pour conclure "tout est trié".</p><p>2. <strong>Tri à bulles vs tri par tas sur n = 10000</strong> : bulles ≈ 250 ms, tas ≈ 1.5 ms. Un facteur 150 — exactement ce que la théorie prédit (n²/(n log n) ≈ 750 pour n=10000, modulo les constantes cachées).</p><blockquote>L'asymptotique, c'est toujours vrai à grand n. La question, c'est de connaître à quel n exactement le O(n log n) bat le O(n²) pour les constantes de ton implémentation.</blockquote><p>3. <strong>Échelle logarithmique obligatoire</strong> : tracer bulles + tas sur la même échelle linéaire ne montre rien — la courbe O(n²) écrase visuellement le O(n log n). Avec une échelle log-log, on voit clairement les <strong>deux pentes différentes</strong> (2.0 vs 1.0), ce qui valide visuellement la complexité.</p><h3>Ce que j'ai retenu</h3><p>Trois choses :</p><ul><li>Mesurer avec un timer haute précision — <code>QueryPerformanceCounter</code> ou <code>clock_gettime(CLOCK_MONOTONIC)</code></li><li>Multiples runs + médiane, jamais une seule mesure (variance CPU, cache, OS)</li><li>Échelle log-log pour comparer des complexités différentes — la pente de la droite révèle l'exposant</li></ul><p>Un O(n log n) en théorie peut être <strong>plus lent</strong> qu'un O(n²) en pratique sur de petits n, à cause des constantes (allocations dynamiques, branch mispredictions). C'est pour ça qu'en pratique on combine — quicksort + tri par insertion pour petits sous-tableaux, par exemple.</p>`,
      en: `<h3>The O(...) trap</h3><p>You learn bubble sort is O(n²), heap sort is O(n log n). In class, that's enough. When you benchmark for real on a machine, curves are rarely as clean as the table. Lab 4 of the Complexity module forced me to <strong>measure</strong> instead of <strong>recite</strong>.</p><h3>The benchmark</h3><p>For each algorithm and size n, 30 runs, median. Timing on Windows:</p><pre><code>static double now_seconds(void) {
    static LARGE_INTEGER freq;
    static int init = 0;
    LARGE_INTEGER t;
    if (!init) { QueryPerformanceFrequency(&freq); init = 1; }
    QueryPerformanceCounter(&t);
    return (double)t.QuadPart / (double)freq.QuadPart;
}</code></pre><p>Much more precise than <code>clock()</code>. On Linux, <code>clock_gettime(CLOCK_MONOTONIC, ...)</code>.</p><h3>The algorithms compared</h3><ul><li><strong>Classic bubble sort</strong>: repeated sweeps, swap on disorder</li><li><strong>Optimized bubble sort</strong>: early exit if no swap during a pass</li><li><strong>Min heap sort</strong>: heap built by successive insertions, then repeated <code>extract_min</code></li></ul><p>For both bubble variants, we bench <strong>3 cases</strong>: best (already sorted), worst (reverse sorted), random. For heap sort, only random — best/worst aren't instructive.</p><h3>The surprises</h3><p>1. <strong>Classic bubble in best case</strong>: still O(n²), because we sweep even when nothing changes. <strong>Optimized bubble in best case</strong>: O(n). One pass concludes "everything's sorted".</p><p>2. <strong>Bubble vs heap on n = 10000</strong>: bubble ≈ 250 ms, heap ≈ 1.5 ms. A factor 150 — exactly what theory predicts (n²/(n log n) ≈ 750 for n=10000, modulo hidden constants).</p><blockquote>Asymptotic complexity is always true at large n. The question is knowing at which exact n the O(n log n) beats the O(n²) for your implementation's constants.</blockquote><p>3. <strong>Log scale mandatory</strong>: plotting bubble + heap on linear scale shows nothing — the O(n²) curve visually crushes the O(n log n). On log-log scale, the <strong>two different slopes</strong> (2.0 vs 1.0) appear clearly, visually validating complexity.</p><h3>What I took away</h3><p>Three things:</p><ul><li>Measure with a high-precision timer — <code>QueryPerformanceCounter</code> or <code>clock_gettime(CLOCK_MONOTONIC)</code></li><li>Multiple runs + median, never one measurement (CPU variance, cache, OS)</li><li>Log-log scale to compare different complexities — the line's slope reveals the exponent</li></ul><p>An O(n log n) in theory can be <strong>slower</strong> than O(n²) in practice on small n, due to constants (dynamic allocations, branch mispredictions). That's why production uses hybrids — quicksort + insertion sort for small subarrays, for example.</p>`,
    },
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

export interface Certification {
  id: string;
  icon: string;
  badge?: string;
  name: { fr: string; en: string };
  org: string;
  date: string;
  credlyId?: string;
  status: "completed" | "in-progress";
}

export const certifications: Certification[] = [
  {
    id: "google-cybersecurity",
    icon: "CY",
    badge: "/badges/google-cybersecurity.png",
    name: { fr: "Cybersecurity Professional Certificate", en: "Cybersecurity Professional Certificate" },
    org: "Google / Coursera",
    date: "2025",
    credlyId: "4ab4a53f-6f77-4b25-8e4b-c62cd68aec4a",
    status: "completed",
  },
  {
    id: "google-data-analytics",
    icon: "DA",
    badge: "/badges/google-data-analytics.png",
    name: { fr: "Data Analytics Professional Certificate", en: "Data Analytics Professional Certificate" },
    org: "Google / Coursera",
    date: "2024",
    credlyId: "077a70cd-66a7-4f66-a7eb-c9c0cf825052",
    status: "completed",
  },
  {
    id: "nasa-open-science-101",
    icon: "NS",
    badge: "/badges/nasa-open-science-101.png",
    name: { fr: "Open Science 101", en: "Open Science 101" },
    org: "NASA",
    date: "2025",
    credlyId: "16d56855-1c29-4e06-9298-d59c32e8863a",
    status: "completed",
  },
  {
    id: "nasa-open-science-essentials",
    icon: "NS",
    badge: "/badges/nasa-open-science-essentials.png",
    name: { fr: "Open Science Essentials", en: "Open Science Essentials" },
    org: "NASA",
    date: "2025",
    credlyId: "efe62286-6dd8-4b65-8e3f-7298817fd53b",
    status: "completed",
  },
  {
    id: "google-ai-essentials",
    icon: "AI",
    name: { fr: "AI Essentials", en: "AI Essentials" },
    org: "Google / Coursera",
    date: "2024",
    status: "completed",
  },
  {
    id: "google-ux-design",
    icon: "UX",
    name: { fr: "Foundations of UX Design", en: "Foundations of UX Design" },
    org: "Google / Coursera",
    date: "2024",
    status: "completed",
  },
  {
    id: "efset",
    icon: "EN",
    name: { fr: "English C2 — 78/100", en: "English C2 — 78/100" },
    org: "EF SET",
    date: "2024",
    status: "completed",
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────

export interface Education {
  institution: string;
  degree: { fr: string; en: string };
  period: string;
  details: { fr: string; en: string };
  grade?: string;
}

export const educations: Education[] = [
  {
    institution: "USTHB – Alger",
    degree: {
      fr: "Master 1 – Systèmes Informatiques Intelligents",
      en: "Master 1 – Intelligent Computer Systems",
    },
    period: "2025 – Présent",
    details: {
      fr: "Machine learning, deep learning, vision par ordinateur, optimisation, traitement du langage naturel.",
      en: "Machine learning, deep learning, computer vision, optimisation, natural language processing.",
    },
    grade: "10,88/20 (S1)",
  },
  {
    institution: "USTHB – Alger",
    degree: { fr: "Licence Informatique", en: "Bachelor's in Computer Science" },
    period: "2022 – 2025",
    details: {
      fr: "Algorithmique, bases de données, réseaux, systèmes, compilation, IA. Moyenne Licence : 11,94/20 — Classement 95/402.",
      en: "Algorithms, databases, networks, systems, compilation, AI. Bachelor's average: 11.94/20 — Ranked 95/402.",
    },
    grade: "11,94/20 – 95/402",
  },
  {
    institution: "Académie Aix-Marseille",
    degree: { fr: "Baccalauréat Général – Spé. Mathématiques & Physique-Chimie", en: "French Baccalaureate – Mathematics & Physics-Chemistry" },
    period: "2022",
    details: {
      fr: "Mention Très Bien. Mathématiques 19/20, Physique-Chimie 20/20.",
      en: "High Distinction. Mathematics 19/20, Physics-Chemistry 20/20.",
    },
    grade: "17,02/20 – Mention TB",
  },
];
