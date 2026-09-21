import { SectionHeader } from "@/components/shared/section-header";
const details = [
  ["Role", "Full-Stack Developer"],
  ["Location", "Kenya"],
  ["Focus", "Web Applications · Backend Systems · APIs · Databases"],
  ["Exploring", "AI · Systems · Networking · Blockchain"],
];
export function AboutContent({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad">
      <div className="page-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <SectionHeader eyebrow="01 / Profile" title="About Me" />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            I’m a full-stack developer who enjoys understanding software as a complete system—from
            the interface people use to the APIs, databases, networking, and infrastructure behind
            it.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            I learn by building practical projects, investigating how things work, and solving real
            technical problems. My focus is reliable, useful software and steady growth across the
            stack.
          </p>
          {!compact && (
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Current areas of exploration include backend engineering, AI evaluation, automation,
              systems, and Bitcoin and blockchain development.
            </p>
          )}
        </div>
        <dl className="border-t border-border">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-border py-5 sm:grid-cols-[8rem_1fr]"
            >
              <dt className="font-mono text-[11px] uppercase text-primary">{label}</dt>
              <dd className="text-sm leading-6 text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
