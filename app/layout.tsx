import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./components/ScrollTopButton";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import { LanguageProvider } from "./utils/LanguageContext";

const roboto = Roboto ({
   subsets: ["latin"],
   weight: ['400']
});

export const metadata: Metadata = {
  title: "Yanis LARTIGUE | Développeur Web Full Stack",
  description: "Portfolio de Yanis LARTIGUE, développeur web full stack passionné par les nouvelles technologies. Découvrez mes projets et compétences en développement web.",
  keywords: [
    "Yanis LARTIGUE",
    "développeur web",
    "full stack",
    "portfolio",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "développeur frontend",
    "développeur backend",
    "ESN 81",
    "3IL Limoges"
  ].join(", "),
  authors: [{ name: "Yanis LARTIGUE", url: "https://portfolio-opal-five-44.vercel.app/" }],
  creator: "Yanis LARTIGUE",
  publisher: "Yanis LARTIGUE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-opal-five-44.vercel.app/",
    title: "Yanis LARTIGUE | Développeur Web Full Stack",
    description: "Portfolio de Yanis LARTIGUE, développeur web full stack passionné par les nouvelles technologies. Découvrez mes projets et compétences en développement web.",
    siteName: "Portfolio Yanis LARTIGUE",
    images: [
      {
        url: "/avatar/photo_de_profil.jpg",
        width: 1200,
        height: 630,
        alt: "Yanis LARTIGUE - Photo de profil",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanis LARTIGUE | Développeur Web Full Stack",
    description: "Portfolio de Yanis LARTIGUE, développeur web full stack passionné par les nouvelles technologies.",
    images: ["/avatar/photo_de_profil.jpg"],
    creator: "@YanisLartigue",
  },
  alternates: {
    canonical: "https://portfolio-opal-five-44.vercel.app/",
    languages: {
      'fr': 'https://portfolio-opal-five-44.vercel.app/fr',
      'en': 'https://portfolio-opal-five-44.vercel.app/en',
    },
  },
  verification: {
    google: "PKXUYIXdThH7ZOYxOp2EpvsV_eG9B2GdbYARuZeTkKE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="PKXUYIXdThH7ZOYxOp2EpvsV_eG9B2GdbYARuZeTkKE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yanis LARTIGUE",
              "jobTitle": "Développeur Web Full Stack",
              "url": "https://portfolio-opal-five-44.vercel.app/",
              "image": "https://portfolio-opal-five-44.vercel.app/avatar/photo_de_profil.jpg",
              "description": "Développeur web full stack passionné par les nouvelles technologies",
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "École Supérieure du Numérique du Tarn"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "3IL Limoges"
                }
              ],
              "knowsAbout": ["React", "Next.js", "JavaScript", "TypeScript", "Web Development"]
            })
          }}
        />
      </head>
      <body className={roboto.className}>
        <LanguageProvider>
          <div className="relative">
            <ThemeToggle />
            <LanguageToggle />
            {children}
            <BackToTopButton/>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
