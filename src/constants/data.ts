import {
  HeartPulse,
  Leaf,
  Sparkles,
  UserRoundCheck
} from "lucide-react";

export const siteConfig = {
  name: "Bravo Medicina Estética",
  logo: "/bravologo.png",
  missPeruLogo: "/miss-peru-puno-logo.png",
  missPeruHero: "/miss-peru-puno-hero.png",
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
  { href: "/#quiz", label: "Quiz" },
  { href: "/#reserva", label: "Reserva" },
  { href: "/miss-peru-puno", label: "Miss Perú Puno" }
];

export const trustItems = [
  {
    title: "Atención personalizada",
    description: "Orientación inicial según objetivos, historial y necesidades visibles.",
    icon: UserRoundCheck
  },
  {
    title: "Acompañamiento profesional",
    description: "Orientación antes y después de cada sesión estética.",
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
    title: "Recibe indicaciones de cuidado",
    description: "Te acompañamos con recomendaciones generales para cada etapa."
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
    benefits: ["Orientación personalizada", "Apoyo a la rutina diaria", "Acompañamiento de evolución"],
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
    benefits: ["Orientación por zonas", "Aplicación planificada", "Acompañamiento posterior"],
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
    benefits: ["Revisión inicial", "Indicaciones de cuidado", "Acompañamiento de cicatrización"],
    care: ["No retirar costras", "Mantener zona limpia", "Acudir a control si se indica"],
    image:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Tratamientos corporales",
    slug: "tratamientos-corporales",
    category: "Corporal",
    description:
      "Opciones estéticas para acompañar objetivos corporales, hábitos saludables y orientación profesional.",
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
      "Me explicaron las opciones con calma y sentí que el acompañamiento fue muy ordenado."
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

export type FlyerTreatment = {
  name: string;
  description: string;
  potentialBenefits: string[];
  generalCare: string[];
  tag?: string;
};

export type FlyerTreatmentSection = {
  id: "cirugias" | "faciales" | "corporales";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  treatments: FlyerTreatment[];
};

export const flyerTreatmentSections: FlyerTreatmentSection[] = [
  {
    id: "cirugias",
    eyebrow: "Cirugías estéticas",
    title: "Procedimientos quirúrgicos estéticos",
    description:
      "Opciones que requieren evaluación médica, explicación de alcances, preparación previa y controles posteriores. La indicación depende de cada caso.",
    image: "/tratamientos-cirugias.svg",
    treatments: [
      {
        name: "Lipotransferencia / Lipoescultura",
        description:
          "Procedimiento orientado a remodelar zonas corporales y armonizar proporciones mediante una evaluación especializada.",
        potentialBenefits: ["Plan corporal personalizado", "Orientación sobre zonas a tratar", "Acompañamiento pre y post procedimiento"],
        generalCare: ["Evaluación previa obligatoria", "Seguir indicaciones post operatorias", "Usar prendas o fajas si el profesional lo indica"],
        tag: "Quirúrgico"
      },
      {
        name: "Rinoplastia",
        description:
          "Cirugía estética orientada a mejorar la armonía del perfil nasal y facial según valoración profesional.",
        potentialBenefits: ["Armonía facial", "Plan según anatomía y expectativas", "Orientación quirúrgica personalizada"],
        generalCare: ["Evitar golpes o presión", "Asistir a controles", "Seguir restricciones de actividad indicadas"],
        tag: "Quirúrgico"
      },
      {
        name: "Blefaroplastia",
        description:
          "Procedimiento quirúrgico para tratar exceso de piel en párpados cuando la evaluación lo considera adecuado.",
        potentialBenefits: ["Apariencia más descansada", "Evaluación por zona periocular", "Plan con cuidados posteriores"],
        generalCare: ["No manipular la zona", "Evitar esfuerzo inicial", "Cumplir controles y recomendaciones"],
        tag: "Quirúrgico"
      },
      {
        name: "Lipomarcación de rostro",
        description:
          "Alternativa estética orientada a definir y armonizar el contorno facial, sujeta a evaluación individual.",
        potentialBenefits: ["Orientación de contorno facial", "Plan por zonas", "Acompañamiento posterior"],
        generalCare: ["Evaluación facial previa", "Evitar expectativas absolutas", "Seguir indicaciones de recuperación"],
        tag: "Rostro"
      }
    ]
  },
  {
    id: "faciales",
    eyebrow: "Tratamientos faciales",
    title: "Cuidado, armonización y renovación facial",
    description:
      "Tratamientos orientados a piel, textura, luminosidad, acné, armonización y cuidado facial. La recomendación final se define en evaluación.",
    image: "/tratamientos-faciales.svg",
    treatments: [
      {
        name: "Botox facial",
        description:
          "Aplicación estética realizada por profesionales para suavizar líneas de expresión según zonas evaluadas.",
        potentialBenefits: ["Apariencia facial más descansada", "Plan por zonas", "Acompañamiento posterior"],
        generalCare: ["No masajear la zona", "Evitar ejercicio intenso el mismo día", "Seguir indicaciones profesionales"],
        tag: "Inyectable"
      },
      {
        name: "Ácido hialurónico",
        description:
          "Tratamiento de armonización o soporte de volumen facial según objetivos, anatomía y evaluación profesional.",
        potentialBenefits: ["Armonización facial", "Hidratación o soporte de volumen", "Plan personalizado"],
        generalCare: ["Evitar presión en la zona", "No exponerse a calor intenso", "Acudir a control si se indica"],
        tag: "Inyectable"
      },
      {
        name: "HIFU facial",
        description:
          "Tecnología estética no quirúrgica orientada a estimular la apariencia de firmeza en zonas faciales seleccionadas.",
        potentialBenefits: ["Apoyo a firmeza facial", "Sesión planificada por zonas", "Alternativa no quirúrgica"],
        generalCare: ["Mantener hidratación", "Usar protector solar", "Seguir rutina indicada"],
        tag: "Tecnología"
      },
      {
        name: "Hollywood Peel",
        description:
          "Tratamiento de renovación superficial asociado a láser Nd:YAG Q-Switched, orientado a mejorar luminosidad y textura.",
        potentialBenefits: ["Apariencia más luminosa", "Apoyo a textura", "Renovación progresiva"],
        generalCare: ["Fotoprotección diaria", "Evitar exfoliación agresiva", "No exponerse al sol directo"],
        tag: "Láser"
      },
      {
        name: "Tratamiento antiacneico",
        description:
          "Plan de cuidado facial orientado a acné y secuelas visibles, con evaluación del tipo de piel y hábitos actuales.",
        potentialBenefits: ["Orientación para piel acneica", "Rutina de apoyo", "Acompañamiento de evolución"],
        generalCare: ["No manipular lesiones", "Evitar automedicación", "Mantener limpieza e hidratación indicadas"],
        tag: "Piel"
      },
      {
        name: "Plasma rico en plaquetas",
        description:
          "Procedimiento estético de bioestimulación indicado tras revisión profesional y explicación del proceso.",
        potentialBenefits: ["Apoyo a luminosidad", "Cuidado progresivo", "Plan por sesiones"],
        generalCare: ["Evitar maquillaje inmediato", "Hidratar la piel", "Usar protector solar"],
        tag: "Bioestimulación"
      },
      {
        name: "Plasma rico en plaquetas con Dermapen",
        description:
          "Combinación estética orientada a favorecer textura y apariencia de la piel mediante microcanales y PRP.",
        potentialBenefits: ["Apoyo a textura", "Estimulación progresiva", "Plan de sesiones orientativo"],
        generalCare: ["Evitar sol directo", "No exfoliar la zona", "Seguir indicaciones de hidratación"],
        tag: "Bioestimulación"
      },
      {
        name: "Peeling facial (aclaramiento facial)",
        description:
          "Procedimiento de renovación superficial orientado a mejorar apariencia de manchas, textura y luminosidad.",
        potentialBenefits: ["Apoyo a tono más uniforme", "Renovación gradual", "Rutina complementaria"],
        generalCare: ["Protector solar estricto", "Evitar irritantes", "No retirar descamación manualmente"],
        tag: "Renovación"
      },
      {
        name: "Limpieza facial",
        description:
          "Higiene facial de mantenimiento para retirar impurezas y preparar la piel para una rutina adecuada.",
        potentialBenefits: ["Sensación de piel fresca", "Apoyo a poros congestionados", "Base para rutina facial"],
        generalCare: ["Hidratar la piel", "Usar protector solar", "Evitar exfoliación intensa por 48 horas"],
        tag: "Higiene"
      },
      {
        name: "Limpieza facial profunda",
        description:
          "Limpieza facial más completa, orientada a extracción controlada, higiene y cuidado de textura.",
        potentialBenefits: ["Higiene más profunda", "Apoyo a puntos negros", "Mejor preparación de la piel"],
        generalCare: ["No manipular la piel", "Evitar maquillaje inmediato", "Mantener hidratación"],
        tag: "Higiene"
      },
      {
        name: "Hidrofacial",
        description:
          "Tratamiento de higiene e hidratación facial orientado a mejorar sensación de frescura y luminosidad.",
        potentialBenefits: ["Hidratación superficial", "Piel con aspecto fresco", "Sesión cómoda y progresiva"],
        generalCare: ["Mantener fotoprotección", "Evitar exfoliación agresiva", "Usar productos indicados"],
        tag: "Hidratación"
      },
      {
        name: "Extracción de lunares y verrugas",
        description:
          "Valoración y procedimiento estético para lesiones visibles cuando el profesional considera viable tratar la zona.",
        potentialBenefits: ["Revisión inicial", "Indicaciones de cuidado", "Acompañamiento de cicatrización"],
        generalCare: ["No retirar costras", "Mantener zona limpia", "Asistir a control si se indica"],
        tag: "Dermatológico"
      },
      {
        name: "Baño lunar",
        description:
          "Tratamiento cosmético orientado a aclarar visualmente el vello fino de zonas seleccionadas.",
        potentialBenefits: ["Acabado estético temporal", "Alternativa cosmética rápida", "Orientación por zona"],
        generalCare: ["Evitar piel irritada", "Realizar prueba si corresponde", "Hidratar la zona"],
        tag: "Cosmético"
      },
      {
        name: "Lipoenzimas facial",
        description:
          "Tratamiento estético facial orientado a zonas localizadas, siempre sujeto a evaluación profesional.",
        potentialBenefits: ["Plan facial por zonas", "Orientación personalizada", "Acompañamiento posterior"],
        generalCare: ["Evitar calor intenso", "No manipular la zona", "Seguir indicaciones recibidas"],
        tag: "Rostro"
      },
      {
        name: "Mascarillas antiacneicas",
        description:
          "Cuidado complementario para piel con tendencia acneica, dentro de una rutina orientada por profesionales.",
        potentialBenefits: ["Apoyo calmante", "Complemento de rutina", "Cuidado de piel grasa o acneica"],
        generalCare: ["No mezclar activos sin orientación", "Mantener limpieza suave", "Usar protector solar"],
        tag: "Cuidado"
      },
      {
        name: "Venta de cremas faciales",
        description:
          "Productos faciales recomendados según tipo de piel, rutina actual y objetivo estético.",
        potentialBenefits: ["Rutina personalizada", "Apoyo domiciliario", "Continuidad del tratamiento"],
        generalCare: ["Usar según indicación", "Evitar automedicación cosmética", "Reportar irritación"],
        tag: "Producto"
      }
    ]
  },
  {
    id: "corporales",
    eyebrow: "Tratamientos corporales",
    title: "Contorno, bienestar estético y soporte corporal",
    description:
      "Opciones corporales y complementarias orientadas a objetivos estéticos, hábitos saludables, recuperación y cuidado continuo.",
    image: "/tratamientos-corporales.svg",
    treatments: [
      {
        name: "Aumento de glúteos con peptonas",
        description:
          "Tratamiento corporal estético orientado a tonificar, levantar y realzar la zona glútea según evaluación.",
        potentialBenefits: ["Plan corporal por sesiones", "Orientación por objetivo", "Acompañamiento profesional"],
        generalCare: ["Evaluación previa", "Evitar presión excesiva si se indica", "Seguir recomendaciones posteriores"],
        tag: "Corporal"
      },
      {
        name: "Criolipólisis",
        description:
          "Tecnología corporal orientada a grasa localizada mediante frío controlado, sujeta a valoración por zona.",
        potentialBenefits: ["Alternativa no quirúrgica", "Enfoque en zonas localizadas", "Plan progresivo"],
        generalCare: ["Hidratarse", "Complementar con hábitos saludables", "Acudir a control si se indica"],
        tag: "Tecnología"
      },
      {
        name: "Hidrolipoclasia",
        description:
          "Tratamiento corporal orientado a reducción de medidas en zonas específicas, con evaluación y cuidados indicados.",
        potentialBenefits: ["Trabajo por zonas", "Plan de sesiones", "Orientación de medidas"],
        generalCare: ["Hidratación constante", "Seguir indicaciones de actividad", "Evitar expectativas absolutas"],
        tag: "Corporal"
      },
      {
        name: "Vitaminas C endovenosa",
        description:
          "Aplicación endovenosa ofrecida como complemento de bienestar bajo evaluación y orientación profesional.",
        potentialBenefits: ["Soporte complementario", "Orientación personalizada", "Plan según necesidad"],
        generalCare: ["Informar antecedentes", "Evitar automedicación", "Seguir indicaciones del profesional"],
        tag: "Bienestar"
      },
      {
        name: "Pack cóctel de vida",
        description:
          "Combinación complementaria mencionada en el flyer con Vit. C, Cholo 2, Lymphdiaral y Pasconal, sujeta a evaluación.",
        potentialBenefits: ["Orientación integral", "Plan complementario", "Aplicación bajo criterio profesional"],
        generalCare: ["Informar alergias o antecedentes", "Confirmar componentes antes de aplicar", "No automedicarse"],
        tag: "Bienestar"
      },
      {
        name: "Slim Sculpt",
        description:
          "Programa corporal estético orientado a moldeamiento o apoyo de contorno según objetivos y valoración.",
        potentialBenefits: ["Plan corporal personalizado", "Apoyo a contorno", "Acompañamiento por sesiones"],
        generalCare: ["Mantener hidratación", "Complementar con hábitos saludables", "Seguir frecuencia indicada"],
        tag: "Programa"
      },
      {
        name: "Tratamientos post operatorios",
        description:
          "Cuidados complementarios después de procedimientos, orientados a recuperación estética bajo indicación profesional.",
        potentialBenefits: ["Apoyo post procedimiento", "Orientación de cuidados", "Plan por etapa"],
        generalCare: ["Seguir indicaciones médicas", "No realizar maniobras sin autorización", "Acudir a controles"],
        tag: "Post cuidado"
      },
      {
        name: "Tratamiento para estrías",
        description:
          "Opciones estéticas orientadas a mejorar apariencia de estrías mediante evaluación de zona, tipo y antigüedad.",
        potentialBenefits: ["Mejora progresiva de apariencia", "Plan por zona", "Rutina complementaria"],
        generalCare: ["Hidratar la piel", "Fotoprotección si la zona se expone", "Ser constante con el plan"],
        tag: "Piel corporal"
      },
      {
        name: "Venta de cremas corporales",
        description:
          "Productos corporales recomendados para hidratación, cuidado y mantenimiento según necesidad de piel.",
        potentialBenefits: ["Apoyo domiciliario", "Rutina corporal", "Continuidad del cuidado"],
        generalCare: ["Usar según indicación", "Evitar aplicar sobre piel irritada", "Consultar si hay reacción"],
        tag: "Producto"
      },
      {
        name: "Venta de productos post quirúrgicos",
        description:
          "Productos de apoyo para etapas posteriores a procedimientos, indicados según recomendación profesional.",
        potentialBenefits: ["Soporte de recuperación", "Cuidado organizado", "Productos según etapa"],
        generalCare: ["Usar solo si fue indicado", "Mantener higiene", "Consultar dudas antes de usar"],
        tag: "Post cuidado"
      },
      {
        name: "Fajas post quirúrgicas",
        description:
          "Prendas de soporte utilizadas en recuperación post procedimiento cuando el profesional lo recomienda.",
        potentialBenefits: ["Soporte corporal", "Acompañamiento post procedimiento", "Uso según talla y etapa"],
        generalCare: ["Elegir talla adecuada", "No usar sin indicación", "Mantener higiene de la prenda"],
        tag: "Post cuidado"
      }
    ]
  }
];

export const treatmentOptions = Array.from(
  new Set([
    ...flyerTreatmentSections.flatMap((section) => section.treatments.map((treatment) => treatment.name)),
    ...treatments.map((treatment) => treatment.name)
  ])
);
