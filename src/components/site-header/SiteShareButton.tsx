"use client";

import { Share as ShareIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";

export function SiteShareButton({ className }: { className?: string }) {
  const [, copy] = useCopyToClipboard();

  function handleCopy() {
    copy(window.location.href)
      .then(() => {
        toast.success("Link copied", {
          description: "The page URL is now in your clipboard.",
        });
      })
      .catch(() => {
        toast.error("Copy failed", {
          description: "Could not copy the link.",
        });
      });
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn("z-10 size-6 rounded-md", className)}
      onClick={handleCopy}
      aria-label="Share this page"
    >
      <ShareIcon className="size-3" />
      <span className="sr-only">Share</span>
    </Button>
  );
}
