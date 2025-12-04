import type { ExperiencePosition } from "@/features/portfolio/types/experience";
import type { Project } from "@/features/portfolio/types/project";

export function sortProjectsByPeriodDesc(projects: Project[]) {
  return [...projects].sort((a, b) => {
    const aEnd = a.period.end ? new Date(normalize(a.period.end)) : null;
    const bEnd = b.period.end ? new Date(normalize(b.period.end)) : null;

    // If both have end dates → sort by end
    if (aEnd && bEnd) return bEnd.getTime() - aEnd.getTime();

    // If one is ongoing (no end) → ongoing goes first
    if (!aEnd && bEnd) return -1;
    if (aEnd && !bEnd) return 1;

    // Both ongoing → sort by start
    const aStart = new Date(normalize(a.period.start));
    const bStart = new Date(normalize(b.period.start));
    return bStart.getTime() - aStart.getTime();
  });
}

export function sortExperiencePositionsByDurationDesc(
  positions: ExperiencePosition[]
) {
  return [...positions].sort((a, b) => {
    const aEnd = a.duration.end ? new Date(normalize(a.duration.end)) : null;
    const bEnd = b.duration.end ? new Date(normalize(b.duration.end)) : null;

    // If both have end dates → compare end dates
    if (aEnd && bEnd) return bEnd.getTime() - aEnd.getTime();

    // Current vs non-current (ongoing first)
    if (!aEnd && bEnd) return -1;
    if (aEnd && !bEnd) return 1;

    // Both ongoing → sort by start date
    const aStart = new Date(normalize(a.duration.start));
    const bStart = new Date(normalize(b.duration.start));
    return bStart.getTime() - aStart.getTime();
  });
}

/**
 * Normalize "MM.YYYY" or "YYYY" into sortable ISO-like strings.
 * - "05.2023" → "2023-05-01"
 * - "2020"    → "2020-01-01"
 */
function normalize(val: string): string {
  if (val.includes(".")) {
    const [mm, yyyy] = val.split(".");
    return `${yyyy}-${mm}-01`;
  }
  // Plain year
  return `${val}-01-01`;
}
