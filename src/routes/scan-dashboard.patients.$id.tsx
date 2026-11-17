import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanPatientDetailPage from "@/views/scan/PatientDetail";

export const Route = createFileRoute("/scan-dashboard/patients/$id")({
  head: () => ({
    meta: [
      { title: "Patient Detail | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Patient Detail | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanPatientDetailPage />
    </ProtectedRoute>
  ),
});
