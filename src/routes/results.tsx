import { createFileRoute } from "@tanstack/react-router";
import ResultsPage from "@/views/Results";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Check Results | Medvic Goodhealth" },
      { name: "description", content: "Securely check your laboratory results online." },
      { property: "og:title", content: "Check Results | Medvic Goodhealth" },
      { property: "og:description", content: "Securely check your laboratory results online." },
    ],
  }),
  component: ResultsPage,
});
