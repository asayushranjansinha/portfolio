import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/shared/Panel";
import { ACHIEVEMENTS } from "@/features/portfolio/data/achievements";
import { AchievementItem } from "./AchievementItem";

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>Achievements</PanelTitle>
          <PanelDescription>
            Awards and certifications I am proud to have earned.
          </PanelDescription>
        </PanelHeader>

        <div className="divide-y divide-edge">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementItem key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </Panel>
    </section>
  );
}
