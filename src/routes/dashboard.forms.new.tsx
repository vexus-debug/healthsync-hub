import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import NewTestFormPage from "@/views/dashboard/NewTestForm";

export const Route = createFileRoute("/dashboard/forms/new")({
  head: () => ({
    meta: [
      { title: "New Test Form | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "New Test Form | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <NewTestFormPage />
    </ProtectedRoute>
  ),
});
