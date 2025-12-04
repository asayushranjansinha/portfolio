import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { SocialLink } from "@/types/social-links";
import Link from "next/link";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-3 select-none">
        {links.map((link) => (
          <Tooltip key={link.href}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group max-w-fit"
              >
                {/* TODO: Replace with Next Image component */}
                <img
                  src={link.icon}
                  alt={link.title}
                  className={cn(
                    "rounded-sm opacity-90 size-7 group-hover:opacity-100 transition",
                    link.theme ? "dark:filter dark:invert" : ""
                  )}
                  fetchPriority="low"
                />

                <div className="flex flex-col leading-tight">
                  <span className="font-medium">{link.title}</span>
                  {link.description && (
                    <span className="text-muted-foreground text-xs">
                      {link.description}
                    </span>
                  )}
                </div>
              </Link>
            </TooltipTrigger>

            <TooltipContent side="right">
              Follow me on {link.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
