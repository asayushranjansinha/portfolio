"use client";

import { Volume2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";


export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const playNamePronunciation = useSound(namePronunciationUrl);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(className)}
            onClick={() => playNamePronunciation()}
          >
            <Volume2Icon className="size-5" />
            <span className="sr-only">Pronounce my name</span>
          </Button>
        </TooltipTrigger>

        <TooltipContent side="top" className="text-sm">
          Pronounce my name
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
