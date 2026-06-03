# Bravo Medicina Estética Demo

Aplicación web demo para **Bravo Medicina Estética**, una clínica estética en Juliaca, Perú. La experiencia está pensada como sistema de conversión, reserva, educación y seguimiento de pacientes.

> Demo no oficial. El contenido es orientativo y evita promesas médicas o resultados garantizados. Todo tratamiento debe pasar por evaluación profesional.

## Stack

- Next.js 14 con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- React Hook Form + Zod
- Lucide React

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## Variables de entorno

Crea `.env.local` tomando como base `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
ADMIN_PASSWORD=bravo-demo-admin
NEXT_PUBLIC_WHATSAPP_PHONE=51972657382
```

`NEXT_PUBLIC_WHATSAPP_PHONE` es opcional. Si se deja vacío, la app usa el placeholder `51972657382`.

## Configurar Supabase

1. Crea un proyecto en [Supabase](https://supabase.com).
2. En Project Settings > API, copia:
   - Project URL en `NEXT_PUBLIC_SUPABASE_URL`
   - anon public key en `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Ejecuta este SQL en el SQL Editor de Supabase:

```sql
create extension if not exists "pgcrypto";

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  treatment_interest text not null,
  preferred_date date not null,
  preferred_time text not null,
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists patients (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  treatment text not null,
  session_date date not null,
  recommended_product text not null,
  next_session date not null,
  status text not null default 'En seguimiento',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table appointments disable row level security;
alter table patients disable row level security;
```

Para producción, conviene activar RLS, usar políticas específicas o mover consultas administrativas a una clave de servicio protegida solo en servidor.

## Panel admin

Ruta:

```bash
/admin
```

Usa la contraseña definida en:

```env
ADMIN_PASSWORD
```

El panel muestra citas y pacientes registrados. En pacientes incluye un botón para copiar un mensaje de seguimiento.

## Cambiar el número de WhatsApp

La forma recomendada es editar:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=51972657382
```

También puedes cambiar el valor base en:

```bash
src/constants/data.ts
```

Busca:

```ts
phone: "51972657382"
```

## Editar tratamientos y contenido

Todo el contenido demo está centralizado en:

```bash
src/constants/data.ts
```

Desde ahí puedes editar:

- Tratamientos
- Categorías
- Testimonios simulados
- Timeline de seguimiento
- Textos de confianza
- Imágenes placeholder
- Datos de contacto

## Estructura principal

```bash
src/app
src/app/admin
src/app/tratamientos
src/app/api/appointments
src/app/api/patients
src/app/api/admin
src/components
src/constants
src/lib
public
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Próximos pasos recomendados

- Integrar n8n para automatizar seguimientos.
- Automatizar WhatsApp con proveedor oficial o CRM compatible.
- Agregar un CRM con historial de tratamientos y notas internas.
- Crear seguimiento automático por día 1, 3, 7, 15 y 30.
- Agregar autenticación real para el panel admin.
- Activar RLS en Supabase con políticas seguras.
- Reemplazar testimonios simulados por testimonios autorizados.
