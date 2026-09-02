import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Daniel Medina Sánchez | SAP Implementation · Generative AI · Technology Delivery",
  description:
    "Consultor SAP certificado en S/4HANA Cloud Public Edition y SAP Generative AI, con 15+ años de liderazgo, Project Management, 560+ personas, 4 países y P&L >12M€.",
  applicationName: "Daniel Medina Portfolio",
  authors: [{ name: siteConfig.name }],
  keywords: [
    "Project Manager",
    "SAP Consultant",
    "SAP S/4HANA Cloud Public Edition",
    "SAP Generative AI Developer",
    "SAP Business AI",
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
    title: "Daniel Medina Sánchez | SAP Implementation · Generative AI · Technology Delivery",
    description:
      "Consultor SAP certificado en S/4HANA Cloud Public Edition y SAP Generative AI, con 15+ años de liderazgo, Project Management, 560+ personas, 4 países y P&L >12M€.",
    siteName: "Daniel Medina Portfolio",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Medina Sánchez | SAP Implementation · Generative AI · Technology Delivery",
    description:
      "Consultor SAP certificado en S/4HANA Cloud Public Edition y SAP Generative AI, con 15+ años de liderazgo, Project Management, 560+ personas, 4 países y P&L >12M€."
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
