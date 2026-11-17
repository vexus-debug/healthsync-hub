import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/views/Login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Staff Login | Medvic Goodhealth" },
      { name: "description", content: "Staff sign-in for Medvic Goodhealth." },
      { property: "og:title", content: "Staff Login | Medvic Goodhealth" },
      { property: "og:description", content: "Staff sign-in for Medvic Goodhealth." },
    ],
  }),
  component: LoginPage,
});
