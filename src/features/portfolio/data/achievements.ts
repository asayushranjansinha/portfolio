import type { Achievement } from "@/features/portfolio/types/achievements";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-cgpa",
    kind: "award",
    title: "Graduation with 8.80 CGPA",
    prize: "Academic Achievement",
    date: "2024-07",
    grade: "Undergraduate",
    description:
      "Graduated with a **CGPA of 8.80**, reflecting consistent academic performance and strong fundamentals in computer science."
  },

  {
    id: "ach-365",
    kind: "award",
    title: "LeetCode 365 Days Coding Streak",
    prize: "365-Day Badge",
    date: "2023-12",
    grade: "Personal Milestone",
    description:
      "Completed a **365-day uninterrupted coding streak** on LeetCode, consistently solving algorithmic problems across data structures, DP, graphs, and system design patterns.",
    referenceLink: "https://leetcode.com/asayushranjansinha",
  },

  {
    id: "ach-500q",
    kind: "award",
    title: "500+ LeetCode Questions Solved",
    prize: "Milestone",
    date: "2023-12",
    grade: "Personal Milestone",
    description:
      "Crossed the **500+ solved problems** mark on LeetCode, demonstrating strong problem-solving depth across difficulty levels and categories.",
    referenceLink: "https://leetcode.com/asayushranjansinha",
  },

  {
    id: "ach-rating",
    kind: "award",
    title: "1500+ LeetCode Contest Rating",
    prize: "Competitive Programming Milestone",
    date: "2023-11",
    grade: "Competitive",
    description:
      "Achieved a **1500+ contest rating** on LeetCode, placing in the higher competitive tiers through strong algorithmic performance in timed contests.",
    referenceLink: "https://leetcode.com/asayushranjansinha"
  }
];
