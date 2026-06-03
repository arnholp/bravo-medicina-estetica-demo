import { Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <article className="premium-card p-6">
      <Quote className="h-8 w-8 text-gold" />
      <p className="mt-5 text-base leading-8 text-coffee/78">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-coffee">{name}</p>
        <p className="text-sm text-coffee/55">{role}</p>
      </div>
    </article>
  );
}
