export const siteConfig = {
  name: "Daniel Medina Sánchez",
  role: "Project Manager · Technology Delivery · Applied AI",
  repoUrl: "https://github.com/danielmedina-lab/daniel-medina-portfolio",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://daniel-medina-portfolio.vercel.app",
  contactEmail: "Danielmedinasanchez86@gmail.com",
  linkedinUrl: "https://linkedin.com/in/danielmedina-ai"
};

export const cvFiles = [
  {
    id: "es",
    href: "/cv/daniel-medina-sanchez-cv-es.pdf"
  },
  {
    id: "en",
    href: "/cv/daniel-medina-sanchez-cv-en.pdf"
  }
] as const;

export const cvRoutes = {
  es: cvFiles[0].href,
  en: cvFiles[1].href
};
