import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ProjectImage } from "@/types/project";
export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const show = (step: number) =>
    setSelected((current) =>
      current === null ? null : (current + step + images.length) % images.length,
    );
  useEffect(() => {
    if (selected === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") show(1);
      if (event.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [selected, images.length]);
  if (!images.length) return null;
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setSelected(index)}
            className="overflow-hidden border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-video h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-6xl border-border bg-background p-3 sm:rounded-md">
          <DialogTitle className="sr-only">Project gallery</DialogTitle>
          <DialogDescription className="sr-only">
            Expanded project image. Use arrow keys to navigate.
          </DialogDescription>
          {selected !== null && images[selected] && (
            <div className="relative">
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="max-h-[80vh] w-full object-contain"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2"
                onClick={() => show(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => show(1)}
                aria-label="Next image"
              >
                <ChevronRight />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
