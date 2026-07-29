import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Michroma } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading-src",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tecnera | Innovacion en soluciones digitales",
  description: "Creamos soluciones digitales que conectan personas, procesos e información.",
  applicationName: "Tecnera",
  keywords: [
    "desarrollo de software",
    "software para empresas",
    "aplicaciones web",
    "sistemas de gestión",
    "CRM",
    "ERP",
    "Tecnera",
  ],
  authors: [{ name: "Tecnera" }],
  creator: "Tecnera",
  publisher: "Tecnera",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Tecnera",
    title: "Tecnera | Innovacion en soluciones digitales",
    description:
      "Creamos soluciones digitales que conectan personas, procesos e información.",
    images: [
      {
        url: "/images/products/TECNERA/imagotipo-tecnera-color.png",
        width: 1200,
        height: 630,
        alt: "Tecnera — Innovacion en soluciones digitales",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${michroma.variable} antialiased bg-light`}>
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-65">
          <NeuralNetworkBackground className="h-full w-full" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
