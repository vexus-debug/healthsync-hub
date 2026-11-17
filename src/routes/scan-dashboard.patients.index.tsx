import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanPatientsPage from "@/views/scan/Patients";

export const Route = createFileRoute("/scan-dashboard/patients/")({
  head: () => ({
    meta: [
      { title: "Scan Patients | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Scan Patients | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanPatientsPage />
    </ProtectedRoute>
  ),
});
