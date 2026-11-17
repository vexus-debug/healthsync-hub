import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/views/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Medvic Goodhealth" },
      { name: "description", content: "Learn about Medvic Goodhealth Medical Laboratory, our mission and values." },
      { property: "og:title", content: "About Us | Medvic Goodhealth" },
      { property: "og:description", content: "Learn about Medvic Goodhealth Medical Laboratory, our mission and values." },
    ],
  }),
  component: AboutPage,
});
