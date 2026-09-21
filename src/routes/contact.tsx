import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/sections/page-intro";
import { ContactPanel } from "@/components/sections/contact-panel";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bredan Nduko | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Connect with Bredan Nduko about an idea, project, technical problem, or opportunity.",
      },
      { property: "og:title", content: "Contact Bredan Nduko" },
      {
        property: "og:description",
        content: "Have an idea, project, technical problem, or opportunity? Let’s talk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <PageIntro
        index="08 / Contact"
        title="Start with a useful conversation."
        description="For project ideas, technical problems, collaboration, or opportunities, reach out through the verified channels below."
      />
      <ContactPanel full />
    </>
  ),
});
