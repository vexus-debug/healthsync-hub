import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/views/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Lab Tests & Services | Medvic Goodhealth" },
      { name: "description", content: "Browse confidential laboratory tests and medical services." },
      { property: "og:title", content: "Lab Tests & Services | Medvic Goodhealth" },
      { property: "og:description", content: "Browse confidential laboratory tests and medical services." },
    ],
  }),
  component: ServicesPage,
});
