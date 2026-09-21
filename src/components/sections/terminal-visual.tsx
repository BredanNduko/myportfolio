const lines = [
  ["$", "git status"],
  ["$", "npm run dev"],
  ["$", "go run ."],
  ["$", "git log --oneline"],
] as const;
export function TerminalVisual() {
  return (
    <div className="terminal" aria-hidden="true">
      <div className="flex h-11 items-center gap-2 border-b border-border px-4">
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-primary" />
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">~/workspace</span>
      </div>
      <div className="space-y-5 p-6 font-mono text-xs sm:p-8 sm:text-sm">
        {lines.map(([prompt, command], index) => (
          <div
            key={command}
            className="terminal-line"
            style={{ animationDelay: `${index * 120 + 300}ms` }}
          >
            <span className="text-primary">{prompt}</span>{" "}
            <span className="text-foreground">{command}</span>
            {index === 1 && <p className="mt-2 pl-4 text-muted-foreground">ready in 412ms</p>}
            {index === 3 && (
              <p className="mt-2 pl-4 text-muted-foreground">learning → building → refining</p>
            )}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute -bottom-px -right-px size-16 border-l border-t border-primary/25" />
    </div>
  );
}
