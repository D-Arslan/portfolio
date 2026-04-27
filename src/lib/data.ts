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

export type Category = "fullstack" | "aiml" | "mobile" | "cyber" | "production";

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
    title: "Deep Learning Sentinel-2",
    description: {
      fr: "Classification de cultures agricoles par imagerie satellite. Données Sentinel-2 brutes multi-temporelles (13 bandes spectrales), architecture CNN-Transformer sous PyTorch. Projet de groupe M1.",
      en: "Agricultural crop classification from satellite imagery. Raw multi-temporal Sentinel-2 data (13 spectral bands), CNN-Transformer architecture with PyTorch. M1 group project.",
    },
    tech: ["PyTorch", "CNN-Transformer", "Python", "Sentinel-2", "NumPy"],
    categories: ["aiml"],
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
    categories: ["cyber"],
    featured: false,
    year: "2024–2025",
    accent: "#ff4444",     // rouge Spoof
    accentBg: "#1a0000",
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
