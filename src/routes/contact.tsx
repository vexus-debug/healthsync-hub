import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/views/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Medvic Goodhealth" },
      { name: "description", content: "Get in touch with Medvic Goodhealth Medical Laboratory." },
      { property: "og:title", content: "Contact Us | Medvic Goodhealth" },
      { property: "og:description", content: "Get in touch with Medvic Goodhealth Medical Laboratory." },
    ],
  }),
  component: ContactPage,
});
