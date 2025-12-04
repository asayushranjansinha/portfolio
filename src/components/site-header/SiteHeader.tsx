import Link from "next/link";

import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNavSheet } from "@/components/navigation/MobileNav";
import { GithubContributions } from "@/components/navigation/GithubContributions";
import { ThemeToggle } from "@/components/themes/ThemeToggle";

import { SiteHeaderLogo } from "./SiteHeaderLogo";
import { SiteHeaderWrapper } from "./SiteHeaderWrapper";

import { MAIN_NAV } from "@/config/site";
import { cn } from "@/lib/utils";
import { SiteShareButton } from "./SiteShareButton";

export const SiteHeader = () => {
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 bg-background px-2 max-w-screen overflow-x-hidden border-edge",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black] data-[affix=true]:border-b",
        "transition-shadow duration-300"
      )}
    >
      <div
        className="mx-auto flex h-12 items-center justify-between gap-2 px-2 after:z-1 sm:gap-4 md:max-w-7xl border-x border-edge border-t"
        data-header-container
      >
        {/* Brand Logo */}
        <Link
          className="has-data-[visible=false]:pointer-events-none"
          href="/"
          aria-label="Home"
        >
          <SiteHeaderLogo />
        </Link>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center *:first:mr-2">
          <ThemeToggle />
          <span className="mx-2 flex h-4 w-px bg-border" />
          
          <GithubContributions />
          <span className="mx-2 flex h-4 w-px bg-border" />

          <SiteShareButton />
          <span className="mx-2 flex h-4 w-px bg-border md:hidden" />
          <MobileNavSheet className="md:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
};
