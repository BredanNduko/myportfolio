import type { Project } from "@/types/project";
import { ProjectCard } from "./project-card";
import { ProjectPlaceholder } from "./project-placeholder";
export function ProjectGrid({
  projects,
  placeholders = 3,
}: {
  projects: Project[];
  placeholders?: number;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {projects.length
        ? projects.map((project) => <ProjectCard key={project.id} project={project} />)
        : Array.from({ length: placeholders }, (_, index) => (
            <ProjectPlaceholder index={index} key={index} />
          ))}
    </div>
  );
}
