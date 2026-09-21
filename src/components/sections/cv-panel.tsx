import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
export function CvPanel({ full = false }: { full?: boolean }) {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <SectionHeader
          eyebrow="06 / Profile document"
          title="Curriculum Vitae"
          description="A focused summary of technical skills, projects, and learning—ready when verified CV files are supplied."
        />
        <div className="mt-10 grid border border-border bg-surface lg:grid-cols-[.8fr_1.2fr]">
          <div className="border-b border-border p-7 lg:border-b-0 lg:border-r">
            <FileText className="size-6 text-primary" />
            <h3 className="mt-12 text-2xl font-semibold">Bredan Nduko</h3>
            <p className="mt-1 text-muted-foreground">Full-Stack Developer</p>
            <p className="mt-8 font-mono text-xs text-muted-foreground">Kenya · CV preview</p>
          </div>
          <div className="p-7">
            <div className="space-y-4">
              {[
                "Profile summary",
                "Technical capabilities",
                "Project experience",
                "Education and learning",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            {full && (
              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                The preview intentionally contains no fabricated employment, education,
                certifications, or achievements.
              </p>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Button disabled>
                <Eye />
                View CV
              </Button>
              <Button variant="outline" disabled>
                <Download />
                PDF
              </Button>
              <Button variant="outline" disabled>
                <Download />
                DOCX
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Downloads will activate when the verified CV files are added.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
