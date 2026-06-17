import { ArrowRight, CheckCircle2, Crown, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AppointmentForm } from "@/components/AppointmentForm";
import { Hero } from "@/components/Hero";
import { PatientFollowUpTimeline } from "@/components/PatientFollowUpTimeline";
import { Quiz } from "@/components/Quiz";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TreatmentCard } from "@/components/TreatmentCard";
import { howItWorks, siteConfig, testimonials, treatments, trustItems } from "@/constants/data";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const featuredTreatments = treatments.filter((treatment) => treatment.featured).slice(0, 4);

  return (
    <>
      <Hero />

      <section className="section-pad bg-cream">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/18 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 font-display text-2xl text-coffee">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-coffee/65">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Tratamientos destacados"
              title="Opciones estéticas con evaluación y acompañamiento"
              description="Contenido de demo con lenguaje prudente: cada alternativa debe revisarse de forma personalizada antes de iniciar."
            />
            <Link
              href="/tratamientos"
              className="inline-flex items-center gap-2 rounded-full border border-linen bg-cream px-5 py-3 text-sm font-bold text-coffee transition hover:border-gold"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredTreatments.map((treatment, index) => (
              <Reveal key={treatment.slug} delay={index * 0.06}>
                <TreatmentCard treatment={treatment} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-blush">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Cómo funciona"
                title="Una ruta simple, clara y humana para empezar"
                description="La experiencia está diseñada para convertir interés en una evaluación ordenada, sin prometer resultados absolutos."
              />
              <div className="relative mt-8 h-80 overflow-hidden rounded-3xl">
                <Image
                  src={siteConfig.secondaryImage}
                  alt="Ambiente de cuidado estético profesional"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {howItWorks.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="flex gap-5 rounded-3xl border border-white/75 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-coffee text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-coffee">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-coffee/68">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quiz" className="section-pad bg-cream">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Orientación inicial"
              title="Encuentra una recomendación para conversar en consulta"
              description="Un quiz breve para educar, segmentar necesidades y abrir una conversación por WhatsApp."
            />
          </Reveal>
          <Reveal className="mt-10">
            <Quiz />
          </Reveal>
        </div>
      </section>

      <section id="reserva" className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="sticky top-28">
              <SectionHeading
                eyebrow="Reserva de evaluación"
                title="Convierte el interés en una solicitud clara"
                description="El formulario registra la intención del paciente y permite continuar por WhatsApp con un mensaje precargado."
              />
              <div className="mt-8 rounded-3xl border border-linen bg-cream p-6">
                {[
                  "Datos mínimos para contacto",
                  "Tratamiento de interés editable",
                  "Confirmación visual al enviar",
                  "Registro en Supabase"
                ].map((item) => (
                  <div key={item} className="flex gap-3 py-2 text-sm font-semibold text-coffee/70">
                    <CheckCircle2 className="h-5 w-5 text-olive" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <AppointmentForm />
          </Reveal>
        </div>
      </section>

      <section id="seguimiento" className="section-pad bg-cream">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Seguimiento post tratamiento"
              title="Una experiencia de cuidado después de la sesión"
              description="La demo incluye un registro interno de pacientes y una línea visual de mensajes de seguimiento."
            />
          </Reveal>
          <Reveal className="mt-10">
            <PatientFollowUpTimeline />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Testimonios simulados"
            title="Confianza construida con claridad y acompañamiento"
            description="Textos de ejemplo para la demo. En producción deben reemplazarse por testimonios autorizados."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coffee py-12 text-cream">
        <div className="container-shell grid gap-8 md:grid-cols-[180px_1fr_auto] md:items-center">
          <div className="relative aspect-[4/3] w-full max-w-44 overflow-hidden rounded-3xl border border-gold/30 bg-black">
            <Image
              src={siteConfig.missPeruLogo}
              alt="Logo Miss Perú Puno"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              <Crown className="h-4 w-4" />
              Auspicio regional
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
              Bravo Medicina Estética, auspiciador de Miss Perú Puno
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-cream/70">
              Una alianza de imagen, confianza y cuidado estético responsable en la región.
            </p>
          </div>
          <Link
            href="/miss-peru-puno"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-coffee transition hover:bg-cream"
          >
            Ver página
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-coffee py-16 text-cream">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-gold">Agenda tu cita</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Da el primer paso con una evaluación personalizada.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-cream/72">
                Recibe orientación profesional sobre tratamientos faciales, corporales y dermatológicos en Juliaca.
              </p>
            </div>
            <Link
              href={createWhatsAppUrl("Hola, quiero agendar una evaluación en Bravo Medicina Estética.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold text-coffee shadow-glow transition hover:bg-cream"
            >
              <MessageCircle className="h-5 w-5" />
              Continuar por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
