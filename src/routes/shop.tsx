import { createFileRoute } from "@tanstack/react-router";
import ShopPage from "@/views/Shop";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop | Medvic Goodhealth" },
      { name: "description", content: "Health products from Medvic Goodhealth." },
      { property: "og:title", content: "Shop | Medvic Goodhealth" },
      { property: "og:description", content: "Health products from Medvic Goodhealth." },
    ],
  }),
  component: ShopPage,
});
