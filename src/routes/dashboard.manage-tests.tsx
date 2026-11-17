import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ManageTestsPage from "@/views/dashboard/ManageTests";

export const Route = createFileRoute("/dashboard/manage-tests")({
  head: () => ({
    meta: [
      { title: "Manage Tests | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Manage Tests | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ManageTestsPage />
    </ProtectedRoute>
  ),
});
