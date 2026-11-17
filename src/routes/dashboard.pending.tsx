import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import PendingPage from "@/views/dashboard/Pending";

export const Route = createFileRoute("/dashboard/pending")({
  head: () => ({
    meta: [
      { title: "Pending Results | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Pending Results | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <PendingPage />
    </ProtectedRoute>
  ),
});
