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
    "Portfolio d'Arslan DIF, développeur Full Stack et ingénieur IA. Fondateur de FIELDZ et Coiflow. Recherche une alternance à Paris à partir de septembre 2026.",
  keywords: [
    "développeur full stack", "ingénieur IA", "machine learning", "deep learning",
    "React", "Spring Boot", "PyTorch", "alternance Paris", "portfolio",
    "Arslan DIF", "FIELDZ", "Coiflow"
  ],
  authors: [{ name: "Arslan DIF", url: "https://difarslan.com" }],
  creator: "Arslan DIF",
  metadataBase: new URL("https://difarslan.com"),
  alternates: {
    canonical: "https://difarslan.com",
  },
  openGraph: {
    title: "Arslan DIF – Développeur Full Stack & Ingénieur IA",
    description:
      "Portfolio d'Arslan DIF, développeur Full Stack et ingénieur IA. Fondateur de FIELDZ et Coiflow. Recherche une alternance à Paris à partir de septembre 2026.",
    url: "https://difarslan.com",
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
      "Portfolio d'Arslan DIF, développeur Full Stack et ingénieur IA. Alternance Paris sept. 2026.",
    images: ["/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
