import type { Project, ProjectCategory } from "@/types/project";

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "Full-Stack",
  "Business Systems",
  "AI",
  "Networking",
  "Experiments",
] as const satisfies readonly (ProjectCategory | "All")[];

// Intentionally empty until Bredan adds verified project content.
export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
