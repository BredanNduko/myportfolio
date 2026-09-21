import { ArrowUpRight, Github, ImagePlus, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectPlaceholder({ index }: { index: number }) {
  return (
    <article className="project-card group">
      <div className="project-visual" aria-label="Project image placeholder">
        <div className="project-grid" />
        <div className="relative z-10 w-[72%] border border-border/80 bg-panel/90 shadow-2xl">
          <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="ml-auto font-mono text-[9px] text-muted-foreground">
              PROJECT_{String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="grid aspect-[16/8] place-items-center">
            <div className="text-center">
              <ImagePlus className="mx-auto size-5 text-primary" />
              <p className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">
                Add project image
              </p>
            </div>
          </div>
        </div>
        <div className="project-overlay">
          <span className="font-mono text-xs text-primary">Ready for content</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase text-muted-foreground">
            Category placeholder
          </p>
          <Layers3 className="size-4 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Project title</h3>
        <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
          Add a concise description of the problem, the solution, and the value of the project.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="tech-tag">Technology</span>
          <span className="tech-tag">Technology</span>
          <span className="tech-tag">Technology</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 project-actions">
          <Button size="sm" variant="outline" disabled>
            <Github />
            GitHub
          </Button>
          <Button size="sm" variant="outline" disabled>
            Live Demo <ArrowUpRight />
          </Button>
          <Button size="sm" variant="ghost" disabled>
            Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}
