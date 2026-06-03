import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { treatmentCategories, treatments } from "@/constants/data";

export const metadata: Metadata = {
  title: "Tratamientos | Bravo Medicina Estética",
  description:
    "Catálogo demo de tratamientos estéticos faciales, corporales, inyectables y cuidados post tratamiento."
};

export default function TreatmentsPage() {
  const groupedTreatments = treatmentCategories.map((category) => ({
    category,
    items: treatments.filter((treatment) => treatment.category === category)
  }));

  return (
    <>
      <section className="bg-coffee py-16 text-cream sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-gold">Catálogo demo</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">
            Tratamientos estéticos con orientación profesional
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-cream/72 sm:text-lg">
            Cada tratamiento se presenta con beneficios potenciales y cuidados generales. La elección adecuada requiere
            evaluación personalizada.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-shell grid gap-14">
          {groupedTreatments.map(({ category, items }) => (
            <div key={category}>
              <Reveal>
                <SectionHeading
                  eyebrow={category}
                  title={category === "Cuidados post tratamiento" ? "Cuidado y continuidad" : `Tratamientos ${category.toLowerCase()}`}
                  description="Información de demo, editable desde src/constants/data.ts."
                />
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((treatment, index) => (
                  <Reveal key={treatment.slug} delay={index * 0.05}>
                    <TreatmentCard treatment={treatment} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
