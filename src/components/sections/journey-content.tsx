import { SectionHeader } from "@/components/shared/section-header";
const milestones = [
  "Software Development",
  "Full-Stack Development",
  "Practical Engineering Projects",
  "Go / Python",
  "Algorithms & Data Structures",
  "Networking & Systems",
  "AI & Automation",
  "Modern Full-Stack Applications",
];
export function JourneyContent() {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <SectionHeader
          eyebrow="05 / Direction"
          title="My Journey"
          description="A progression shaped by building, studying fundamentals, and following technical curiosity."
        />
        <ol className="mt-12 max-w-4xl border-l border-border">
          {milestones.map((item, index) => (
            <li key={item} className="relative grid gap-2 pb-8 pl-8 sm:grid-cols-[6rem_1fr]">
              <span className="absolute -left-1.5 top-1 size-3 border border-primary bg-background" />
              <span className="font-mono text-[10px] text-primary">
                STEP {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
