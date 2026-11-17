import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanDetailPage from "@/views/scan/ScanDetail";

export const Route = createFileRoute("/scan-dashboard/scans/$id")({
  head: () => ({
    meta: [
      { title: "Scan Detail | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Scan Detail | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanDetailPage />
    </ProtectedRoute>
  ),
});
