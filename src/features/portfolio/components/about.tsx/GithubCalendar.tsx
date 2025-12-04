import type { Activity } from "@/components/ui/contribution-graph";
import { Suspense } from "react";
import {
  GitHubContributionFallback,
  GithubCalendarUI,
} from "./GithubCalendarUI";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

import { GITHUB_USERNAME } from "@/config/site";

export async function getGitHubContributions() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    {
      next: { revalidate: 86400 },
    }
  );

  return (await res.json()).contributions;
}

export function GithubCalendar() {
  const contributions = getGitHubContributions();

  return (
    <div className="space-y-3">
      <p className="text-xl font-mono leading-snug font-medium text-balance">
        Recent GitHub activity and contributions
      </p>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GithubCalendarUI contributions={contributions} />
      </Suspense>
    </div>
  );
}
