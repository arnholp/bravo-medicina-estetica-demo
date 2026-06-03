import type { Metadata } from "next";

import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin | Bravo Medicina Estética",
  description: "Panel simple para revisar citas y pacientes de la demo."
};

export default function AdminPage() {
  return <AdminDashboard />;
}
