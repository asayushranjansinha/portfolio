import { Bio } from "./Bio";
import { GithubCalendar } from "./GithubCalendar";
import { TechStack } from "./TechStack";

import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
} from "@/components/shared/Panel";

export const AboutSection = () => {
  return (
    <section id="about" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>About Me</PanelTitle>
          <PanelDescription>
            Background, skills, and recent activity — everything that helps you
            understand my capabilities at a glance.
          </PanelDescription>
        </PanelHeader>

        <PanelContent className="space-y-6">
          <Bio />
          <TechStack />
          <GithubCalendar />
        </PanelContent>
      </Panel>
    </section>
  );
};
