import { cn } from "@/lib/utils";

type Props = { eyebrow?: string; title: string; description?: string; className?: string };

export function SectionHeader({ eyebrow, title, description, className }: Props) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow && <p className="section-kicker">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
