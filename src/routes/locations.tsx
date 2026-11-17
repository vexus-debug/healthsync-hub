import { createFileRoute } from "@tanstack/react-router";
import LocationsPage from "@/views/Locations";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Medvic Goodhealth" },
      { name: "description", content: "Find Medvic Goodhealth laboratory locations in Port Harcourt." },
      { property: "og:title", content: "Locations | Medvic Goodhealth" },
      { property: "og:description", content: "Find Medvic Goodhealth laboratory locations in Port Harcourt." },
    ],
  }),
  component: LocationsPage,
});
