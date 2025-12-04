import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

function Panel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel"
      className={cn(
        "border-x border-edge border-y",
        className
      )}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn("border-b border-edge p-4 select-none", className)}
      {...props}
    />
  );
}
function PanelFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="panel-footer"
      className={cn("border-t border-edge px-4 py-2", className)}
      {...props}
    />
  );
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      data-slot="panel-title"
      className={cn(
        "text-2xl md:text-3xl font-mono font-semibold uppercase tracking-wide",
        "opacity-[0.9] transition-all duration-300 group-hover/panel:opacity-100",
        className
      )}
      {...props}
    />
  );
}


function PanelDescription({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="panel-description"
      className={cn(
        "mt-1 text-sm text-muted-foreground leading-relaxed",
        "max-w-prose opacity-[0.85] transition-opacity duration-300 group-hover/panel:opacity-100",
        className
      )}
      {...props}
    />
  );
}


function PanelTitleSup({ className, ...props }: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn(
        "-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground select-none",
        className
      )}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup,PanelDescription,PanelFooter };
