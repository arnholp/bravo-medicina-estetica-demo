import { siteConfig } from "@/constants/data";

export function getWhatsappPhone() {
  return process.env.NEXT_PUBLIC_WHATSAPP_PHONE || siteConfig.phone;
}

export function createWhatsAppUrl(message: string, phone = getWhatsappPhone()) {
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function treatmentWhatsappMessage(treatmentName: string) {
  return `Hola, me gustaría recibir orientación sobre ${treatmentName} en Bravo Medicina Estética.`;
}

export function appointmentWhatsappMessage(fullName: string, treatment: string) {
  return `Hola, soy ${fullName}. Me gustaría agendar una evaluación para ${treatment}.`;
}
