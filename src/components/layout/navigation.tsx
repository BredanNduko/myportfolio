import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Stack", "/stack"],
  ["Journey", "/journey"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled && "border-b border-border bg-background/90 backdrop-blur-xl",
      )}
    >
      <div className="page-shell flex h-16 items-center justify-between lg:h-[72px]">
        <Link
          to="/"
          aria-label="Bredan Nduko home"
          className="group flex items-center gap-3 font-mono text-sm font-semibold text-foreground"
        >
          <span className="grid size-8 place-items-center border border-primary/50 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            BN
          </span>
          <span className="hidden sm:inline">Bredan Nduko</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              activeProps={{ className: "nav-link nav-link-active" }}
              activeOptions={{ exact: to === "/" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-1 lg:flex">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/BredanNduko"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://www.linkedin.com/in/bredannduko/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin />
            </a>
          </Button>
          <Button asChild size="sm">
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] border-t border-border bg-background p-5 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {links.map(([label, to], index) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between border-b border-border text-lg font-medium text-foreground"
              >
                <span>{label}</span>
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button asChild variant="outline">
              <a href="https://github.com/BredanNduko" target="_blank" rel="noreferrer">
                <Github />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/bredannduko/" target="_blank" rel="noreferrer">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button asChild className="col-span-2">
              <Link to="/projects" onClick={() => setOpen(false)}>
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
