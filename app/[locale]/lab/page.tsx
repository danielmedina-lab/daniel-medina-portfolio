import type { Metadata } from "next";

import { CredentialsSection, LabSection, TechnicalStorySection } from "@/components/home-sections";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type LabPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LabPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.pages.lab.title,
    description: dictionary.pages.lab.description
  };
}

export default async function LabPage({ params }: LabPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return (
    <>
      <LabSection dictionary={dictionary} locale={locale} />
      <TechnicalStorySection dictionary={dictionary} locale={locale} />
      <CredentialsSection dictionary={dictionary} locale={locale} />
    </>
  );
}
