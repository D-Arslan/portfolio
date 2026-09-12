import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arslan DIF – Développeur Full Stack & Ingénieur IA",
  description:
    "Portfolio d'Arslan DIF, développeur Full Stack et ingénieur IA. Étudiant en M2 Sciences des Données à l'UPEC (Paris). Recherche un stage de fin d'études data/ML/dev à Paris, février–août 2027.",
  keywords: [
    "développeur full stack", "ingénieur IA", "machine learning", "deep learning",
    "React", "Spring Boot", "PyTorch", "MLOps", "stage data Paris", "stage machine learning", "portfolio",
    "Arslan DIF", "FIELDZ", "Coiflow"
  ],
  authors: [{ name: "Arslan DIF", url: "https://arslandif.com" }],
  creator: "Arslan DIF",
  metadataBase: new URL("https://arslandif.com"),
  alternates: {
    canonical: "https://arslandif.com",
  },
  openGraph: {
    title: "Arslan DIF – Développeur Full Stack & Ingénieur IA",
    description:
      "Portfolio d'Arslan DIF, développeur Full Stack et ingénieur IA. Étudiant en M2 Sciences des Données à l'UPEC (Paris). Recherche un stage de fin d'études data/ML/dev à Paris, février–août 2027.",
    url: "https://arslandif.com",
    siteName: "Arslan DIF",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/photo.png",
        width: 1200,
        height: 630,
        alt: "Arslan DIF – Développeur Full Stack & Ingénieur IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan DIF – Développeur Full Stack & Ingénieur IA",
    description:
      "Portfolio d'Arslan DIF, développeur Full Stack et ingénieur IA. Stage M2 data/ML · Paris · fév. 2027.",
    images: ["/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arslan DIF",
  url: "https://arslandif.com",
  image: "https://arslandif.com/photo.png",
  jobTitle: "Développeur Full Stack & Ingénieur IA",
  email: "mailto:difarslan@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Université Paris-Est Créteil (UPEC)" },
    { "@type": "CollegeOrUniversity", name: "USTHB" },
  ],
  sameAs: [
    "https://github.com/D-Arslan",
    "https://www.linkedin.com/in/arslan-dif-740077287/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
