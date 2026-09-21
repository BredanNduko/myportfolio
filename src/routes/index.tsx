import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalVisual } from "@/components/sections/terminal-visual";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { AboutContent } from "@/components/sections/about-content";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";
import { StackContent } from "@/components/sections/stack-content";
import { LabContent } from "@/components/sections/lab-content";
import { JourneyContent } from "@/components/sections/journey-content";
import { CvPanel } from "@/components/sections/cv-panel";
import { GithubPanel } from "@/components/sections/github-panel";
import { ContactPanel } from "@/components/sections/contact-panel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bredan Nduko | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Bredan Nduko, a Full-Stack Developer building practical web applications, backend systems, APIs, and exploring modern software technologies.",
      },
      { property: "og:title", content: "Bredan Nduko | Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Practical full-stack applications, backend systems, APIs, and modern software exploration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="page-shell relative grid min-h-[min(820px,calc(100svh-2rem))] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.12fr_.88fr] lg:pb-20 lg:pt-32">
          <div className="hero-copy">
            <div className="flex items-center gap-3">
              <span className="status-dot" />
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Full-Stack Developer · Kenya
              </p>
            </div>
            <p className="mt-7 font-mono text-xs font-semibold text-primary">
              BREDAN NDUKO / FULL-STACK DEVELOPER
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Building software that solves real problems.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I build practical full-stack applications while exploring backend systems, APIs,
              databases, networking, AI, and modern software technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/projects">
                  Explore Projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/cv">
                  <FileText />
                  View CV
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex gap-5 text-sm">
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href="https://github.com/BredanNduko"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" />
                GitHub <ArrowUpRight className="size-3" />
              </a>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                href="https://www.linkedin.com/in/bredannduko/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" />
                LinkedIn <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
          <TerminalVisual />
        </div>
      </section>
      <TechMarquee />
      <AboutContent compact />
      <section className="section-pad border-y border-border bg-surface">
        <div className="page-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="02 / Selected Work"
              title="Projects, experiments, and systems I’ve built."
              description="The project infrastructure is ready for verified work, visuals, links, and case studies."
            />
            <Button asChild variant="outline">
              <Link to="/projects">
                View all projects <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <ProjectGrid projects={projects.filter((p) => p.featured)} placeholders={3} />
          </div>
        </div>
      </section>
      <StackContent />
      <LabContent />
      <JourneyContent />
      <CvPanel />
      <GithubPanel />
      <ContactPanel />
    </>
  );
}
