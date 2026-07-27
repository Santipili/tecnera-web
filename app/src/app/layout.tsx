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
  title: "Tecnera",
  description: "Tecnera - Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${michroma.variable} antialiased bg-light`}>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <NeuralNetworkBackground className="h-full w-full" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
