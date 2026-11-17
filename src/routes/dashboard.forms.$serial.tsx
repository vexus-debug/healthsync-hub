import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ResultEntryPage from "@/views/dashboard/ResultEntry";

export const Route = createFileRoute("/dashboard/forms/$serial")({
  head: () => ({
    meta: [
      { title: "Result Entry | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Result Entry | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ResultEntryPage />
    </ProtectedRoute>
  ),
});
