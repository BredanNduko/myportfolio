import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectGrid } from "@/components/projects/project-grid";
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} | Bredan Nduko` },
            { name: "description", content: loaderData.description },
            { property: "og:title", content: `${loaderData.title} | Bredan Nduko` },
            { property: "og:description", content: loaderData.description },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary_large_image" },
          ],
          links: [{ rel: "canonical", href: `/projects/${loaderData.slug}` }],
        }
      : {
          meta: [
            { title: "Project not found | Bredan Nduko" },
            { name: "robots", content: "noindex" },
          ],
        },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});
function ProjectDetail() {
  const project = Route.useLoaderData();
  const sections = [
    ["Overview", project.overview],
    ["Problem", project.problem],
    ["Solution", project.solution],
    ["Architecture", project.architecture],
    ["Challenges", project.challenges],
    ["Lessons learned", project.lessons],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));
  const related = projects
    .filter((item) => item.id !== project.id && item.category === project.category)
    .slice(0, 2);
  return (
    <>
      <section className="page-intro">
        <div className="page-shell">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>
          <p className="section-kicker mt-10">
            {project.category}
            {project.status ? ` · ${project.status}` : ""}
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-normal sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            {project.githubUrl && (
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="outline">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo <ArrowUpRight />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
      {project.image && (
        <div className="page-shell pb-16">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="aspect-[16/8] w-full border border-border object-cover"
          />
        </div>
      )}
      {sections.length > 0 && (
        <section className="section-pad border-t border-border">
          <div className="page-shell max-w-5xl">
            {sections.map(([heading, body]) => (
              <article
                key={heading}
                className="grid gap-4 border-b border-border py-8 sm:grid-cols-[12rem_1fr]"
              >
                <h2 className="font-mono text-xs uppercase text-primary">{heading}</h2>
                <p className="leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>
      )}{" "}
      {project.features?.length ? (
        <section className="section-pad">
          <div className="page-shell">
            <h2 className="text-3xl font-semibold">Features</h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {project.features.map((feature) => (
                <li className="border border-border bg-surface p-5" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <section className="section-pad">
        <div className="page-shell">
          <ProjectGallery images={project.gallery} />
        </div>
      </section>
      {related.length > 0 && (
        <section className="section-pad border-t border-border">
          <div className="page-shell">
            <h2 className="text-3xl font-semibold">Related projects</h2>
            <div className="mt-8">
              <ProjectGrid projects={related} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
function ProjectNotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-5 pt-20 text-center">
      <div>
        <p className="section-kicker">Project unavailable</p>
        <h1 className="mt-4 text-4xl font-semibold">This project hasn’t been added yet.</h1>
        <p className="mt-4 text-muted-foreground">
          The showcase is ready for verified project content.
        </p>
        <Button asChild className="mt-7">
          <Link to="/projects">
            <ArrowLeft />
            Back to projects
          </Link>
        </Button>
      </div>
    </section>
  );
}
