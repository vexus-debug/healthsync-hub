import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import TestFormsPage from "@/views/dashboard/TestForms";

export const Route = createFileRoute("/dashboard/forms/")({
  head: () => ({
    meta: [
      { title: "Test Forms | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Test Forms | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <TestFormsPage />
    </ProtectedRoute>
  ),
});
