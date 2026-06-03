"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { createWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  floating?: boolean;
  className?: string;
};

export function WhatsAppButton({
  message = "Hola, me gustaría recibir información sobre Bravo Medicina Estética.",
  label = "WhatsApp",
  floating = false,
  className = ""
}: WhatsAppButtonProps) {
  const href = createWhatsAppUrl(message);

  if (floating) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp de Bravo Medicina Estética"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-olive text-white shadow-glow transition hover:-translate-y-1 hover:bg-coffee"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-olive px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coffee ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </Link>
  );
}
