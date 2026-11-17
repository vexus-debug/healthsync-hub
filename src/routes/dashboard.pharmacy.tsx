import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import PharmacyAdminPage from "@/views/dashboard/PharmacyAdmin";

export const Route = createFileRoute("/dashboard/pharmacy")({
  head: () => ({
    meta: [
      { title: "Pharmacy Admin | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Pharmacy Admin | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <PharmacyAdminPage />
    </ProtectedRoute>
  ),
});
