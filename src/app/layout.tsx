import type { Metadata } from "next";
import { Roboto, Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Brewcode - Aplikacje dla Branży Piwowarskiej",
  description: "Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia. Odkryj nasze narzędzia, które łączą tradycję z nowoczesną technologią.",
  keywords: "aplikacje piwo, browar rzemieślniczy, warzenie piwa, brewmaster, pubtracker, beercraft, technologia piwo, aplikacje browar",
  authors: [{ name: "Brewcode Team" }],
  creator: "Brewcode",
  publisher: "Brewcode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brewcode.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Brewcode - Aplikacje dla Branży Piwowarskiej",
    description: "Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia.",
    url: 'https://brewcode.pl',
    siteName: 'Brewcode',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brewcode - Aplikacje dla Branży Piwowarskiej',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brewcode - Aplikacje dla Branży Piwowarskiej",
    description: "Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia.",
    images: ['/og-image.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${roboto.variable} ${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
          <Preloader />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
