import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  Cpu,
  GraduationCap,
  Layers3
} from "lucide-react";

import { RecruiterConcierge } from "@/components/recruiter-concierge";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioDictionary } from "@/content/portfolio";
import { siteConfig } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";

type LocalizedSectionProps = {
  dictionary: PortfolioDictionary;
  locale: Locale;
};

export function ValueAreasSection({ dictionary }: LocalizedSectionProps) {
  const icons = [BriefcaseBusiness, Layers3, Cpu];
  const content = dictionary.valueAreas;

  return (
    <section className="bg-mist py-20" id="work">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.items.map((area, index) => {
            const Icon = icons[index];
            return (
              <article className="rounded-lg border border-line bg-white p-6 shadow-card" key={area.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-mint text-teal">
                  <Icon aria-hidden="true" size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{area.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span className="rounded bg-mist px-2.5 py-1 text-xs font-medium text-slate" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection({ dictionary, locale }: LocalizedSectionProps) {
  const content = dictionary.proof;

  return (
    <section className="bg-paper py-20" id="experience">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 rounded-lg border border-line bg-white p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{content.careerLabel}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.careerSteps.map((step, index) => (
              <div className="relative rounded-md bg-mist p-4" key={step.title}>
                <p className="text-xs font-bold text-teal">{step.period}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate">{step.detail}</p>
                {index < content.careerSteps.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-teal lg:block" size={18} />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <article className="mt-12 overflow-hidden rounded-xl border border-line bg-white shadow-soft" id="ayesa">
          <div className="border-b border-line bg-ink p-6 text-white sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.ayesa.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{content.ayesa.title}</h3>
              </div>
              <p className="shrink-0 text-sm font-semibold text-white/65">{content.ayesa.period}</p>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <ol className="relative ml-2 border-l-2 border-teal/25 sm:ml-4">
              {content.ayesa.items.map((item, index) => (
                <li className="relative pb-8 pl-7 last:pb-0 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6 sm:pl-9" key={`${item.period}-${item.client}`}>
                  <span
                    className={[
                      "absolute -left-[0.56rem] top-1 h-4 w-4 rounded-full border-4 border-white",
                      index === content.ayesa.items.length - 1 ? "bg-teal ring-4 ring-teal/15" : "bg-white ring-2 ring-teal"
                    ].join(" ")}
                  />
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-teal">{item.period}</p>
                  <div className="mt-2 sm:mt-0">
                    <h4 className="text-lg font-bold text-ink">{item.client}</h4>
                    <p className="mt-1 text-sm font-semibold text-ink">{item.role}</p>
                    <p className="mt-2 text-sm leading-6 text-slate">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-line pt-6">
              <p className="max-w-4xl text-base leading-7 text-slate">{content.ayesa.supporting}</p>
              <Link
                className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-carbon"
                href={`/${locale}/case/${content.ayesa.slug}`}
              >
                {content.ayesa.cta}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function FeaturedCasesSection({ dictionary, locale }: LocalizedSectionProps) {
  const content = dictionary.konecta;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{content.title}</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {content.metrics.map((metric) => (
            <div className="rounded-lg bg-ink p-5 text-white shadow-card sm:p-6" key={metric.label}>
              <p className="text-3xl font-black tracking-tight sm:text-4xl">{metric.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/55">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 rounded-lg border border-line bg-paper p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-base leading-8 text-slate">{content.body}</p>
            <Link
              className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-carbon"
              href={`/${locale}/case/${content.slug}`}
            >
              {content.cta}
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {content.details.map((detail) => (
              <div className="rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink" key={detail}>
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LabSection({ dictionary, locale }: LocalizedSectionProps) {
  const content = dictionary.lab;

  return (
    <section className="bg-ink py-20 text-white" id="lab">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 whitespace-pre-line text-base leading-7 text-white/70">
            {content.body}
          </p>
        </div>

        <p className="mt-10 text-sm font-bold text-white">{content.projectsTitle}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {content.projects.map((project) => (
            <a
              className="focus-ring group rounded-lg border border-white/10 bg-white/[0.06] p-5 transition hover:border-teal/70 hover:bg-white/[0.09]"
              href={project.href}
              key={project.title}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-teal">{project.status}</p>
                </div>
                <ArrowRight aria-hidden="true" className="mt-1 shrink-0 text-white/35 transition group-hover:text-teal" size={17} />
              </div>
              <p className="mt-4 text-sm leading-6 text-white/65">{project.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="rounded bg-white/10 px-2.5 py-1 text-xs font-medium text-white/65" key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <Link
          className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-4 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
          href={`/${locale}/case/${content.slug}`}
        >
          {content.cta}
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </section>
  );
}

export function ConciergeSection({ dictionary }: LocalizedSectionProps) {
  return (
    <section className="bg-paper py-20" id="concierge">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={dictionary.conciergeSection.eyebrow}
            title={dictionary.conciergeSection.title}
            body={dictionary.conciergeSection.body}
          />
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold text-teal">
            <Bot aria-hidden="true" size={14} />
            {dictionary.conciergeSection.badge}
          </div>
        </div>
        <RecruiterConcierge content={dictionary.recruiter} />
      </div>
    </section>
  );
}

export function CredentialsSection({ dictionary }: LocalizedSectionProps) {
  const content = dictionary.credentialsSection;

  return (
    <section className="border-y border-[#0A6ED1]/15 bg-[linear-gradient(180deg,#F7FBFF_0%,#FFFFFF_100%)] py-20" id="credentials">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-[#0A6ED1]/20 bg-[#EEF6FD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0A6ED1]">
          <BadgeCheck aria-hidden="true" size={16} />
          {content.badge}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {content.items.map((item, index) => (
            <article
              className={[
                "rounded-xl border p-6 shadow-card",
                index < 2
                  ? "lg:col-span-3 border-[#0A6ED1]/35 bg-[#EEF6FD]"
                  : "lg:col-span-2 border-line bg-white"
              ].join(" ")}
              key={item.title}
            >
              {index < 2 ? (
                <div className="flex items-center justify-between gap-4">
                  <BadgeCheck aria-hidden="true" className="text-[#0A6ED1]" size={28} />
                  <span className="rounded-full bg-[#0A6ED1] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                    {content.assessmentBadge}
                  </span>
                </div>
              ) : (
                <GraduationCap aria-hidden="true" className="text-teal" size={23} />
              )}
              <h3 className={["mt-4 font-bold text-ink", index < 2 ? "text-xl" : "text-lg"].join(" ")}>{item.title}</h3>
              <p className={["mt-1 text-sm font-semibold", index < 2 ? "text-[#0A6ED1]" : "text-teal"].join(" ")}>{item.subtitle}</p>
              <p className="mt-3 text-sm leading-6 text-slate">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnicalStorySection({ dictionary }: LocalizedSectionProps) {
  const content = dictionary.technicalStory;
  const icons = [Building2, BriefcaseBusiness, Layers3, Cpu, Bot];

  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.capabilities.map((capability, index) => {
            const Icon = icons[index] ?? Cpu;

            return (
              <article className="rounded-lg border border-line bg-white p-5 shadow-card" key={capability.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-mint text-teal">
                  <Icon aria-hidden="true" size={19} />
                </div>
                <h3 className="mt-4 text-sm font-black tracking-[0.08em] text-ink">{capability.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {capability.items.map((item) => (
                    <li className="rounded bg-mist px-2.5 py-1.5 text-xs font-medium text-slate" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CVHubSection({ dictionary }: LocalizedSectionProps) {
  return (
    <section className="bg-paper py-20" id="cv">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dictionary.cvHub.eyebrow}
          title={dictionary.cvHub.title}
          body={dictionary.cvHub.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {dictionary.cvHub.files.map((cvFile) => (
            <a
              className="focus-ring rounded-lg border border-line bg-white p-6 shadow-card transition hover:border-teal hover:shadow-soft"
              download
              href={cvFile.href}
              key={cvFile.href}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{cvFile.language}</p>
              <h3 className="mt-4 text-xl font-bold text-ink">{cvFile.shortLabel}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">{cvFile.audience}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                {dictionary.cvHub.downloadPdf}
                <ArrowRight aria-hidden="true" size={15} />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ dictionary, locale }: LocalizedSectionProps) {
  return (
    <section className="bg-ink py-20 text-white" id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{dictionary.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.contact.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            {dictionary.contact.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-teal px-5 text-sm font-semibold text-white transition hover:bg-[#14665c]"
              href={`mailto:${siteConfig.contactEmail}?subject=Portfolio%20contact%20-%20Daniel%20Medina%20Sanchez`}
            >
              {dictionary.contact.requestInterview}
            </a>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
              href={siteConfig.linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              {dictionary.contact.linkedin}
            </a>
            <Link
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
              href={`/${locale}/cv`}
            >
              {dictionary.contact.cvHub}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
