import { SHOW_SECTIONS } from "@/config/site";
import { AboutSection } from "@/features/portfolio/components/about.tsx";
import { AchievementsSection } from "@/features/portfolio/components/achievements";
import { BlogsSection } from "@/features/portfolio/components/blogs";
import { CareerObjectiveSection } from "@/features/portfolio/components/career-objective";
import { ContactSection } from "@/features/portfolio/components/contact";
import { ExperiencesSection } from "@/features/portfolio/components/experiences";
import { OverviewSection } from "@/features/portfolio/components/overview";
import { ProfileSection } from "@/features/portfolio/components/profile";
import { ProjectsSection } from "@/features/portfolio/components/projects";
import { ResumeSection } from "@/features/portfolio/components/resume";
import { TestimonialsSection } from "@/features/portfolio/components/testimonials";

import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="w-full *:[[id]]:scroll-mt-22">
      {SHOW_SECTIONS.profile && <ProfileSection />}
      {SHOW_SECTIONS.overview && <OverviewSection />}
      {SHOW_SECTIONS.careerObjective && (
        <>
          <Separator />
          <CareerObjectiveSection />
        </>
      )}
      {SHOW_SECTIONS.resume && (
        <>
          <Separator />
          <ResumeSection />
        </>
      )}
      {SHOW_SECTIONS.about && (
        <>
          <Separator />
          <AboutSection />
        </>
      )}
      {SHOW_SECTIONS.experiences && (
        <>
          <Separator />
          <ExperiencesSection />
        </>
      )}
      {SHOW_SECTIONS.projects && (
        <>
          <Separator />
          <ProjectsSection />
        </>
      )}
      {SHOW_SECTIONS.blogs && (
        <>
          <Separator />
          <BlogsSection />
        </>
      )}
      {SHOW_SECTIONS.achievements && (
        <>
          <Separator />
          <AchievementsSection />
        </>
      )}
      {SHOW_SECTIONS.testimonials && (
        <>
          <Separator />
          <TestimonialsSection />
        </>
      )}
      {SHOW_SECTIONS.contact && (
        <>
          <Separator />
          <ContactSection />
        </>
      )}
    </div>
  );
}

// TODO: Fix the separator
function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
