import { Icons } from "@/components/shared/Icons";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelContent,
  PanelDescription,
} from "@/components/shared/Panel";
import { Button } from "@/components/ui/button";

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

        <PanelContent className="flex justify-center gap-4 py-6">
          <Button
            asChild
            className="inline-flex items-center gap-2"
          >
            <a
              href={USER.resumeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.pdf className="size-4" />
              Download PDF
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <a
              href={USER.resumeDocsURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.googelDocs className="size-4" />
              View Docs
            </a>
          </Button>
        </PanelContent>
      </Panel>
    </section>
  );
}
