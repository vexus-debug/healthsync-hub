import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ShopAdminPage from "@/views/dashboard/ShopAdmin";

export const Route = createFileRoute("/dashboard/shop")({
  head: () => ({
    meta: [
      { title: "Shop Admin | Medvic Goodhealth" },
      { name: "description", content: "Medvic Goodhealth staff area." },
      { property: "og:title", content: "Shop Admin | Medvic Goodhealth" },
      { property: "og:description", content: "Medvic Goodhealth staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ShopAdminPage />
    </ProtectedRoute>
  ),
});
