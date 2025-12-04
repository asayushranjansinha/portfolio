import Link from "next/link";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { USER } from "@/config/user";
import { Separator } from "@/components/ui/separator";
import { Panel, PanelContent } from "@/components/shared/Panel";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2 select-none">
      <Panel className="mx-auto md:max-w-7xl">
        <PanelContent className="py-6 px-4 text-center space-y-3">
          <p className="font-mono text-sm text-muted-foreground opacity-[0.85] transition-opacity duration-300 group/footer hover:opacity-100">
            Built by{" "}
            <Link
              className="link hover:text-primary transition-colors"
              href="https://linkedin.com/in/asayushranjansinha"
              target="_blank"
              rel="noopener"
              aria-label="See my LinkedIn profile"
              prefetch
            >
              {USER.displayName}
            </Link>
            .
            <br className="md:hidden" /> The source code is available on{" "}
            <Link
              className="link hover:text-primary transition-colors"
              href={SOURCE_CODE_GITHUB_URL}
              target="_blank"
              rel="noopener"
              prefetch
            >
              GitHub
            </Link>
            .
          </p>

          <Separator className="opacity-30" />

          <p className="font-mono text-sm text-muted-foreground opacity-[0.85] transition-opacity duration-300 group/footer hover:opacity-100">
            © {new Date().getFullYear()} {USER.displayName}. All rights
            reserved.
          </p>
        </PanelContent>

        {/* Bottom edge rule */}
        <Separator className="bg-edge" />
      </Panel>

      {/* Safe-area padding */}
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}
