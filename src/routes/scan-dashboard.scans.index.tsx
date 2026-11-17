import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScansListPage from "@/views/scan/Scans";

export const Route = createFileRoute("/scan-dashboard/scans/")({
  head: () => ({
    meta: [
      { title: "Scans | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Scans | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScansListPage />
    </ProtectedRoute>
  ),
});
