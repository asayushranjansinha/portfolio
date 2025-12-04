"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";
import Link from "next/link";

export function MobileNavSheet({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn("group/toggle flex flex-col gap-1", className)}
          size="icon"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-4">
        <SheetHeader className="sr-only">
          <SheetTitle>Site Navigation</SheetTitle>
          <SheetDescription>
            Browse sections and recent activity
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-3 mt-2">
          {items.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className="w-full justify-start text-base font-medium"
            >
              <Link href={link.href}>{link.title}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
