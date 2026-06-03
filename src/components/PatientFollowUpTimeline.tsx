"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { followUpTimeline, treatmentOptions } from "@/constants/data";
import { patientSchema, type PatientInput } from "@/lib/schemas";

type SubmitState =
  | { status: "idle"; message?: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function PatientFollowUpTimeline() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PatientInput>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      treatment: "Limpieza facial profunda",
      session_date: "",
      recommended_product: "",
      next_session: "",
      status: "En seguimiento"
    }
  });

  async function onSubmit(values: PatientInput) {
    setSubmitState({ status: "idle" });

    const response = await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      setSubmitState({
        status: "error",
        message: payload.message || "No pudimos registrar el paciente. Revisa la conexión con Supabase."
      });
      return;
    }

    setSubmitState({
      status: "success",
      message: "Paciente registrado para seguimiento post tratamiento."
    });
    reset({
      full_name: "",
      phone: "",
      treatment: "Limpieza facial profunda",
      session_date: "",
      recommended_product: "",
      next_session: "",
      status: "En seguimiento"
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="grid gap-4">
        {followUpTimeline.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.day} className="flex gap-4 rounded-3xl border border-white/70 bg-white/75 p-5 shadow-soft">
              <div className="flex flex-col items-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/18 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                {index < followUpTimeline.length - 1 ? <span className="mt-3 h-full w-px bg-linen" /> : null}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{item.day}</p>
                <h3 className="mt-1 font-display text-2xl text-coffee">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-coffee/68">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="premium-card p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Registro interno</p>
        <h3 className="mt-2 font-display text-3xl text-coffee">Paciente en seguimiento</h3>
        <p className="mt-3 text-sm leading-7 text-coffee/65">
          Guarda datos básicos para preparar mensajes de cuidado y próximas sesiones.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <label>
            <span className="field-label">Nombre</span>
            <input className="field-input" placeholder="Nombre del paciente" {...register("full_name")} />
            {errors.full_name ? <p className="field-error">{errors.full_name.message}</p> : null}
          </label>

          <label>
            <span className="field-label">Celular</span>
            <input className="field-input" placeholder="Celular" {...register("phone")} />
            {errors.phone ? <p className="field-error">{errors.phone.message}</p> : null}
          </label>

          <label>
            <span className="field-label">Tratamiento</span>
            <select className="field-input" {...register("treatment")}>
              {treatmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.treatment ? <p className="field-error">{errors.treatment.message}</p> : null}
          </label>

          <label>
            <span className="field-label">Fecha de sesión</span>
            <input className="field-input" type="date" {...register("session_date")} />
            {errors.session_date ? <p className="field-error">{errors.session_date.message}</p> : null}
          </label>

          <label>
            <span className="field-label">Producto recomendado</span>
            <input className="field-input" placeholder="Ej. Protector solar SPF 50" {...register("recommended_product")} />
            {errors.recommended_product ? <p className="field-error">{errors.recommended_product.message}</p> : null}
          </label>

          <label>
            <span className="field-label">Próxima sesión</span>
            <input className="field-input" type="date" {...register("next_session")} />
            {errors.next_session ? <p className="field-error">{errors.next_session.message}</p> : null}
          </label>

          <label className="md:col-span-2">
            <span className="field-label">Estado</span>
            <select className="field-input" {...register("status")}>
              <option value="En seguimiento">En seguimiento</option>
              <option value="Pendiente de control">Pendiente de control</option>
              <option value="Próxima sesión agendada">Próxima sesión agendada</option>
              <option value="Alta temporal">Alta temporal</option>
            </select>
            {errors.status ? <p className="field-error">{errors.status.message}</p> : null}
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coffee px-6 py-4 text-sm font-bold text-white transition hover:bg-olive disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Guardar paciente
        </button>
      </form>
    </div>
  );
}
