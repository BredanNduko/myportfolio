import { useState } from "react";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/project";
import { ProjectGrid } from "./project-grid";
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <>
      <div
        className="scrollbar-none mt-8 flex gap-2 overflow-x-auto pb-2"
        role="group"
        aria-label="Filter projects"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className="filter-button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {visible.length === 0 && projects.length > 0 ? (
          <div className="empty-state">
            <p className="font-medium">No project in {filter} yet.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              More work will appear here as it is documented.
            </p>
          </div>
        ) : (
          <ProjectGrid projects={visible} placeholders={4} />
        )}
      </div>
    </>
  );
}
