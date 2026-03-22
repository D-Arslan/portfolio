export type Lang = "fr" | "en";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────

export const translations = {
  nav: {
    about:      { fr: "À propos",    en: "About" },
    projects:   { fr: "Projets",     en: "Projects" },
    skills:     { fr: "Compétences", en: "Skills" },
    experience: { fr: "Expériences", en: "Experience" },
    education:  { fr: "Formation",   en: "Education" },
    contact:    { fr: "Contact",     en: "Contact" },
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
    title:      { fr: "Projets",             en: "Projects" },
    filters: {
      all:      { fr: "Tous",               en: "All" },
      fullstack:{ fr: "Full Stack",         en: "Full Stack" },
      aiml:     { fr: "IA / ML",            en: "AI / ML" },
      mobile:   { fr: "Mobile",             en: "Mobile" },
      cyber:    { fr: "Cybersécurité",      en: "Cybersecurity" },
    },
    demo:   { fr: "Démo",   en: "Demo" },
    code:   { fr: "Code",   en: "Code" },
    featured: { fr: "À la une", en: "Featured" },
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
  },
  experience: {
    title:    { fr: "Expériences",    en: "Experience" },
    present:  { fr: "Présent",        en: "Present" },
  },
  education: {
    title: { fr: "Formation", en: "Education" },
  },
  contact: {
    title:       { fr: "Contact",                             en: "Contact" },
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

export type Category = "fullstack" | "aiml" | "mobile" | "cyber";

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
  accent: string;
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
    categories: ["fullstack", "mobile"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2025–présent",
    accent: "#3b82f6",
  },
  {
    id: "coiflow",
    title: "Coiflow",
    description: {
      fr: "SaaS de gestion pour barbershops : réservations en ligne, gestion des clients, analytics de fréquentation. Projet solo, full stack.",
      en: "Management SaaS for barbershops: online bookings, client management, attendance analytics. Solo project, full stack.",
    },
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Spring Boot", "Java 17"],
    categories: ["fullstack"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2026–présent",
    accent: "#8b5cf6",
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
    accent: "#10b981",
  },
  {
    id: "cyberlab",
    title: "CyberLab",
    description: {
      fr: "Plateforme éducative de cybersécurité : simulation d'attaques phishing, injection SQL, détection d'intrusion avec Snort. Interface pédagogique interactive.",
      en: "Educational cybersecurity platform: phishing attack simulation, SQL injection, intrusion detection with Snort. Interactive learning interface.",
    },
    tech: ["Next.js", "React", "TypeScript", "Snort", "Python"],
    categories: ["cyber", "fullstack"],
    github: "https://github.com/D-Arslan",
    featured: true,
    year: "2026",
    accent: "#ef4444",
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
    accent: "#f59e0b",
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
  },
  {
    id: "id-recognition",
    title: "Reconnaissance pièces d'identité",
    description: {
      fr: "Modèle de reconnaissance de pièces d'identité avec TensorFlow. 94 % de précision. Intégré dans un système de gestion des visiteurs déployé en entreprise (SARL SPINTECHS).",
      en: "Identity document recognition model with TensorFlow. 94% accuracy. Integrated into a visitor management system deployed in production (SARL SPINTECHS).",
    },
    tech: ["TensorFlow", "Python", "Spring Boot", "PostgreSQL"],
    categories: ["aiml"],
    github: "https://github.com/D-Arslan",
    featured: false,
    year: "2024–2025",
    accent: "#10b981",
  },
  {
    id: "budgy",
    title: "BUDGY",
    description: {
      fr: "Application mobile de gestion des dépenses personnelles. Publié sur le Google Play Store. Catégorisation automatique, visualisation des tendances, objectifs d'épargne.",
      en: "Personal expense tracking mobile app. Published on the Google Play Store. Automatic categorisation, trend visualisation, savings goals.",
    },
    tech: ["Flutter", "Dart", "Firebase"],
    categories: ["mobile"],
    github: "https://github.com/D-Arslan",
    featured: false,
    year: "2025–2026",
    accent: "#f59e0b",
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
    accent: "#6366f1",
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
    accent: "#ec4899",
  },
  {
    id: "love101",
    title: "Love101",
    description: {
      fr: "Plateforme de cartes animées pour la Saint-Valentin. Cartes personnalisées avec animations CSS, partage via lien unique, stockage Supabase.",
      en: "Animated Valentine's Day card platform. Personalized cards with CSS animations, sharing via unique link, Supabase storage.",
    },
    tech: ["Next.js 15", "React 19", "Supabase", "TypeScript"],
    categories: ["fullstack"],
    featured: false,
    year: "2026",
    accent: "#f43f5e",
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
    accent: "#ef4444",
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
