import { Panel, PanelHeader, PanelTitle, PanelContent, PanelDescription } from "@/components/shared/Panel";
import { USER } from "@/config/user";
import { Markdown } from "@/components/shared/MarkdownView";

export function CareerObjectiveSection() {
  return (
    <section id="career-objective" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>Career Objective</PanelTitle>
          <PanelDescription>
            What I am aiming for in my next role as a software developer.
          </PanelDescription>
        </PanelHeader>

        <PanelContent>
          <div className="font-mono text-sm">
            <Markdown>{USER.careerObjective}</Markdown>
          </div>
        </PanelContent>
      </Panel>
    </section>
  );
}
