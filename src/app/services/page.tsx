import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Prestations & Freelance – Arslan DIF | Développement web, mobile & IA",
  description:
    "Développeur full stack freelance : site vitrine, application web / SaaS, application mobile et solutions IA sur mesure. Devis gratuit, réponse sous 48h.",
  alternates: {
    canonical: "https://difarslan.com/services",
  },
  openGraph: {
    title: "Prestations & Freelance – Arslan DIF",
    description:
      "Site vitrine, application web / SaaS, application mobile, solutions IA. Devis gratuit, réponse sous 48h.",
    url: "https://difarslan.com/services",
    siteName: "Arslan DIF",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesContent />
      <Footer />
    </>
  );
}
