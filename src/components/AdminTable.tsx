"use client";

import { Copy, MessageSquareText } from "lucide-react";
import { useState } from "react";

import { formatDate, formatDateTime } from "@/lib/format";
import type { AppointmentRecord, PatientRecord } from "@/lib/schemas";

type AdminTableProps =
  | {
      type: "appointments";
      title: string;
      records: AppointmentRecord[];
    }
  | {
      type: "patients";
      title: string;
      records: PatientRecord[];
    };

function patientFollowUpMessage(patient: PatientRecord) {
  return `Hola ${patient.full_name}, somos Bravo Medicina Estética. Queremos saber cómo te sientes después de tu sesión de ${patient.treatment}. Recuerda mantener los cuidados indicados y usar ${patient.recommended_product}. Si tienes alguna duda, escríbenos para orientarte.`;
}

export function AdminTable(props: AdminTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyMessage(patient: PatientRecord) {
    await navigator.clipboard.writeText(patientFollowUpMessage(patient));
    setCopiedId(patient.id);
    setTimeout(() => setCopiedId(null), 1800);
  }

  return (
    <section className="rounded-3xl border border-linen bg-white p-5 shadow-soft">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {props.type === "appointments" ? "Reservas" : "Seguimiento"}
          </p>
          <h2 className="font-display text-3xl text-coffee">{props.title}</h2>
        </div>
        <span className="rounded-full bg-blush px-4 py-2 text-sm font-bold text-coffee/70">
          {props.records.length} registros
        </span>
      </div>

      {props.records.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-linen bg-cream p-6 text-sm text-coffee/65">
          Aún no hay registros para mostrar.
        </div>
      ) : null}

      {props.type === "appointments" && props.records.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.18em] text-coffee/45">
              <tr>
                <th className="whitespace-nowrap px-3 py-3">Paciente</th>
                <th className="whitespace-nowrap px-3 py-3">Celular</th>
                <th className="whitespace-nowrap px-3 py-3">Tratamiento</th>
                <th className="whitespace-nowrap px-3 py-3">Fecha</th>
                <th className="whitespace-nowrap px-3 py-3">Horario</th>
                <th className="whitespace-nowrap px-3 py-3">Registro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linen">
              {props.records.map((appointment) => (
                <tr key={appointment.id} className="align-top">
                  <td className="px-3 py-4 font-semibold text-coffee">{appointment.full_name}</td>
                  <td className="px-3 py-4 text-coffee/70">{appointment.phone}</td>
                  <td className="px-3 py-4 text-coffee/70">{appointment.treatment_interest}</td>
                  <td className="px-3 py-4 text-coffee/70">{formatDate(appointment.preferred_date)}</td>
                  <td className="px-3 py-4 text-coffee/70">{appointment.preferred_time}</td>
                  <td className="px-3 py-4 text-coffee/60">{formatDateTime(appointment.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {props.type === "patients" && props.records.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.18em] text-coffee/45">
              <tr>
                <th className="whitespace-nowrap px-3 py-3">Paciente</th>
                <th className="whitespace-nowrap px-3 py-3">Estado</th>
                <th className="whitespace-nowrap px-3 py-3">Tratamiento</th>
                <th className="whitespace-nowrap px-3 py-3">Fecha</th>
                <th className="whitespace-nowrap px-3 py-3">Producto</th>
                <th className="whitespace-nowrap px-3 py-3">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linen">
              {props.records.map((patient) => (
                <tr key={patient.id} className="align-top">
                  <td className="px-3 py-4">
                    <p className="font-semibold text-coffee">{patient.full_name}</p>
                    <p className="text-xs text-coffee/50">{patient.phone}</p>
                  </td>
                  <td className="px-3 py-4">
                    <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-bold text-olive">
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-coffee/70">{patient.treatment}</td>
                  <td className="px-3 py-4 text-coffee/70">{formatDate(patient.session_date)}</td>
                  <td className="px-3 py-4 text-coffee/70">{patient.recommended_product}</td>
                  <td className="px-3 py-4">
                    <button
                      type="button"
                      onClick={() => copyMessage(patient)}
                      className="inline-flex items-center gap-2 rounded-full bg-coffee px-4 py-2 text-xs font-bold text-white transition hover:bg-olive"
                    >
                      {copiedId === patient.id ? (
                        <>
                          <MessageSquareText className="h-4 w-4" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copiar mensaje
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}
