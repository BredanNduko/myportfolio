import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Python",
  "PostgreSQL",
  "Git",
  "Linux",
  "Docker",
];
export function TechMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="border-y border-border bg-surface">
      <div className="page-shell flex items-center gap-4 overflow-hidden py-3">
        <span className="shrink-0 font-mono text-[10px] uppercase text-primary">Working stack</span>
        <div className="marquee-mask min-w-0 flex-1 overflow-hidden">
          <div className={`marquee-track ${paused ? "[animation-play-state:paused]" : ""}`}>
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-primary" />
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setPaused((v) => !v)}
          aria-label={paused ? "Play technology ticker" : "Pause technology ticker"}
        >
          {paused ? <Play /> : <Pause />}
        </Button>
      </div>
    </div>
  );
}
