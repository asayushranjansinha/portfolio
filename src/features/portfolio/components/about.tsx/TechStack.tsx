import { TECH_STACK } from "@/features/portfolio/data/tech-stack";
import { cn } from "@/lib/utils";
import { TechStackItem } from "./TechStackItem";

export const TechStack = () => {
  return (
    <div
      className={cn(
        "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
        "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
        "bg-zinc-950/0.75 dark:bg-white/0.75",
        "space-y-3 p-3"
      )}
    >
      <p className="text-xl font-mono leading-snug font-medium text-balance">
        Technologies I work with on a daily basis.
      </p>

      <ul className="flex flex-wrap justify-center gap-4 select-none">
        {TECH_STACK.map((tech) => (
          <li key={tech.key} className="flex">
            <TechStackItem tech={tech} />
          </li>
        ))}
      </ul>
    </div>
  );
};
