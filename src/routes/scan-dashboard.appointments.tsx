import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanAppointmentsPage from "@/views/scan/Appointments";

export const Route = createFileRoute("/scan-dashboard/appointments")({
  head: () => ({
    meta: [
      { title: "Appointments | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Appointments | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanAppointmentsPage />
    </ProtectedRoute>
  ),
});
