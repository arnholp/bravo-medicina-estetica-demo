import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/constants/data";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee/86 via-coffee/58 to-coffee/12" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="container-shell relative flex min-h-[calc(100vh-5rem)] items-center pb-20 pt-16">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" />
            Demo premium en Juliaca
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Medicina estética personalizada en Juliaca
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            Tratamientos faciales, corporales y dermatológicos con acompañamiento profesional.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#reserva"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-coffee shadow-glow transition hover:-translate-y-0.5 hover:bg-cream"
            >
              <CalendarDays className="h-5 w-5" />
              Agendar evaluación
            </Link>
            <Link
              href="/tratamientos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-coffee"
            >
              Ver tratamientos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-8">
            <WhatsAppButton
              className="border border-white/20 bg-white/12 text-white backdrop-blur hover:bg-olive"
              label="Hablar con orientación"
              message="Hola, me gustaría recibir orientación para una evaluación estética en Juliaca."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
