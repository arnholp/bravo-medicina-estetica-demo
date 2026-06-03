import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bravo Medicina Estética | Clínica estética en Juliaca",
  description:
    "Tratamientos estéticos faciales y corporales con evaluación personalizada en Juliaca.",
  metadataBase: new URL("https://bravo-demo.local"),
  openGraph: {
    title: "Bravo Medicina Estética | Clínica estética en Juliaca",
    description:
      "Tratamientos estéticos faciales y corporales con evaluación personalizada en Juliaca.",
    type: "website",
    locale: "es_PE"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
