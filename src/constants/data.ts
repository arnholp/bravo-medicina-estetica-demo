import {
  CalendarCheck,
  HandHeart,
  HeartPulse,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UserRoundCheck
} from "lucide-react";

export const siteConfig = {
  name: "Bravo Medicina Estética",
  logo: "/bravologo.png",
  location: "Juliaca, Perú",
  phone: "51972657382",
  whatsappLabel: "+51 972 657 382",
  address: "Juliaca, Perú",
  instagram: "#",
  heroImage:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85",
  secondaryImage:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85"
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/miss-peru-puno", label: "Miss Perú Puno" },
  { href: "/#quiz", label: "Quiz" },
  { href: "/#reserva", label: "Reserva" },
  { href: "/#seguimiento", label: "Seguimiento" },
  { href: "/admin", label: "Admin" }
];

export const trustItems = [
  {
    title: "Atención personalizada",
    description: "Orientación inicial según objetivos, historial y necesidades visibles.",
    icon: UserRoundCheck
  },
  {
    title: "Seguimiento profesional",
    description: "Acompañamiento antes y después de cada sesión estética.",
    icon: HeartPulse
  },
  {
    title: "Tratamientos estéticos",
    description: "Opciones faciales, corporales y dermatológicas con enfoque prudente.",
    icon: Sparkles
  },
  {
    title: "Resultados progresivos",
    description: "Planificación realista y cuidados constantes para apoyar la evolución.",
    icon: Leaf
  }
];

export const howItWorks = [
  {
    title: "Agenda tu evaluación",
    description: "Cuéntanos qué deseas mejorar y elige una fecha tentativa."
  },
  {
    title: "Recibe orientación profesional",
    description: "Un profesional revisa tu caso y propone alternativas acordes."
  },
  {
    title: "Inicia tu tratamiento",
    description: "Se define un plan estético con indicaciones previas y posteriores."
  },
  {
    title: "Recibe seguimiento y cuidados",
    description: "Te acompañamos con recordatorios y recomendaciones generales."
  }
];

export type TreatmentCategory =
  | "Facial"
  | "Corporal"
  | "Piel y acné"
  | "Inyectables"
  | "Rejuvenecimiento"
  | "Cuidados post tratamiento";

export const treatmentCategories: TreatmentCategory[] = [
  "Facial",
  "Corporal",
  "Piel y acné",
  "Inyectables",
  "Rejuvenecimiento",
  "Cuidados post tratamiento"
];

export type Treatment = {
  name: string;
  slug: string;
  category: TreatmentCategory;
  description: string;
  benefits: string[];
  care: string[];
  featured?: boolean;
  image: string;
};

export const treatments: Treatment[] = [
  {
    name: "Limpieza facial profunda",
    slug: "limpieza-facial-profunda",
    category: "Facial",
    description:
      "Higiene facial orientada a retirar impurezas, apoyar la textura de la piel y preparar una rutina de cuidado.",
    benefits: ["Piel con sensación más fresca", "Apoyo a poros congestionados", "Mejor absorción de productos"],
    care: ["Usar protector solar", "Evitar exfoliación intensa por 48 horas", "Mantener hidratación"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Tratamiento para acné",
    slug: "tratamiento-para-acne",
    category: "Piel y acné",
    description:
      "Evaluación estética para orientar cuidados, sesiones y productos de apoyo según el tipo de piel.",
    benefits: ["Orientación personalizada", "Apoyo a la rutina diaria", "Seguimiento de evolución"],
    care: ["No manipular lesiones", "Evitar automedicación", "Reaplicar fotoprotección"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Tratamiento para manchas",
    slug: "tratamiento-para-manchas",
    category: "Piel y acné",
    description:
      "Plan estético orientado a mejorar la apariencia de manchas con evaluación previa y cuidados continuos.",
    benefits: ["Enfoque gradual", "Rutina de soporte", "Orientación sobre fotoprotección"],
    care: ["Protector solar diario", "Evitar exposición solar directa", "Seguir indicaciones del profesional"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Rejuvenecimiento facial",
    slug: "rejuvenecimiento-facial",
    category: "Rejuvenecimiento",
    description:
      "Alternativas estéticas para favorecer luminosidad, textura y apariencia descansada del rostro.",
    benefits: ["Aspecto más cuidado", "Plan según edad y piel", "Apoyo a firmeza y luminosidad"],
    care: ["Mantener hidratación", "Evitar calor intenso tras la sesión", "Aplicar protector solar"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Botox",
    slug: "botox",
    category: "Inyectables",
    description:
      "Procedimiento estético realizado por profesionales para suavizar líneas de expresión según evaluación.",
    benefits: ["Orientación por zonas", "Aplicación planificada", "Seguimiento posterior"],
    care: ["No masajear la zona", "Evitar ejercicio intenso el mismo día", "Seguir indicaciones recibidas"],
    image:
      "https://images.unsplash.com/photo-1598300188904-6287d52746ad?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ácido hialurónico",
    slug: "acido-hialuronico",
    category: "Inyectables",
    description:
      "Tratamiento estético personalizado para armonización facial, hidratación o soporte de volumen según caso.",
    benefits: ["Diseño facial prudente", "Evaluación por zonas", "Acompañamiento posterior"],
    care: ["Evitar presión en la zona", "No exponerse a calor intenso", "Reportar cualquier molestia"],
    image:
      "https://images.unsplash.com/photo-1631217872822-1a0d9af8f2c2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "PRP facial",
    slug: "prp-facial",
    category: "Rejuvenecimiento",
    description:
      "Procedimiento de bioestimulación estética indicado tras evaluación y explicación profesional.",
    benefits: ["Apoyo a luminosidad", "Cuidado progresivo", "Plan de sesiones orientativo"],
    care: ["Evitar maquillaje inmediato", "Hidratar la piel", "Usar fotoprotección"],
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Eliminación de lunares y verrugas",
    slug: "eliminacion-lunares-verrugas",
    category: "Piel y acné",
    description:
      "Valoración previa de lesiones visibles para orientar si el procedimiento estético es adecuado.",
    benefits: ["Revisión inicial", "Indicaciones de cuidado", "Seguimiento de cicatrización"],
    care: ["No retirar costras", "Mantener zona limpia", "Acudir a control si se indica"],
    image:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Tratamientos corporales",
    slug: "tratamientos-corporales",
    category: "Corporal",
    description:
      "Opciones estéticas para acompañar objetivos corporales, hábitos saludables y seguimiento profesional.",
    benefits: ["Evaluación por zonas", "Plan por sesiones", "Recomendaciones de cuidado"],
    care: ["Hidratación constante", "Complementar con hábitos saludables", "Asistir a controles"],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Evaluación estética personalizada",
    slug: "evaluacion-estetica-personalizada",
    category: "Cuidados post tratamiento",
    description:
      "Consulta de orientación para entender tus objetivos y definir un camino estético prudente.",
    benefits: ["Revisión de objetivos", "Plan inicial", "Resolución de dudas"],
    care: ["Llevar antecedentes relevantes", "Comentar tratamientos previos", "Evitar expectativas absolutas"],
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials = [
  {
    name: "María F.",
    role: "Paciente de tratamiento facial",
    quote:
      "Me explicaron las opciones con calma y sentí que el seguimiento fue muy ordenado."
  },
  {
    name: "Andrea L.",
    role: "Paciente de cuidado de piel",
    quote:
      "La evaluación me ayudó a entender mejor mi rutina y a tener expectativas realistas."
  },
  {
    name: "Camila R.",
    role: "Paciente de estética corporal",
    quote:
      "Me gustó que el plan fuera progresivo y que resolvieran mis dudas antes de iniciar."
  }
];

export const followUpTimeline = [
  {
    day: "Día 1",
    title: "Sensación posterior",
    description: "Pregunta breve sobre cómo te sentiste después de tu sesión.",
    icon: HandHeart
  },
  {
    day: "Día 3",
    title: "Protector solar",
    description: "Recordatorio amable para mantener fotoprotección y cuidados indicados.",
    icon: SunMedium
  },
  {
    day: "Día 7",
    title: "Guía de cuidados",
    description: "Revisión de rutina, hidratación y señales generales a observar.",
    icon: ShieldCheck
  },
  {
    day: "Día 15",
    title: "Seguimiento de avance",
    description: "Registro orientativo de evolución y posibles dudas del paciente.",
    icon: CalendarCheck
  },
  {
    day: "Día 30",
    title: "Nueva evaluación",
    description: "Invitación prudente para revisar avances o planificar continuidad.",
    icon: MessageCircle
  }
];

export const treatmentOptions = treatments.map((treatment) => treatment.name);
