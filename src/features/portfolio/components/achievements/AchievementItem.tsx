import type { Achievement } from "@/features/portfolio/types/achievements";

import { ExternalLinkIcon, AwardIcon, TrophyIcon } from "lucide-react";

import { Markdown } from "@/components/shared/MarkdownView";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

const achievementIconMap = {
  award: AwardIcon,
  certification: TrophyIcon,
};

export function AchievementItem({ achievement }: { achievement: Achievement }) {
  const Icon = achievementIconMap[achievement.kind];
  const link = achievement.referenceLink || achievement.credentialURL;

  return (
    <div
      className="py-4 pr-2 pl-4 group/achievement transition-all duration-300 ease-out 
     hover:bg-accent2 hover:shadow-sm hover:-translate-y-px select-none"
    >
      {/* Header Row */}
      <div className="flex items-center gap-3">
        {/* Icon box */}
        <div
          className={cn(
            "flex size-6 shrink-0 items-center justify-center",
            "bg-muted text-muted-foreground",
            "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
            "transition-all duration-300 group-hover/achievement:bg-primary/10"
          )}
          aria-hidden
        >
          <Icon className="size-4 transition-colors duration-300 group-hover/achievement:text-primary" />
        </div>

        {/* Title */}
        <h3
          className="text-lg leading-snug font-medium line-clamp-1 
     transition-colors duration-300 group-hover/achievement:text-primary"
        >
          {achievement.title}
        </h3>

        {/* Link icon on right */}
        {link && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="relative ml-auto flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Open certificate"
              >
                <ExternalLinkIcon className="size-4" />
                <span className="sr-only">View Document</span>
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <p>View Document</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      {/* Body with left border */}
      <div
        className="relative space-y-2 before:absolute before:left-3 before:h-full before:w-px 
     before:bg-border before:transition-colors before:duration-300 
     group-hover/achievement:before:bg-primary/40"
      >
        {/* Description */}
        {achievement.description && (
          <div className="pt-2 pl-9 text-sm text-muted-foreground">
            <Markdown>{achievement.description}</Markdown>
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap gap-3 pl-9 text-sm text-muted-foreground">
          {achievement.date && <span>{achievement.date}</span>}

          {achievement.kind === "award" && achievement.prize && (
            <span>· {achievement.prize}</span>
          )}

          {achievement.kind === "award" && achievement.grade && (
            <span>· {achievement.grade}</span>
          )}

          {achievement.kind === "certification" && achievement.issuer && (
            <span>· {achievement.issuer}</span>
          )}

          {achievement.kind === "certification" && achievement.credentialID && (
            <span>· ID: {achievement.credentialID}</span>
          )}
        </div>
      </div>
    </div>
  );
}
