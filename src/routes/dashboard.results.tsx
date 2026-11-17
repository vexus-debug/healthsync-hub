import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ResultsSearchPage from "@/views/dashboard/ResultsSearch";

export const Route = createFileRoute("/dashboard/results")({
  head: () => ({
    meta: [
      { title: "Results Search | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Results Search | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ResultsSearchPage />
    </ProtectedRoute>
  ),
});
