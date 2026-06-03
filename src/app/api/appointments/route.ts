import { NextResponse } from "next/server";

import { getSupabaseServerClient } from "@/lib/supabase";
import { appointmentSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = appointmentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Revisa los datos del formulario antes de enviar." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { message: "Supabase no está configurado. Revisa las variables de entorno." },
      { status: 500 }
    );
  }

  const { error } = await supabase.from("appointments").insert({
    full_name: parsed.data.full_name,
    phone: parsed.data.phone,
    treatment_interest: parsed.data.treatment_interest,
    preferred_date: parsed.data.preferred_date,
    preferred_time: parsed.data.preferred_time,
    comment: parsed.data.comment || null
  });

  if (error) {
    return NextResponse.json(
      { message: `No pudimos guardar la cita: ${error.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Cita registrada correctamente." });
}
