import { Binary, Bot, Braces, Database, Network, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
const labs = [
  ["Networking", Network, ["TCP", "HTTP / HTTPS", "SSH", "WebSockets", "Ports", "nmap", "netcat"]],
  ["Backend", Braces, ["Go", "Python", "REST APIs", "Databases", "Authentication"]],
  ["Systems", Binary, ["Linux", "Processes", "Permissions", "CLI"]],
  ["AI", Bot, ["AI evaluation", "AI-assisted development", "ML fundamentals"]],
  ["Automation", Workflow, ["Scripts", "Workflows", "Developer tooling"]],
  ["Databases", Database, ["PostgreSQL", "MySQL", "SQLite", "Data modeling"]],
] as const;
export function LabContent() {
  return (
    <section className="section-pad border-y border-border bg-surface">
      <div className="page-shell">
        <SectionHeader
          eyebrow="04 / Ongoing exploration"
          title="Developer Lab"
          description="A working space for investigating technologies beyond the immediate feature list."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {labs.map(([title, Icon, items], index) => (
            <article className="lab-card" key={title}>
              <div className="flex items-start justify-between">
                <Icon className="size-5 text-primary" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  LAB_0{index + 1}
                </span>
              </div>
              <h3 className="mt-12 text-lg font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {items.map((item) => (
                  <span key={item} className="font-mono text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
