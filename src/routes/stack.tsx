import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/sections/page-intro";
import { StackContent } from "@/components/sections/stack-content";
import { LabContent } from "@/components/sections/lab-content";
export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Technical Stack | Bredan Nduko" },
      {
        name: "description",
        content:
          "Languages, frontend and backend tools, databases, and technical areas explored by Bredan Nduko.",
      },
      { property: "og:title", content: "Technical Stack | Bredan Nduko" },
      {
        property: "og:description",
        content: "The technologies and engineering areas behind Bredan Nduko’s work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/stack" }],
  }),
  component: () => (
    <>
      <PageIntro
        index="03 / Stack"
        title="Tools chosen for the problem at hand."
        description="A working set of languages, frameworks, databases, and systems knowledge—not a collection of arbitrary percentages."
      />
      <StackContent />
      <LabContent />
    </>
  ),
});
