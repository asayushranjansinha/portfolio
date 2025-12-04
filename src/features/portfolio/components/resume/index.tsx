import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelContent,
  PanelDescription,
} from "@/components/shared/Panel";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { USER } from "@/config/user";

export function ResumeSection() {
  return (
    <section id="resume" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>Resume</PanelTitle>
          <PanelDescription>
            Download a copy of my resume to see my skills and experience.
          </PanelDescription>
        </PanelHeader>

        <PanelContent className="flex justify-center py-6">
          <Button
            asChild
            className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-primary transition-all duration-300 ease-out"
          >
            <a target="_blank" rel="noopener" href={USER.resumeURL}>
              <DownloadIcon className="size-4" />
              Download Resume
            </a>
          </Button>
        </PanelContent>
      </Panel>
    </section>
  );
}
