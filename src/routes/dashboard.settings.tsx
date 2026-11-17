import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import DashboardSettingsPage from "@/views/dashboard/Settings";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({
    meta: [
      { title: "Settings | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Settings | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <DashboardSettingsPage />
    </ProtectedRoute>
  ),
});
