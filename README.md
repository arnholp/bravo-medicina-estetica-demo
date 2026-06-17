# Bravo Medicina Estetica Demo

Aplicacion web demo para **Bravo Medicina Estetica**, una clinica estetica en Juliaca, Peru. La experiencia esta pensada como sistema de conversion, reserva y educacion de pacientes.

> Demo no oficial. El contenido es orientativo y evita promesas medicas o resultados garantizados. Todo tratamiento debe pasar por evaluacion profesional.

## Stack

- Next.js 14 con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- React Hook Form + Zod
- Lucide React

## Instalacion

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
NEXT_PUBLIC_WHATSAPP_PHONE=51972657382
```

`NEXT_PUBLIC_WHATSAPP_PHONE` es opcional. Si se deja vacio, la app usa el placeholder `51972657382`.

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

alter table appointments disable row level security;
```

Para produccion, conviene activar RLS y usar politicas especificas para inserciones desde el formulario.

## Cambiar el numero de WhatsApp

La forma recomendada es editar:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=51972657382
```

Tambien puedes cambiar el valor base en:

```bash
src/constants/data.ts
```

Busca:

```ts
phone: "51972657382"
```

## Editar tratamientos y contenido

Todo el contenido demo esta centralizado en:

```bash
src/constants/data.ts
```

Desde ahi puedes editar:

- Tratamientos
- Categorias
- Testimonios simulados
- Pagina de Miss Peru Puno
- Textos de confianza
- Imagenes placeholder
- Datos de contacto

## Estructura principal

```bash
src/app
src/app/miss-peru-puno
src/app/tratamientos
src/app/api/appointments
src/components
src/constants
src/lib
public
```

## Scripts

```bash
npm run dev
npm run build
npm run build:pages
npm run lint
npm run typecheck
```

## Proximos pasos recomendados

- Automatizar WhatsApp con proveedor oficial o CRM compatible.
- Agregar CRM si se requiere gestion interna de pacientes.
- Integrar Vercel o Netlify si se necesita backend serverless para formularios.
- Activar RLS en Supabase con politicas seguras.
- Reemplazar testimonios simulados por testimonios autorizados.
