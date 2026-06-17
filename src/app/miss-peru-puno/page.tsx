import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, Crown, HandHeart, Sparkles } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/constants/data";

export const metadata: Metadata = {
  title: "Auspicio Miss Perú Puno | Bravo Medicina Estética",
  description:
    "Bravo Medicina Estética como auspiciador de Miss Perú Puno, con una comunicación enfocada en imagen, cuidado y acompañamiento profesional."
};

const highlights = [
  {
    title: "Imagen regional",
    description:
      "Una presencia que conecta belleza, confianza y representación local desde Juliaca hacia la región.",
    icon: Crown
  },
  {
    title: "Cuidado responsable",
    description:
      "Comunicación estética prudente, enfocada en orientación y evaluación personalizada.",
    icon: HandHeart
  },
  {
    title: "Acompañamiento profesional",
    description:
      "Tratamientos realizados por profesionales y cuidados generales antes y después de cada sesión.",
    icon: Award
  }
];

export default function MissPeruPunoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-coffee text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.24),transparent_55%)]" />
        <div className="container-shell relative grid min-h-[calc(100vh-5rem)] gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-gold">Auspicio regional</p>
              <h1 className="mt-5 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
                Bravo Medicina Estética, auspiciador de Miss Perú Puno
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/75">
                Una alianza de imagen, confianza y cuidado estético responsable para acompañar una plataforma
                regional de belleza, presencia y representación.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#reserva"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-coffee shadow-glow transition hover:bg-cream"
                >
                  <CalendarDays className="h-5 w-5" />
                  Agendar evaluación
                </Link>
                <Link
                  href="/tratamientos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-coffee"
                >
                  Ver tratamientos
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-gold/30 bg-white/5 p-4 shadow-glow">
              <Image
                src={siteConfig.logo}
                alt="Logo Bravo Medicina Estética"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Presencia de marca"
              title="Belleza, cuidado y comunicación con criterio profesional"
              description="Esta página comunica el auspicio de forma elegante y prudente, sin prometer resultados ni reemplazar una evaluación personalizada."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-3xl border border-white/70 bg-white p-6 shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/18 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 font-display text-2xl text-coffee">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-coffee/68">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="rounded-[2rem] border border-linen bg-blush p-8 shadow-soft">
              <Sparkles className="h-10 w-10 text-gold" />
              <h2 className="mt-5 font-display text-4xl leading-tight text-coffee">
                Una vitrina para comunicar confianza
              </h2>
              <p className="mt-4 text-base leading-8 text-coffee/70">
                El auspicio fortalece la presencia de Bravo Medicina Estética en eventos regionales, manteniendo un
                mensaje centrado en evaluación, orientación y acompañamiento profesional.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Comunicación premium de marca",
                "Cuidado facial y corporal con orientación",
                "Seguimiento post tratamiento",
                "CTA directo para agendar evaluación"
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-linen bg-cream p-5 text-sm font-semibold text-coffee/75">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-coffee py-16 text-cream">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Bravo Medicina Estética</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Agenda una evaluación personalizada en Juliaca.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-cream/72">
              Recibe orientación profesional y conoce opciones estéticas acordes a tus objetivos.
            </p>
          </div>
          <WhatsAppButton
            className="bg-gold text-coffee hover:bg-cream"
            label="Contactar por WhatsApp"
            message="Hola, vi la página de Bravo Medicina Estética como auspiciador de Miss Perú Puno y quiero agendar una evaluación."
          />
        </div>
      </section>
    </>
  );
}
