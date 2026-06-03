import { NextResponse } from "next/server";

import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const receivedPassword = request.headers.get("x-admin-password");

  if (!expectedPassword) {
    return NextResponse.json(
      { message: "ADMIN_PASSWORD no está configurado en el entorno." },
      { status: 500 }
    );
  }

  if (!receivedPassword || receivedPassword !== expectedPassword) {
    return NextResponse.json({ message: "Contraseña incorrecta." }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { message: "Supabase no está configurado. Revisa las variables de entorno." },
      { status: 500 }
    );
  }

  const [appointmentsResult, patientsResult] = await Promise.all([
    supabase.from("appointments").select("*").order("created_at", { ascending: false }),
    supabase.from("patients").select("*").order("created_at", { ascending: false })
  ]);

  if (appointmentsResult.error) {
    return NextResponse.json(
      { message: `No pudimos cargar citas: ${appointmentsResult.error.message}` },
      { status: 500 }
    );
  }

  if (patientsResult.error) {
    return NextResponse.json(
      { message: `No pudimos cargar pacientes: ${patientsResult.error.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({
    appointments: appointmentsResult.data || [],
    patients: patientsResult.data || []
  });
}
