import type { Metadata } from "next";
import { Roboto, Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import Preloader from "../components/Preloader";

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
  title: "Brewcode - Innowacyjne Rozwiązania Technologiczne",
  description: "Tworzymy zaawansowane aplikacje, które przekształcają pomysły w rzeczywistość. Odkryj nasze trzy flagowe produkty i zobacz, jak technologia może zmienić Twój biznes.",
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
        <Preloader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
