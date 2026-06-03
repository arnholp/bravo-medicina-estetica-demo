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

export const patientSchema = z.object({
  full_name: z.string().min(3, "Ingresa el nombre del paciente"),
  phone: z.string().regex(phoneRegex, "Ingresa un celular válido"),
  treatment: z.string().min(2, "Indica el tratamiento"),
  session_date: z.string().min(1, "Selecciona la fecha de sesión"),
  recommended_product: z.string().min(2, "Indica el producto recomendado"),
  next_session: z.string().min(1, "Selecciona la próxima sesión"),
  status: z.string().min(2, "Indica el estado")
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type PatientInput = z.infer<typeof patientSchema>;

export type AppointmentRecord = AppointmentInput & {
  id: string;
  created_at: string;
};

export type PatientRecord = PatientInput & {
  id: string;
  created_at: string;
};
