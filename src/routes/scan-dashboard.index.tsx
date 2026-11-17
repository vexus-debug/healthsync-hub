import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanOverviewPage from "@/views/scan/Overview";

export const Route = createFileRoute("/scan-dashboard/")({
  head: () => ({
    meta: [
      { title: "Scan Overview | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Scan Overview | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanOverviewPage />
    </ProtectedRoute>
  ),
});
