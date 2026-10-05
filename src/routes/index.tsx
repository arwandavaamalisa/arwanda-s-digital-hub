import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwanda Nur Fatta Amalisa — Virtual Assistant & Business Support" },
      {
        name: "description",
        content:
          "Reliable virtual assistance, business support, digital operations, CRM, website, and marketing support for founders and growing teams.",
      },
      { property: "og:title", content: "Arwanda Nur Fatta Amalisa — Virtual Assistant & Business Support" },
      {
        property: "og:description",
        content: "Reliable remote support that keeps international businesses organized, responsive, and moving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});