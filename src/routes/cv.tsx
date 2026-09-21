import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/sections/page-intro";
import { CvPanel } from "@/components/sections/cv-panel";
export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "Curriculum Vitae | Bredan Nduko" },
      {
        name: "description",
        content: "Curriculum vitae preview for Bredan Nduko, Full-Stack Developer based in Kenya.",
      },
      { property: "og:title", content: "Curriculum Vitae | Bredan Nduko" },
      {
        property: "og:description",
        content: "CV and technical profile for full-stack developer Bredan Nduko.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: () => (
    <>
      <PageIntro
        index="06 / CV"
        title="A concise record of the work and learning."
        description="Verified CV content and downloadable files will live here without inflated claims or invented history."
      />
      <CvPanel full />
    </>
  ),
});
