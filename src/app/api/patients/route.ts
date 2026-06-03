import { NextResponse } from "next/server";

import { patientSchema } from "@/lib/schemas";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = patientSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Revisa los datos del paciente antes de enviar." },
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

  const { error } = await supabase.from("patients").insert({
    full_name: parsed.data.full_name,
    phone: parsed.data.phone,
    treatment: parsed.data.treatment,
    session_date: parsed.data.session_date,
    recommended_product: parsed.data.recommended_product,
    next_session: parsed.data.next_session,
    status: parsed.data.status
  });

  if (error) {
    return NextResponse.json(
      { message: `No pudimos guardar el paciente: ${error.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Paciente registrado correctamente." });
}
