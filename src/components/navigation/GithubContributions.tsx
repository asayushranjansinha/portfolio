import { GithubNumbers } from "@/components/ui/github-numbers";
import { GITHUB_URL, GITHUB_USERNAME } from "@/config/site";

export async function getGitHubTotalContributions(): Promise<number> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`,
    {
      next: { revalidate: 86400 },
    }
  );

  const data = await res.json();

  // Calculate total contributions from all days
  const total = data.contributions.reduce(
    (sum: number, day: { count: number }) => sum + day.count,
    0
  );

  return total;
}

export async function GithubContributions() {
  const count = await getGitHubTotalContributions();

  return (
    <GithubNumbers href={GITHUB_URL} count={count} label="Total Commits" />
  );
}
