import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
export function GithubPanel() {
  return (
    <section className="section-pad border-y border-border bg-surface">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <SectionHeader
          eyebrow="07 / Public code"
          title="Code & Open Source"
          description="Repositories and activity will appear here when GitHub data is connected."
        />
        <div className="border border-border bg-background p-6">
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center border border-border bg-surface">
              <Github className="size-5" />
            </span>
            <div>
              <p className="font-semibold">BredanNduko</p>
              <p className="font-mono text-xs text-muted-foreground">github.com/BredanNduko</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-px bg-border">
            <span className="empty-stat">Repositories</span>
            <span className="empty-stat">Languages</span>
            <span className="empty-stat">Activity</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Live GitHub details are not connected yet.
          </p>
          <Button asChild className="mt-5">
            <a href="https://github.com/BredanNduko" target="_blank" rel="noreferrer">
              Open GitHub <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
