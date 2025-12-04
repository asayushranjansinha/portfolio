"use client";

import { CheckIcon, CircleXIcon, CopyIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useOptimistic, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";

export const motionIconVariants = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.8 },
};

export const motionIconProps = {
  variants: motionIconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export function CopyButton({
  value,
  getValue,
  className,
  ...props
}: {
  value?: string;
  getValue?: () => string;
  className?: string;
}) {
  const [, copy] = useCopyToClipboard();
  const [state, setState] = useOptimistic<"idle" | "copied" | "failed">("idle");
  const [, startTransition] = useTransition();

  const getValueToCopy = () => {
    if (getValue) return getValue();
    if (value) return value;
    return "";
  };

  return (
    <Button
      size="icon"
      variant="secondary"
      className={cn("z-10 size-6 rounded-md", className)}
      onClick={() => {
        startTransition(async () => {
          try {
            const text = getValueToCopy();
            await copy(text);
            setState("copied");
          } catch {
            setState("failed");
          }

          await new Promise((resolve) => setTimeout(resolve, 1500));
          setState("idle");
        });
      }}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {state === "idle" ? (
          <motion.span key="idle" {...motionIconProps}>
            <CopyIcon className="size-3" />
          </motion.span>
        ) : state === "copied" ? (
          <motion.span key="copied" {...motionIconProps}>
            <CheckIcon className="size-3" strokeWidth={3} />
          </motion.span>
        ) : state === "failed" ? (
          <motion.span key="failed" {...motionIconProps}>
            <CircleXIcon className="size-3" />
          </motion.span>
        ) : null}
      </AnimatePresence>
      <span className="sr-only">Copy</span>
    </Button>
  );
}
