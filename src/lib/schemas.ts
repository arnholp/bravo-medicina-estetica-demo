import { z } from "zod";

const phoneRegex = /^[0-9+\s()-]{7,20}$/;

export const appointmentSchema = z.object({
  full_name: z.string().min(3, "Ingresa tu nombre completo"),
  phone: z.string().regex(phoneRegex, "Ingresa un celular válido"),
  treatment_interest: z.string().min(2, "Selecciona o escribe un tratamiento"),
  preferred_date: z.string().min(1, "Selecciona una fecha"),
  preferred_time: z.string().min(1, "Selecciona un horario"),
  comment: z.string().max(500, "Máximo 500 caracteres").optional().or(z.literal(""))
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export type AppointmentRecord = AppointmentInput & {
  id: string;
  created_at: string;
};
