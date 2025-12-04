import { NavItem } from "@/types/nav";
import { USER } from "./user";

// TODO: complete this
export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_BASE_APP_URL!,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/#profile", priority: true },
  { title: "Overview", href: "/#overview" },
  { title: "Career", href: "/#career-objective" },
  { title: "Resume", href: "/#resume", priority: true },
  { title: "Experience", href: "/#experiences", priority: true },
  { title: "Projects", href: "/#projects", priority: true },
  { title: "Blogs", href: "/#blogs" },
  { title: "Achievements", href: "/#achievements" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Contact", href: "/#contact", priority: true },
];

export const GITHUB_USERNAME = "asayushranjansinha";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const SOURCE_CODE_GITHUB_REPO = "asayushranjansinha/portfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/asayushranjansinha/portfolio";

export const LINKEDIN_URL = "https://linkedin.com/in/asayushranjansinha";

export const SHOW_SECTIONS = {
  profile: process.env.NEXT_PUBLIC_SHOW_PROFILE === "1",
  overview: process.env.NEXT_PUBLIC_SHOW_OVERVIEW === "1",
  careerObjective: process.env.NEXT_PUBLIC_SHOW_CAREER_OBJECTIVE === "1",
  resume: process.env.NEXT_PUBLIC_SHOW_RESUME === "1",
  about: process.env.NEXT_PUBLIC_SHOW_ABOUT === "1",
  experiences: process.env.NEXT_PUBLIC_SHOW_EXPERIENCES === "1",
  projects: process.env.NEXT_PUBLIC_SHOW_PROJECTS === "1",
  blogs: process.env.NEXT_PUBLIC_SHOW_BLOGS === "1",
  achievements: process.env.NEXT_PUBLIC_SHOW_ACHIEVEMENTS === "1",
  testimonials: process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS === "1",
  contact: process.env.NEXT_PUBLIC_SHOW_CONTACT === "1",
};
