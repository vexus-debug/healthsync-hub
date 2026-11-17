import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanActivityPage from "@/views/scan/Activity";

export const Route = createFileRoute("/scan-dashboard/activity")({
  head: () => ({
    meta: [
      { title: "Activity | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Activity | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanActivityPage />
    </ProtectedRoute>
  ),
});
