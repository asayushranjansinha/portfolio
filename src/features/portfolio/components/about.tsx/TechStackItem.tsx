import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TechStack } from "@/features/portfolio/types/tech-stack";
import Image from "next/image";
import Link from "next/link";

interface TechStackItemProps {
  tech: TechStack;
}

export const TechStackItem = ({ tech }: TechStackItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={tech.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tech.title}
        >
          <Image
            src={`https://cdn.simpleicons.org/${tech.key}`}
            alt={`${tech.title} icon`}
            width={32}
            height={32}
            className={tech.theme ? "dark:invert! " : ""}
            unoptimized
          />
          <span className="sr-only">{tech.title}</span>
        </Link>
      </TooltipTrigger>

      <TooltipContent>
        <p>{tech.title}</p>
      </TooltipContent>
    </Tooltip>
  );
};
