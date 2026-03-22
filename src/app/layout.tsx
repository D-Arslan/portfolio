import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Arslan DIF – Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Arslan DIF, full stack developer and AI engineer. Founder of FIELDZ and Coiflow. Looking for an apprenticeship in Paris from September 2026.",
  keywords: ["developer", "full stack", "AI", "machine learning", "Paris", "alternance"],
  openGraph: {
    title: "Arslan DIF – Full Stack Developer & AI Engineer",
    description: "Portfolio of Arslan DIF",
    url: "https://difarslan.com",
    siteName: "Arslan DIF",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
