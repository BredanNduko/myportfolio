import { createFileRoute } from "@tanstack/react-router";
import { AboutContent } from "@/components/sections/about-content";
import { LabContent } from "@/components/sections/lab-content";
import { PageIntro } from "@/components/sections/page-intro";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bredan Nduko | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Learn how Bredan Nduko approaches full-stack development, backend systems, APIs, databases, networking, and continuous learning.",
      },
      { property: "og:title", content: "About Bredan Nduko" },
      {
        property: "og:description",
        content:
          "A full-stack developer in Kenya learning through practical projects and real technical problems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});
function About() {
  return (
    <>
      <PageIntro
        index="01 / About"
        title="Software, understood as a whole system."
        description="I care about what people see, what services do behind the interface, and how data and infrastructure keep the experience reliable."
      />
      <AboutContent />
      <LabContent />
    </>
  );
}
