import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { flyerTreatmentSections } from "@/constants/data";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tratamientos | Bravo Medicina Estética",
  description:
    "Catálogo de cirugías estéticas, tratamientos faciales y tratamientos corporales con evaluación personalizada en Juliaca."
};

function treatmentMessage(name: string) {
  return `Hola, quiero recibir orientación sobre ${name} en Bravo Medicina Estética.`;
}

export default function TreatmentsPage() {
  const totalTreatments = flyerTreatmentSections.reduce((total, section) => total + section.treatments.length, 0);

  return (
    <>
      <section className="relative overflow-hidden bg-coffee py-16 text-cream sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(201,168,106,0.24),transparent_40%)]" />
        <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-gold">Catálogo Bravo</p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">
                Tratamientos estéticos organizados por objetivo
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-cream/72 sm:text-lg">
                Integramos la información del flyer en una guía clara: cirugías estéticas, faciales y corporales.
                Cada opción requiere evaluación personalizada y orientación profesional antes de iniciar.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {flyerTreatmentSections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="group rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur transition hover:border-gold/60 hover:bg-white/12"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{section.eyebrow}</p>
                    <p className="mt-2 font-display text-2xl text-white">{section.treatments.length}</p>
                    <p className="mt-1 text-sm text-cream/65">opciones</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-gold/25 bg-white/8 p-4 shadow-glow backdrop-blur">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/tratamientos-hero.svg"
                  alt="Flyer de tratamientos Bravo Medicina Estética"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-linen bg-cream py-6">
        <div className="container-shell grid gap-4 text-sm text-coffee/70 md:grid-cols-3">
          <div className="flex gap-3 rounded-3xl bg-white p-5 shadow-soft">
            <ShieldCheck className="h-5 w-5 flex-none text-olive" />
            <p>Información orientativa. No reemplaza una evaluación profesional.</p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-white p-5 shadow-soft">
            <ClipboardCheck className="h-5 w-5 flex-none text-olive" />
            <p>{totalTreatments} tratamientos y productos organizados para consulta rápida.</p>
          </div>
          <div className="flex gap-3 rounded-3xl bg-white p-5 shadow-soft">
            <MessageCircle className="h-5 w-5 flex-none text-olive" />
            <p>Cada tarjeta permite consultar directamente por WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        {flyerTreatmentSections.map((section, sectionIndex) => (
          <div
            key={section.id}
            id={section.id}
            className={`section-pad ${sectionIndex % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <div className="container-shell">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <Reveal>
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-soft">
                    <div className="relative aspect-[14/9]">
                      <Image
                        src={section.image}
                        alt={`Imagen de ${section.title}`}
                        fill
                        sizes="(min-width: 1024px) 42vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div>
                    <SectionHeading
                      eyebrow={section.eyebrow}
                      title={section.title}
                      description={section.description}
                    />
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-3xl border border-linen bg-white p-5">
                        <p className="text-3xl font-bold text-coffee">{section.treatments.length}</p>
                        <p className="mt-1 text-sm text-coffee/60">opciones listadas</p>
                      </div>
                      <div className="rounded-3xl border border-linen bg-white p-5">
                        <Sparkles className="h-7 w-7 text-gold" />
                        <p className="mt-2 text-sm font-semibold text-coffee">Orientación personalizada</p>
                      </div>
                      <div className="rounded-3xl border border-linen bg-white p-5">
                        <CheckCircle2 className="h-7 w-7 text-olive" />
                        <p className="mt-2 text-sm font-semibold text-coffee">Cuidados generales</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.treatments.map((treatment, index) => (
                  <Reveal key={treatment.name} delay={(index % 6) * 0.035}>
                    <article className="flex h-full flex-col rounded-3xl border border-linen bg-white p-6 shadow-soft">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="rounded-full bg-gold/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                            {treatment.tag || section.eyebrow}
                          </span>
                          <h2 className="mt-4 font-display text-2xl leading-tight text-coffee">
                            {treatment.name}
                          </h2>
                        </div>
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-coffee text-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-coffee/68">{treatment.description}</p>

                      <div className="mt-5 grid gap-4">
                        <div>
                          <p className="text-sm font-bold text-coffee">Puede ayudar a</p>
                          <ul className="mt-2 grid gap-2">
                            {treatment.potentialBenefits.map((benefit) => (
                              <li key={benefit} className="flex gap-2 text-sm leading-6 text-coffee/68">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-olive" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-2xl bg-cream p-4">
                          <p className="text-sm font-bold text-coffee">Cuidados generales</p>
                          <p className="mt-2 text-sm leading-6 text-coffee/65">
                            {treatment.generalCare.join(" · ")}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={createWhatsAppUrl(treatmentMessage(treatment.name))}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-5 py-3 text-sm font-bold text-white transition hover:bg-olive"
                      >
                        Consultar este tratamiento
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
