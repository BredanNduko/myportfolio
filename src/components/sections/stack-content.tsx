import { useState } from "react";
import { SectionHeader } from "@/components/shared/section-header";
const groups = {
  Languages: ["JavaScript", "TypeScript", "Go", "Python", "PHP", "SQL"],
  Frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Go", "REST APIs", "Laravel"],
  Databases: ["PostgreSQL", "MySQL", "SQLite"],
  Tools: ["Git", "Linux", "Docker", "VS Code"],
  Other: ["AI/ML fundamentals", "AI evaluation", "Networking", "Blockchain concepts", "Automation"],
};
const descriptions: Record<string, string> = {
  Languages: "Tools for expressing application and systems logic.",
  Frontend: "Interfaces built for clarity, speed, and real users.",
  Backend: "Services, APIs, and the logic behind applications.",
  Databases: "Structured, reliable storage for application data.",
  Tools: "The daily environment for building and shipping software.",
  Other: "Active areas of technical study and experimentation.",
};
export function StackContent() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="section-pad">
      <div className="page-shell">
        <SectionHeader
          eyebrow="03 / Capabilities"
          title="Technical Stack"
          description="A practical toolkit spanning interfaces, services, data, and the systems around them."
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(groups).map(([group, items]) => (
            <article key={group} className="bg-background p-6">
              <p className="section-kicker">{group}</p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">
                {active && items.includes(active)
                  ? `${active} — ${descriptions[group]}`
                  : descriptions[group]}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(active === item ? null : item)}
                    className="tech-button"
                    aria-pressed={active === item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
