"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, Loader2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { treatmentOptions } from "@/constants/data";
import { appointmentSchema, type AppointmentInput } from "@/lib/schemas";
import { appointmentWhatsappMessage, createWhatsAppUrl } from "@/lib/whatsapp";

type SubmitState =
  | { status: "idle"; message?: string; whatsappUrl?: string }
  | { status: "success"; message: string; whatsappUrl: string }
  | { status: "error"; message: string; whatsappUrl?: string };

export function AppointmentForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      treatment_interest: "Evaluación estética personalizada",
      preferred_date: "",
      preferred_time: "",
      comment: ""
    }
  });

  async function onSubmit(values: AppointmentInput) {
    setSubmitState({ status: "idle" });

    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    const payload = (await response.json()) as { message?: string };
    if (!response.ok) {
      setSubmitState({
        status: "error",
        message: payload.message || "No pudimos registrar la cita. Revisa la configuración de Supabase."
      });
      return;
    }

    setSubmitState({
      status: "success",
      message: "Tu solicitud fue registrada. Puedes continuar la coordinación por WhatsApp.",
      whatsappUrl: createWhatsAppUrl(
        appointmentWhatsappMessage(values.full_name, values.treatment_interest)
      )
    });
    reset({
      full_name: "",
      phone: "",
      treatment_interest: "Evaluación estética personalizada",
      preferred_date: "",
      preferred_time: "",
      comment: ""
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="premium-card p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/18 text-gold">
          <CalendarCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Reserva</p>
          <h3 className="font-display text-3xl text-coffee">Agenda tu evaluación</h3>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label>
          <span className="field-label">Nombre completo</span>
          <input className="field-input" placeholder="Ej. Ana Pérez" {...register("full_name")} />
          {errors.full_name ? <p className="field-error">{errors.full_name.message}</p> : null}
        </label>

        <label>
          <span className="field-label">Celular</span>
          <input className="field-input" placeholder="Ej. 972 657 382" {...register("phone")} />
          {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
        </label>

        <label>
          <span className="field-label">Tratamiento de interés</span>
          <select className="field-input" {...register("treatment_interest")}>
            {treatmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.treatment_interest ? <p className="field-error">{errors.treatment_interest.message}</p> : null}
        </label>

        <label>
          <span className="field-label">Fecha preferida</span>
          <input className="field-input" type="date" {...register("preferred_date")} />
          {errors.preferred_date ? <p className="field-error">{errors.preferred_date.message}</p> : null}
        </label>

        <label>
          <span className="field-label">Horario preferido</span>
          <select className="field-input" {...register("preferred_time")}>
            <option value="">Selecciona un horario</option>
            <option value="Mañana">Mañana</option>
            <option value="Mediodía">Mediodía</option>
            <option value="Tarde">Tarde</option>
            <option value="Sábado">Sábado</option>
          </select>
          {errors.preferred_time ? <p className="field-error">{errors.preferred_time.message}</p> : null}
        </label>

        <label className="md:col-span-2">
          <span className="field-label">Comentario opcional</span>
          <textarea
            className="field-input min-h-28 resize-none"
            placeholder="Cuéntanos brevemente qué te gustaría evaluar."
            {...register("comment")}
          />
          {errors.comment ? <p className="field-error">{errors.comment.message}</p> : null}
        </label>
      </div>

      {submitState.status !== "idle" ? (
        <div
          className={`mt-6 rounded-2xl px-4 py-3 text-sm font-medium ${
            submitState.status === "success"
              ? "border border-olive/20 bg-olive/10 text-olive"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {submitState.message}
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-6 py-4 text-sm font-bold text-white transition hover:bg-olive disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarCheck className="h-4 w-4" />}
          Registrar solicitud
        </button>
        {submitState.status === "success" && submitState.whatsappUrl ? (
          <Link
            href={submitState.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-olive px-6 py-4 text-sm font-bold text-white transition hover:bg-coffee"
          >
            <MessageCircle className="h-4 w-4" />
            Continuar por WhatsApp
          </Link>
        ) : null}
      </div>
    </form>
  );
}
