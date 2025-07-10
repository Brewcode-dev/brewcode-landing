import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import Preloader from "../components/Preloader";

const roboto = Roboto({
  weight: ["400", "700"], // or any weights you need
  subsets: ["latin"],
  variable: "--font-roboto",
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
        className={`${roboto.variable} antialiased`}
      >
        <Preloader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
