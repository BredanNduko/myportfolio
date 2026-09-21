import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types/project";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card group">
      {project.image ? (
        <div className="project-visual">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>
      ) : (
        <div className="project-visual">
          <div className="project-grid" />
          <span className="relative z-10 font-mono text-xs text-muted-foreground">
            Visual pending
          </span>
        </div>
      )}
      <div className="p-6">
        <p className="section-kicker">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild size="sm">
            <Link to="/projects/$slug" params={{ slug: project.slug }}>
              Case Study <ArrowUpRight />
            </Link>
          </Button>
          {project.githubUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
