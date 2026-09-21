import { createFileRoute } from "@tanstack/react-router";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { PageIntro } from "@/components/sections/page-intro";
import { projects } from "@/data/projects";
export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Bredan Nduko" },
      {
        name: "description",
        content:
          "Selected projects, experiments, and technical systems by full-stack developer Bredan Nduko.",
      },
      { property: "og:title", content: "Projects | Bredan Nduko" },
      {
        property: "og:description",
        content: "Projects, experiments, and systems built by Bredan Nduko.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});
function Projects() {
  return (
    <>
      <PageIntro
        index="02 / Selected Work"
        title="Projects built to understand, solve, and learn."
        description="A visual home for practical applications, experiments, and systems. Verified project content will be added here progressively."
      />
      <section className="pb-24">
        <div className="page-shell">
          <ProjectsExplorer projects={projects} />
        </div>
      </section>
    </>
  );
}
