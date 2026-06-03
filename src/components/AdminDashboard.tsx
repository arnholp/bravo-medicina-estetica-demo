"use client";

import { Loader2, LockKeyhole, RefreshCw } from "lucide-react";
import { FormEvent, useState } from "react";

import { AdminTable } from "@/components/AdminTable";
import type { AppointmentRecord, PatientRecord } from "@/lib/schemas";

type AdminData = {
  appointments: AppointmentRecord[];
  patients: PatientRecord[];
};

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadData(currentPassword = password) {
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": currentPassword
      }
    });
    const payload = (await response.json()) as AdminData & { message?: string };

    setIsLoading(false);

    if (!response.ok) {
      setError(payload.message || "No pudimos cargar el panel.");
      return;
    }

    setData({
      appointments: payload.appointments || [],
      patients: payload.patients || []
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loadData(password);
  }

  if (!data) {
    return (
      <div className="container-shell section-pad">
        <div className="mx-auto max-w-xl rounded-3xl border border-linen bg-white p-8 shadow-soft">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/18 text-gold">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="mt-5 font-display text-4xl text-coffee">Panel admin</h1>
          <p className="mt-3 text-sm leading-7 text-coffee/65">
            Ingresa la contraseña definida en la variable de entorno ADMIN_PASSWORD.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
            <label>
              <span className="field-label">Contraseña</span>
              <input
                className="field-input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="ADMIN_PASSWORD"
              />
            </label>
            {error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            ) : null}
            <button
              type="submit"
              disabled={isLoading || password.length === 0}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-6 py-4 text-sm font-bold text-white transition hover:bg-olive disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LockKeyhole className="h-4 w-4" />}
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container-shell section-pad">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Operación demo</p>
          <h1 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">Panel admin</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-coffee/65">
            Revisa citas, pacientes y mensajes de seguimiento preparados para copiar.
          </p>
        </div>
        <button
          type="button"
          onClick={() => loadData()}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-linen bg-white px-5 py-3 text-sm font-bold text-coffee transition hover:border-gold disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Actualizar
        </button>
      </div>

      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-8">
        <AdminTable type="appointments" title="Citas registradas" records={data.appointments} />
        <AdminTable type="patients" title="Pacientes registrados" records={data.patients} />
      </div>
    </div>
  );
}
