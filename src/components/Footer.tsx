import Image from "next/image";
import Link from "next/link";

import { navItems, siteConfig } from "@/constants/data";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-linen bg-coffee text-cream">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full border border-gold/40 bg-white">
              <Image src={siteConfig.logo} alt="Logo Bravo Medicina Estética" fill sizes="56px" className="object-cover" />
            </span>
            <div>
              <p className="font-display text-2xl">{siteConfig.name}</p>
              <p className="text-sm text-cream/65">{siteConfig.location}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-cream/70">
            Demo no oficial de una experiencia digital para conversión, reserva, educación y seguimiento de pacientes.
            La información es orientativa y no reemplaza una evaluación profesional.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Navegación</p>
          <div className="mt-4 grid gap-3">
            {navItems.filter((item) => item.label !== "Admin").map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-cream/70 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Contacto</p>
          <p className="mt-4 text-sm text-cream/70">{siteConfig.whatsappLabel}</p>
          <p className="mt-2 text-sm text-cream/70">{siteConfig.address}</p>
          <WhatsAppButton
            className="mt-6 bg-gold text-coffee hover:bg-cream"
            label="Agendar evaluación"
            message="Hola, quiero agendar una evaluación en Bravo Medicina Estética."
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} Bravo Medicina Estética demo. Contenido prudente para fines demostrativos.
      </div>
    </footer>
  );
}
