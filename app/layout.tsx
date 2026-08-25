import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Daniel Medina Sánchez | Project Manager · Technology Delivery · Applied AI",
  description:
    "Project Manager con 15+ años de liderazgo, 560+ personas, 4 países y P&L >12M€. Ayesa, sector público, ITSM, Digital Workplace y portfolio técnico de IA aplicada.",
  applicationName: "Daniel Medina Portfolio",
  authors: [{ name: siteConfig.name }],
  keywords: [
    "Project Manager",
    "Technology Delivery",
    "Applied AI",
    "Digital Workplace",
    "Human-in-the-Loop",
    "ITSM",
    "CS50AI",
    "Public Sector Delivery"
  ],
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: "Daniel Medina Sánchez | Project Manager · Technology Delivery · Applied AI",
    description:
      "Project Manager con 15+ años de liderazgo, 560+ personas, 4 países y P&L >12M€. Ayesa, sector público, ITSM, Digital Workplace y portfolio técnico de IA aplicada.",
    siteName: "Daniel Medina Portfolio",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Medina Sánchez | Project Manager · Technology Delivery · Applied AI",
    description:
      "Project Manager con 15+ años de liderazgo, 560+ personas, 4 países y P&L >12M€. Ayesa, sector público, ITSM, Digital Workplace y portfolio técnico de IA aplicada."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
