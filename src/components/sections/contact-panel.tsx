import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ContactPanel({ full = false }: { full?: boolean }) {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <div className="contact-band">
          <p className="section-kicker">08 / Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
            Let’s Build Something
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            Have an idea, project, technical problem, or opportunity? Let’s talk.
          </p>
          {full && (
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Email will become available when a verified address is configured. GitHub and LinkedIn
              are open now.
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button disabled>
              <Mail />
              Email
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/BredanNduko" target="_blank" rel="noreferrer">
                <Github />
                GitHub <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/bredannduko/" target="_blank" rel="noreferrer">
                <Linkedin />
                LinkedIn <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
