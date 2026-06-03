import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Treatment } from "@/constants/data";
import { createWhatsAppUrl, treatmentWhatsappMessage } from "@/lib/whatsapp";

type TreatmentCardProps = {
  treatment: Treatment;
  compact?: boolean;
};

export function TreatmentCard({ treatment, compact = false }: TreatmentCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/75 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      <div className={`relative overflow-hidden ${compact ? "h-44" : "h-56"}`}>
        <Image
          src={treatment.image}
          alt={`Referencia visual de ${treatment.name}`}
          fill
          sizes={compact ? "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{treatment.category}</p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-coffee">{treatment.name}</h3>
        <p className="mt-3 text-sm leading-7 text-coffee/70">{treatment.description}</p>

        {!compact ? (
          <div className="mt-5 grid gap-4">
            <div>
              <p className="text-sm font-bold text-coffee">Beneficios potenciales</p>
              <ul className="mt-2 grid gap-2">
                {treatment.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-coffee/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-olive" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-coffee">Cuidados generales</p>
              <p className="mt-2 text-sm leading-6 text-coffee/65">{treatment.care.slice(0, 2).join(" · ")}</p>
            </div>
          </div>
        ) : null}

        <Link
          href={createWhatsAppUrl(treatmentWhatsappMessage(treatment.name))}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive"
        >
          Consultar por este tratamiento
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
