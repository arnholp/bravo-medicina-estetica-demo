"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navItems, siteConfig } from "@/constants/data";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-cream/90 backdrop-blur-xl">
      <nav className="container-shell flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-4" aria-label="Ir al inicio">
          <span className="relative h-16 w-16 overflow-hidden rounded-full border border-gold/40 bg-white shadow-soft sm:h-20 sm:w-20">
            <Image
              src={siteConfig.logo}
              alt="Logo Bravo Medicina Estética"
              fill
              sizes="(min-width: 640px) 80px, 64px"
              className="object-cover"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-2xl text-coffee sm:text-[1.7rem]">{siteConfig.name}</span>
            <span className="block text-xs font-medium uppercase tracking-[0.24em] text-coffee/50">
              Demo clínica
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-coffee/70 transition hover:text-coffee"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton label="Contactar" message="Hola, quiero recibir información sobre una evaluación estética." />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linen bg-white text-coffee shadow-sm lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-linen bg-cream lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-coffee transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton
              className="mt-2 w-full"
              label="Contactar por WhatsApp"
              message="Hola, quiero recibir información sobre una evaluación estética."
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
