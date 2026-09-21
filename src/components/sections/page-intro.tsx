import type { ReactNode } from "react";
export function PageIntro({
  index,
  title,
  description,
  actions,
}: {
  index: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="page-shell">
        <p className="section-kicker">{index}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
