import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScientistsPage from "@/views/dashboard/Scientists";

export const Route = createFileRoute("/dashboard/scientists")({
  head: () => ({
    meta: [
      { title: "Scientists | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Scientists | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScientistsPage />
    </ProtectedRoute>
  ),
});
