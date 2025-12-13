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
import { WelcomeToast } from "@/components/WelcomeToast";

export default function Page() {
  return (
    <div className="w-full *:[[id]]:scroll-mt-22">
      {/* 1. THE HOOK: Who are you? */}
      {SHOW_SECTIONS.profile && <ProfileSection />}

      {/* 2. THE SNAPSHOT: High-level metrics/skills summary */}
      {SHOW_SECTIONS.overview && <OverviewSection />}

      {/* 3. THE ASSET: Give me the document immediately. Low friction. */}
      {SHOW_SECTIONS.resume && (
        <>
          <Separator />
          <ResumeSection />
        </>
      )}

      {/* 4. THE MEAT: This is the #1 thing recruiters look for. */}
      {SHOW_SECTIONS.experiences && (
        <>
          <Separator />
          <ExperiencesSection />
        </>
      )}

      {/* 5. THE PROOF: Show me you can code. */}
      {SHOW_SECTIONS.projects && (
        <>
          <Separator />
          <ProjectsSection />
        </>
      )}

      {/* 6. THE DIFFERENTIATOR: Awards set you apart from the stack. */}
      {SHOW_SECTIONS.achievements && (
        <>
          <Separator />
          <AchievementsSection />
        </>
      )}

      {/* 7. SOCIAL PROOF: Validation from others. */}
      {SHOW_SECTIONS.testimonials && (
        <>
          <Separator />
          <TestimonialsSection />
        </>
      )}

      {/* 8. CULTURE FIT: Now that I know you can code, who are you? */}
      {SHOW_SECTIONS.about && (
        <>
          <Separator />
          <AboutSection />
        </>
      )}

      {/* 9. INTENT: Specific goals. (Lower priority than hard skills) */}
      {SHOW_SECTIONS.careerObjective && (
        <>
          <Separator />
          <CareerObjectiveSection />
        </>
      )}

      {/* 10. THOUGHT LEADERSHIP: Bonus points for writing. */}
      {SHOW_SECTIONS.blogs && (
        <>
          <Separator />
          <BlogsSection />
        </>
      )}

      {/* 11. CTA: The end of the flow. */}
      {SHOW_SECTIONS.contact && (
        <>
          <Separator />
          <ContactSection />
        </>
      )}

      <WelcomeToast />
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
