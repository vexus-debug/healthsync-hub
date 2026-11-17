import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import CompletedResultsPage from "@/views/dashboard/Completed";

export const Route = createFileRoute("/dashboard/completed")({
  head: () => ({
    meta: [
      { title: "Completed Results | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Completed Results | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <CompletedResultsPage />
    </ProtectedRoute>
  ),
});
