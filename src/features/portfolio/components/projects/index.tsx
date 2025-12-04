import { CollapsibleList } from "@/components/shared/CollapsibleList";

import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/shared/Panel";
import { ProjectItem } from "./ProjectItem";
import { PROJECTS } from "@/features/portfolio/data/project";
import { sortProjectsByPeriodDesc } from "@/utils/data";

export function ProjectsSection() {
  const sorted = sortProjectsByPeriodDesc(PROJECTS);

  return (
    <section id="projects" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>
            Projects
            <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          </PanelTitle>
          <PanelDescription>
            Some projects I've built and learned from.
          </PanelDescription>
        </PanelHeader>

        <CollapsibleList
          items={sorted}
          max={4}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </Panel>
    </section>
  );
}
