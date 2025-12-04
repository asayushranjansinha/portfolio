import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/shared/Panel";
import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { EXPERIENCES } from "@/features/portfolio/data/experience";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>Experience</PanelTitle>
          <PanelDescription>
            Record of my professional roles and education.
          </PanelDescription>
        </PanelHeader>

        <div className="divide-y divide-edge">
          {EXPERIENCES.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </Panel>
    </section>
  );
}
