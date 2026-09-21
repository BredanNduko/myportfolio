import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/sections/page-intro";
import { JourneyContent } from "@/components/sections/journey-content";
export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Developer Journey | Bredan Nduko" },
      {
        name: "description",
        content:
          "Bredan Nduko’s progression through full-stack development, systems, networking, AI, and practical engineering.",
      },
      { property: "og:title", content: "Developer Journey | Bredan Nduko" },
      {
        property: "og:description",
        content: "A developer journey shaped by practical projects and technical curiosity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: () => (
    <>
      <PageIntro
        index="05 / Journey"
        title="Learning by following the system deeper."
        description="Each stage builds on the last—from software interfaces to APIs, data, networking, systems, and emerging tools."
      />
      <JourneyContent />
    </>
  ),
});
