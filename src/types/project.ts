export type ProjectCategory =
  "Frontend" | "Backend" | "Full-Stack" | "Business Systems" | "AI" | "Networking" | "Experiments";

export type ProjectImage = {
  src: string;
  alt: string;
  kind?: "desktop" | "mobile" | "dashboard" | "architecture" | "logo" | "artwork";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image?: ProjectImage;
  gallery: ProjectImage[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string;
  lessons?: string;
};
