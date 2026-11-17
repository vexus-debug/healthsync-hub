import { createFileRoute } from "@tanstack/react-router";
import FAQsPage from "@/views/FAQs";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Medvic Goodhealth" },
      { name: "description", content: "Answers to common questions about our lab tests and services." },
      { property: "og:title", content: "FAQs | Medvic Goodhealth" },
      { property: "og:description", content: "Answers to common questions about our lab tests and services." },
    ],
  }),
  component: FAQsPage,
});
