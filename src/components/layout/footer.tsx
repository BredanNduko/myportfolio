import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="page-shell grid gap-8 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="font-mono text-sm text-primary">BN / 2026</p>
          <p className="mt-3 text-lg font-semibold text-foreground">Bredan Nduko</p>
          <p className="text-sm text-muted-foreground">Full-Stack Developer · Kenya</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm sm:justify-end">
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
          <Link to="/cv" className="footer-link">
            CV
          </Link>
          <a
            className="footer-link"
            href="https://github.com/BredanNduko"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight className="inline size-3" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/bredannduko/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight className="inline size-3" />
          </a>
        </div>
      </div>
      <div className="page-shell mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
        © 2026 Bredan Nduko
      </div>
    </footer>
  );
}
