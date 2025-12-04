"use client";

import { usePathname } from "next/navigation";

import { Nav } from "./Nav";
import type { NavItem } from "@/types/nav";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  const priorityItems = items.filter((item) => item.priority);

  return <Nav className="max-md:hidden" items={priorityItems} activeId={pathname} />;
}
