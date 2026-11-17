import { createFileRoute } from "@tanstack/react-router";
import PharmacyPage from "@/views/Pharmacy";

export const Route = createFileRoute("/pharmacy")({
  head: () => ({
    meta: [
      { title: "Pharmacy | Medvic Goodhealth" },
      { name: "description", content: "Medicines and pharmacy services from Medvic Goodhealth." },
      { property: "og:title", content: "Pharmacy | Medvic Goodhealth" },
      { property: "og:description", content: "Medicines and pharmacy services from Medvic Goodhealth." },
    ],
  }),
  component: PharmacyPage,
});
