import Image from "next/image";
import { BriefcaseBusinessIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/features/portfolio/types/experience";
import { ExperiencePositionItem } from "./ExperiencePositionItem";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-4 py-4 pr-2 pl-4 select-none">
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={24}
              height={24}
              quality={100}
              unoptimized
              aria-hidden
            />
          ) : (
            <BriefcaseBusinessIcon className="flex size-6" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-medium">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <Badge className="bg-blue-700 text-white">Current</Badge>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
