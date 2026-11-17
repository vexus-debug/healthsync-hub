import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanRegisterPage from "@/views/scan/Register";

export const Route = createFileRoute("/scan-dashboard/register")({
  head: () => ({
    meta: [
      { title: "Register Scan | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Register Scan | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanRegisterPage />
    </ProtectedRoute>
  ),
});
